import React from "react";
import { Box, Heading, Image, Button } from "theme-ui";
import ShapePattern1 from "../assets/shape-pattern1.png";
import ShapePattern2 from "../assets/shape-pattern2.png";

function fixDriveUrl(url) {
  if (!url) return "";

  // Extract file ID from common Google Drive URL patterns
  const idMatch = url.match(/(?:id=|\/d\/)([a-zA-Z0-9_-]+)/);
  if (!idMatch) return url;
  const fileId = idMatch[1];

  // Construct lh3.googleusercontent.com direct URL for image thumbnails
  return `https://lh3.googleusercontent.com/d/${fileId}=s0`;
}


function SingleAchievement({ infos, id, onShowDetails }) {
  const imageUrl = fixDriveUrl(infos.image[0]);

  return (
    <Box sx={styles.banner}>
      <Box sx={styles.backdrop}>
        <Box sx={styles.banner.container}>
          <Box sx={styles.gridContainer}>
            {/* Left Portion */}
            <Box>
              <Heading sx={styles.heading}>{infos.title[0]}</Heading>
              <p style={{ fontSize: "20px", lineHeight: "1.5" }}>
                {infos.desc[0].slice(0, 100)}...
              </p>
              <Button onClick={() => onShowDetails(infos)}>Show Details</Button>
            </Box>
            {/* Right Portion */}
            <Box
              sx={styles.imageBoxContainer}
              style={id % 2 ? { order: 1 } : { order: -1 }}
            >
              <Image src={imageUrl} style={{ width: "100%" }} />
              {id % 2 ? (
                <Box sx={styles.shapeBoxRight}>
                  <Image src={ShapePattern2.src} alt="shape" />
                </Box>
              ) : (
                <Box sx={styles.shapeBoxLeft}>
                  <Image src={ShapePattern1.src} alt="shape" />
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SingleAchievement;

const styles = {
  imageBoxContainer: {
    objectFit: "cover",
    position: "relative",
    "@media screen and (max-width:500px)": {
      order: "-10 !important",
    },
  },
  gridContainer: {
    display: "grid",
    gridGap: 8,
    gridTemplateColumns: ["auto", "auto", "1fr 1fr"],
    alignItems: "center",
  },
  heading: {
    fontSize: "40px",
    fontWeight: "bold",
    textAlign: "left",
  },
  banner: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,
    container: {
      minHeight: "inherit",
      padding: "40px",
      maxWidth: "1200px",
      mx: "auto",
    },
  },
  shapeBoxLeft: {
    position: "absolute",
    bottom: -68,
    left: -160,
    zIndex: -1,
    display: ["none", null, "none", null, null, "inline-block"],
  },
  shapeBoxRight: {
    position: "absolute",
    bottom: -65,
    right: -150,
    zIndex: -1,
    display: ["none", null, "none", null, null, "inline-block"],
  },
};

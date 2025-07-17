import React from "react";
import { Box, Heading, Image, Button } from "theme-ui";
import ShapePattern1 from "../assets/shape-pattern1.png";
import ShapePattern2 from "../assets/shape-pattern2.png";

function fixDriveUrl(url) {
  if (!url) return "";
  const idMatch = url.match(/(?:id=|\/d\/)([a-zA-Z0-9_-]+)/);
  if (!idMatch) return url;
  const fileId = idMatch[1];
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
              <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "12px", color: "#444" }}>
                {infos.desc[0].slice(0, 100)}...
              </p>
              <Button onClick={() => onShowDetails(infos)}>Show Details</Button>
            </Box>
            {/* Right Portion */}
            <Box
              sx={styles.imageBoxContainer}
              style={id % 2 ? { order: 1 } : { order: -1 }}
            >
              <Image src={imageUrl} sx={{ width: "100%", borderRadius: "8px", objectFit: "cover" }} />
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
    position: "relative",
    "@media screen and (max-width:500px)": {
      order: "-10 !important",
    },
  },
  gridContainer: {
    display: "grid",
    gridGap: 4,
    gridTemplateColumns: ["1fr", null, "1fr 1fr"],
    alignItems: "center",
    gap: [3, 4],
  },
  heading: {
    fontSize: ["26px", "32px", "36px", "40px"],
    fontWeight: "bold",
    textAlign: "left",
    mb: 2,
    color: "text",
  },
  banner: {
    pt: ["100px", "120px", "140px", "160px", null, null, "180px", "200px"],
    pb: [3, 4, 5],
    position: "relative",
    zIndex: 2,
    container: {
      minHeight: "inherit",
      px: [3, 4],
      py: [3, 4],
      maxWidth: "1200px",
      mx: "auto",
    },
  },
  shapeBoxLeft: {
    position: "absolute",
    bottom: -60,
    left: -140,
    zIndex: -1,
    display: ["none", null, "inline-block"],
  },
  shapeBoxRight: {
    position: "absolute",
    bottom: -60,
    right: -140,
    zIndex: -1,
    display: ["none", null, "inline-block"],
  },
};

import { Box, Heading, Text, Image, Button } from "theme-ui";
import ShapePattern1 from "../assets/shape-pattern1.png";
import ShapePattern2 from "../assets/shape-pattern2.png";
import Link from "next/link";

function SingleAchievement({ infos, id }) {
  return (
    <>
      <Box sx={styles.banner}>
        <Box sx={styles.backdrop}>
          <Box sx={styles.banner.container}>
            <Box sx={styles.gridContainer}>
              {/* Left Portion */}
              <Box>
                <Heading sx={styles.heading}>{infos.title[0]}</Heading>
                <p style={{ fontSize: "20px", lineHeight: "1.5" }}>
                  {infos.desc[0]}
                </p>
                <Link href={infos.fb[0]} target="_blank" passHref>
                  <Button>Show Details</Button>
                </Link>
              </Box>
              {/* Right Portion */}
              <Box
                sx={styles.imageBoxContainer}
                style={id % 2 ? { order: 1 } : { order: -1 }}
              >
                <Image src={infos.image[0]} style={{ width: "100%" }} />
                {/* <Image
                  sx={styles.imageBoxContainer.svgImageLeft}
                  src={ShapeLeft.src}
                />
                <Image
                  sx={styles.imageBoxContainer.svgImageRight}
                  src={ShapeRight.src}
                /> */}
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
    </>
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
    svgImageLeft: {
      position: "absolute",
      bottom: 0,
      height: "30%",
    },
    svgImageRight: {
      position: "absolute",
      left: "-15%",
      zIndex: -1,
      height: "30%",
    },
  },
  imageBoxContainerSM: {
    order: -1,
    objectFit: "cover",
    position: "relative",
    svgImageLeft: {
      position: "absolute",
      bottom: 0,
      height: "30%",
    },
    svgImageRight: {
      position: "absolute",
      // left: "right",
      left: "-15%",
      zIndex: -1,
      height: "30%",
    },
  },
  gridContainer: {
    display: "grid",
    gridGap: 8,
    gridTemplateColumns: ["auto", "auto", " 1fr 1fr"],
    alignItems: "center",
  },
  heading: {
    fontSize: "40px",
    fontWeight: "bold",
    textAlign: "left",
  },
  para: {
    fontSize: "20px",
    padding: "10px 0",
    backgroundColor: "Pink",
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
    contentBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "center",
      mb: ["40px", null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: "center",
      textAlign: "center",
      display: "inline-flex",
      mb: [0, null, -6, null, null, "-40px", null, -3],
      img: {
        position: "relative",
        height: [200, "auto"],
      },
    },
  },
  shapeBoxLeft: {
    position: "absolute",
    bottom: -68,
    left: -160,
    zIndex: -1,
    display: ["none", null, "none", null, null, "inline-block"],
    // "@media screen and (max-width:1450)": {
    //   width: "200px",
    //   height: "200px",
    //   left: -67,
    // },
    // "@media screen and (max-width:500)": {
    //   width: "150px",
    //   height: "150px",
    //   left: -67,
    // },
  },
  shapeBoxRight: {
    position: "absolute",
    bottom: -65,
    right: -150,
    zIndex: -1,
    display: ["none", null, "none", null, null, "inline-block"],
    // "@media screen and (max-width:1450)": {
    //   width: "200px",
    //   height: "200px",
    //   right: -67,
    // },
    // "@media screen and (max-width:500)": {
    //   width: "150px",
    //   height: "150px",
    //   right: -67,
    // },
  },
};

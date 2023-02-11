/** @jsxImportSource @theme-ui/core */
import ShapeLeft from "../assets/shape-left.png";
import ShapeRight from "../assets/shape-right.png";
import { Container, Box, Heading, Text, Image, Button } from "theme-ui";
import BannerImg from "../assets/homepage_photo.jpg";
import KeyFeature from "../components/KeyFeature/key-feature";
import Services from "../components/services/service";

export default function Home() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h4" variant="heroPrimary">
            Robotics Club, Paschimanchal Campus, Lamachaur, Pokhara.
          </Heading>
          <Text as="p" variant="heroSecondary">
            We are a team of multiple disciples teamed up to continue and
            improve the culture of innovation, creative learning and teaching
            with extracurricular activities around campus.
          </Text>
          <Button variant="primary">Explore</Button>
        </Box>
        <Box sx={styles.banner.imageBox}>
          <Image src={BannerImg.src} alt="banner" />
        </Box>
      </Container>
      <KeyFeature />
      <Services />
    </section>
  );
}

const styles = {
  banner: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,

    container: {
      minHeight: "inherit",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
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
};

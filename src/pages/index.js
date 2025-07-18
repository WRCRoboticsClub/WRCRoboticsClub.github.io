/** @jsxImportSource @theme-ui/core */
import { Container, Box, Heading, Text, Button } from "theme-ui";
import Lottie from "lottie-react";
import RobotAnimation from "../assets/robot-hero.json";
import KeyFeature from "../components/KeyFeature/key-feature";
import Services from "../components/services/service";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>

        <Box sx={styles.banner.contentBox}>
          <Heading as="h4" variant="heroPrimary">
            Robotics Club, Pashchimanchal Campus, Pokhara.
          </Heading>
          <Text as="p" variant="heroSecondary">
          We are a team of passionate students working to promote innovation, creative learning,
          and technical growth through engaging activities beyond the classroom.
          </Text>
          <Button variant="primary">Explore</Button>
        </Box>

        {/* Right - Animation */}
        <Box sx={styles.banner.animationBox}>
          <Lottie
            animationData={RobotAnimation}
            loop
            style={{ width: "auto", maxWidth: "20000px", height: "auto" }}
          />
        </Box>
      </Container>
      <KeyFeature />
      {/* <Services /> */}
      < Testimonials />
    </section>
  );
}

const styles = {
  banner: {
    pt: ["120px", "130px", "140px", "150px", "180px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,

    container: {
      display: "flex",
      flexDirection: ["column", "column", "row"],
      justifyContent: "space-between",
      alignItems: "center",
      px: [3, 4, 5],
      gap: [4, 5, 6],
    },

    contentBox: {
      flex: "1",
      textAlign: ["center", "center", "center"],
      maxWidth: ["100%", "90%", "50%"],
      mb: ["30px", "40px", 0],
    },

    animationBox: {
      flex: "1",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: ["100%", "100%", "50%"],
    },
  },
};

import { Box, Container, Grid, Image, Heading, Text } from "theme-ui";
import SectionHeader from "../components/section-header";
import Logo from "../assets/Club_logo.png";

export default function EventForms() {
  return (
    <Box>
      <Box sx={styles.banner}>
        <Container css={{ textAlign: "center" }}>
          <SectionHeader title="Annual Event Forms " />
        </Container>
        <Grid sx={styles.grid}>
          <Box sx={styles.reviewCard}>
            <div className="card-event">
              <Image
                src={Logo.src}
                sx={styles.image}
                alt="Achievements image"
              />
            </div>

            <Box>
              <Heading as="h3" sx={styles.title}>
                Heading
              </Heading>
              <Heading as="h5" sx={styles.title}>
                Date : 2079-03-24
              </Heading>

              <Text sx={styles.description}>item.description</Text>
            </Box>
          </Box>
          <div>Hello 2</div>
        </Grid>
      </Box>
    </Box>
  );
}

const styles = {
  banner: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    container: {
      minHeight: "60vh",
      maxHeight: "80vh",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      "@media screen and (max-width: 800px)": {
        flexDirection: "column",
        top: "0",
        minHeight: "0vh",
      },
    },
  },
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ["35px 0px", null, 0, null, null, "30px 35px"],
    gridTemplateRows: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
  },
  reviewCard: {
    boxShadow: "0px 0px 3px rgba(38, 78, 118, 0.35)",
    transition: "all 0.3s",
    borderRadius: "6px",
    bg: "white",
    textAlign: "center",
    display: "flex",
    // displayItems: "column",
    m: [
      "28px 5px 30px 5px",
      "28px 20px 30px 20px",
      "28px 15px 30px 15px",
      "28px 15px 30px 15px",
      "30px 20px 40px",
    ],
    "&:hover": {
      boxShadow: "0px 6px 30px rgba(38, 78, 118, 0.1)",
    },
    ".card-event": {
      display: "flex",
      alignItems: "center",
      // marginTop: [5, null, null, "33px"],
      marginBottom: [5, null, null, "33px"],
      ".image": {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: "flex",
        border: "2px solid red",
        img: {
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          objectFit: "cover",
        },
      },
    },
  },
};

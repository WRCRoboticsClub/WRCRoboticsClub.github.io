/** @jsxImportSource @theme-ui/core */
import { jsx, Container, Heading, Text, Box, Image, Grid } from "theme-ui";
import SectionHeader from "./section-header";

export default function PreviousEvents({ previousEvents }) {
  return (
    <section id="events" sx={{ variant: "section.events" }}>
      <Container css={{ textAlign: "center" }}>
        <SectionHeader title="Previous Events" />
      </Container>
      <Grid sx={styles.grid}>
        {previousEvents.data.map((item, idx) => (
          <Box sx={styles.reviewCard} key={idx}>
            <div className="card-event">
              <Image src={item.image[0]} sx={styles.image} alt="Client Image" />
            </div>

            <Heading as="h3" sx={styles.title}>
              {item.title[0]}
            </Heading>
            <Heading as="h5" sx={styles.title}>
              Date : {item.date[0]}
            </Heading>
            <Text sx={styles.description}>Type : {item.type[0]}</Text>
            <Text sx={styles.description}>{item.desc[0]}</Text>
          </Box>
        ))}
      </Grid>
    </section>
  );
}

const styles = {
  image: {
    width: "100%",
    objectFit: "cover",
    height: "50vh",
  },
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ["35px 0px", null, 0, null, null, "30px 35px"],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
  },
  reviewCard: {
    boxShadow: "0px 0px 1px rgba(38, 78, 118, 0.35)",
    transition: "all 0.3s",
    borderRadius: "6px",
    // p: [
    //   "30px 20px 35px",
    //   "30px 25px 35px",
    //   "30px 20px 35px",
    //   "35px 30px 40px 40px",
    //   "30px 30px 35px",
    //   "35px 30px 40px 40px",
    // ],
    bg: "white",
    textAlign: "left",
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
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, "22px"],
    color: "text",
    lineHeight: 1,
    // paddingLeft: "10px",
    p: ["0px 0px 0px 20px"],
  },
  description: {
    fontSize: [1, null, null, 1],
    fontWeight: "normal",
    color: "text",
    lineHeight: [1.85, null, 2],
    p: ["0px 0px 0px 20px"],
    alignText: "center",
    display: "block",
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: "3px",
    color: "text",
    lineHeight: 1.3,
  },
};

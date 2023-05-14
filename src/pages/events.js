import { Container, Box, Heading, Text, Image, Button } from "theme-ui";
import PreviousEvents from "../components/previousEvents";
import BannerImg from "../assets/events/b_f_s_2079.jpg";
import { useRouter } from "next/router";

export default function Events({eventData}) {
  const router = useRouter();
  return (
    <Box>
      <Box sx={styles.banner} id="events">
        <Box sx={styles.backdrop}>
          <Box sx={styles.banner.container}>
            <Box sx={styles.banner.imageBox}>
              <Image src={BannerImg.src} alt="banner" />
            </Box>
            <Box sx={styles.banner.contentBox}>
              <Heading variant="heroPrimary" sx={styles.title}>
                Battle for speed 2022 and Project Demonstration
              </Heading>
              <Box sx={styles.banner.descriptions}>
                <Text variant="title">Date : shrawan 7,2079</Text>
                <Text variant="subTitle">Type : physical,competition,open</Text>
                <Text variant="subTitle">
                  This is a open competition and exhibition by Robotics Club,
                  Paschimanchal Campus.
                </Text>
              </Box>

              <Button
                sx={styles.banner.button}
                variant="primary"
                onClick={() => router.push("/registerForm")}
              >
                Join In
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <PreviousEvents previousEvents={eventData}/>
      </Box>
    </Box>
  );
}

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch("https://wrcrobotics.pythonanywhere.com/events");

  const eventData = await res.json();

  // Pass data to the page via props
  return { props: { eventData } };
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
    contentBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "center",
      my: ["20px", null, null, null, null, 5],
    },
    imageBox: {
      // justifyContent: "left",
      display: "flex",
      alignContent: "flex-start",
      objectFit: "cover",
      maxWidth: "60%",
      "@media screen and (max-width: 800px)": {
        maxWidth: "100%",
      },
    },
    descriptions: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      mb: [3, null, null, null, null, 7],
    },
  },
  backdrop: {
    maxWidth: "100%",
    backgroundImage: "linear-gradient(to right,white, white,skyblue)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  title: {
    fontSize: [0, "20px", null, "25px"],
    color: "#000000",
    textAlign: "center",
    letterSpacing: ["1.5px", null, "2px"],
    textTransform: "uppercase",
    fontWeight: "700",
    mb: 2,
    mt: 5,
    lineHeight: 1.5,
  },
};

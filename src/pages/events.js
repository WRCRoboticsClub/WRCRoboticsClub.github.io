import { Container, Box, Heading, Text, Image, Button } from "theme-ui";
import PreviousEvents from "../components/previousEvents";
import { useRouter } from "next/router";

// Add the URL transformation function
function fixDriveUrl(url) {
  if (!url) return "";

  // Extract file ID from common Google Drive URL patterns
  const idMatch = url.match(/(?:id=|\/d\/)([a-zA-Z0-9_-]+)/);
  if (!idMatch) return url;
  const fileId = idMatch[1];

  // Construct lh3.googleusercontent.com direct URL for image thumbnails
  return `https://lh3.googleusercontent.com/d/${fileId}=s0`;
}

export default function Events({ eventData }) {
  // Fix image URLs in all event data
  const fixedEventData = {
    ...eventData,
    data: eventData.data.map(event => ({
      ...event,
      image: event.image.map(fixDriveUrl)
    }))
  };

  const highlightData = fixedEventData.data.find((e) => e.status[0] == "1");
  const previousData = fixedEventData.data.filter((e) => e.status[0] !== "1");
  
  const router = useRouter();
  const getFullUrl = (url) => {
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    return `http://${url}`;
  };

  return (
    <Box>
      <Box sx={styles.banner} id="events">
        <Box sx={styles.backdrop}>
          <Box sx={styles.banner.container}>
            {!highlightData ? (
              <Box sx={styles.banner.contentBox}>
                <Heading variant="heroPrimary" sx={styles.title}>
                  No any active events
                </Heading>
                <Text variant="subTitle">Tune in to not miss the surprise thats coming soon</Text>
              </Box>
            ) : (
              <Box sx={styles.banner.container}>
                <Box sx={styles.banner.imageBox}>
                  {/* Use transformed URL */}
                  <Image src={highlightData.image[0]} alt="banner" />
                </Box>
                <Box sx={styles.banner.contentBox}>
                  <Heading variant="heroPrimary" sx={styles.title}>
                    {highlightData.title[0]}
                  </Heading>
                  <Box sx={styles.banner.descriptions}>
                    <Text variant="title">Date : {highlightData.date[0]}</Text>
                    <Text variant="subTitle">
                      Type : {highlightData.type[0]}
                    </Text>
                    <Text variant="subTitle">{highlightData.desc[0]}</Text>
                  </Box>

                  <a href={getFullUrl(highlightData?.formLink[0])}>
                    <Button
                      sx={styles.banner.button}
                      variant="primary"
                    >
                      Join In
                    </Button>
                  </a>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      <Box>
        {/* Pass fixed data to PreviousEvents */}
        <PreviousEvents previousEvents={previousData} />
      </Box>
    </Box>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://wrcrobotics.pythonanywhere.com/events");
  const eventData = await res.json();

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

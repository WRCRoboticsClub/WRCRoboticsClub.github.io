import { Container, Box } from "theme-ui";
import PreviousEvents from "../components/previousEvents";

export default function Events({ eventData }) {
  // Clean and fix image URLs
  const fixedEventData = {
    ...eventData,
    data: eventData.data.map(event => ({
      ...event,
      image: event.image.map(fixDriveUrl)
    }))
  };

  // Only previous events shown
  const previousData = fixedEventData.data.filter((e) => e.status[0] !== "1");

  return (
    <Box sx={{ pt: ['100px', '100px', '100px'] }}>
      <PreviousEvents previousEvents={previousData} />
    </Box>
  );
}

// Util to fix Google Drive URLs
function fixDriveUrl(url) {
  if (!url) return "";
  const idMatch = url.match(/(?:id=|\/d\/)([a-zA-Z0-9_-]+)/);
  if (!idMatch) return url;
  const fileId = idMatch[1];
  return `https://lh3.googleusercontent.com/d/${fileId}=s0`;
}

// Fetch data at build time
export async function getStaticProps() {
  const res = await fetch("https://wrcrobotics.pythonanywhere.com/events");
  const eventData = await res.json();
  return { props: { eventData } };
}

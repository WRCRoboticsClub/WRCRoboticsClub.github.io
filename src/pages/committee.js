/** @jsxImportSource @theme-ui/core */
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import TeamCard from "../components/team-card";

// -----------------------------
// Safe helpers
// -----------------------------
const safeArray = (data) => (Array.isArray(data) ? data : []);

const get = (obj, key) => safeArray(obj?.data?.[key]);

// function toGoogleImageUrl(url = "") {
//   const match = url.match(/id=([^&]+)/);
//   if (!match) return url;
//   return `https://lh3.googleusercontent.com/d/${match[1]}=w500`;
// }
function toGoogleImageUrl(url = "") {
  const fileId =
    url.match(/\/d\/([^/]+)/)?.[1] ||
    url.match(/id=([^&]+)/)?.[1];

  if (!fileId) return url;

  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w500`;
}

// -----------------------------
// Page Component
// -----------------------------
export default function Committee({ committeeData = {} }) {
  const data = committeeData;

  // Role mapping (clean + scalable)
  const roles = {
    top: [
      ...get(data, "Executive Head"),
      ...get(data, "Vice Executive Head"),
    ],

    second: get(data, "Executive Member"),

    third: [
      ...get(data, "Advisor"),
      ...get(data, "4th year Senior Member"),
      ...get(data, "3rd year Senior Member"),
    ],

    fourth: [
      ...get(data, "Design Transformer"),
      ...get(data, "Logistic Shaft"),
      ...get(data, "Media Rectifier"),
      ...get(data, "Project Combuster"),
      ...get(data, "Public Relation Processor"),
    ],

    fifth: get(data, "General Member"),
  };

  // -----------------------------
  // Reusable renderer
  // -----------------------------
  const renderCards = (list = []) =>
    list.map((member, idx) => (
      <TeamCard
        key={`${member?.name?.[0] || "member"}-${idx}`}
        src={toGoogleImageUrl(member?.image?.[0])}
        title={member?.name?.[0]}
        altText={member?.name?.[0]}
        designation={member?.position?.[0]}
        fb={member?.fb?.[0]}
        insta={member?.insta?.[0]}
        tweet={member?.twitter?.[0]}
        linkedin={member?.linkedin?.[0]}
      />
    ));

  return (
    <section sx={styles.banner} id="committee">
      <Container sx={styles.banner.container}>
        <SectionHeader slogan="Meet Our Executive Committee" />

        <Grid sx={styles.grid}>
          {renderCards(roles.top)}
          {renderCards(roles.second)}
          {renderCards(roles.third)}
          {renderCards(roles.fourth)}
          {renderCards(roles.fifth)}
        </Grid>
      </Container>
    </section>
  );
}

// -----------------------------
// Data fetching
// -----------------------------
export async function getStaticProps() {
  try {
    const res = await fetch(
      "https://wrcrobotics.pythonanywhere.com/committee"
    );

    const committeeData = await res.json();

    return {
      props: { committeeData },
      revalidate: 10,
    };
  } catch (err) {
    return {
      props: { committeeData: {} },
      revalidate: 10,
    };
  }
}
export async function getServerSideProps() {
  try {
    const res = await fetch(
      "https://wrcrobotics.pythonanywhere.com/committee",
      { cache: "no-store" }
    );

    const committeeData = await res.json();

    return {
      props: { committeeData },
    };
  } catch (err) {
    return {
      props: { committeeData: {} },
    };
  }
}

// -----------------------------
// Styles (cleaned)
// -----------------------------
const styles = {
  banner: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px"],
    pb: [2, null, 5],
    position: "relative",
    zIndex: 2,

    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },

  grid: {
    mt: 0,
    gridGap: ["30px"],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      "repeat(2,1fr)",
      "repeat(3,1fr)",
    ],
  },
};


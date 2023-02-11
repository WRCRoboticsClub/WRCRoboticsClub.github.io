/** @jsxImportSource @theme-ui/core */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import TeamCard from "../components/team-card";
// import { data } from "../data/committee.data";

export default function Committee({ committeeData }) {
  // committeeData.sort((a, b) => {
  //   return a.position - b.position;
  // });

  //console.log("api", committeeData);
  return (
    <section sx={styles.banner} id="committee">
      <SectionHeader slogan="Page Under Construction" />
      {/* <Container sx={styles.banner.container}>
        <SectionHeader slogan="Meet Our Enthusiastic 17th Executive Committee" />
        <Grid sx={styles.grid}>
          {committeeData.map((item) => (
            <TeamCard
              key={item.id}
              src={item.picture}
              title={item.name}
              altText={item.name}
              email={item.email}
              designation={item.position}
              fb={item.fb}
              insta={item.insta}
              tweet={item.tweet}
              linkedin={item.lnkdin}
            />
          ))}
        </Grid>
      </Container> */}
    </section>
  );
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://backend-robotics.herokuapp.com/comittee`);
//   const committeeData = await res.json();

//   // Pass data to the page via props
//   return { props: { committeeData } };
// }

const styles = {
  banner: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,

    container: {
      minHeight: "inherit",
      display: "flex",
      flexDirection: "column",
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
        // width: [200, "auto"],
      },
    },
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
};

/** @jsxImportSource @theme-ui/core */
import { jsx } from "theme-ui";
import { useState, useEffect } from "react";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import TeamCard from "../components/team-card";
// import { data } from "../data/committee.data";
// New update with images
export default function Committee({ committeeData }) {
  // committeeData.sort((a, b) => {
  //   return a.position - b.position;
  // });
  const executiveHead = committeeData.data?.["Executive Head"] || "";
  const viceExecutiveHead = committeeData.data?.["Vice-Executive Head"] || "";
  const executiveMember = committeeData.data?.["Executive Member"] || ""; //mapping required
  const treasurer = committeeData.data?.["Executive Memberand Treasurer"] || "";

  const advisor = committeeData.data?.["Advisor"] || ""; //mapping required
  const seniorMember = committeeData.data?.["Senior Member"] || ""; //mapping required
  const designTransformer = committeeData.data?.["Design Transformer"] || "";
  const logisticShaft = committeeData.data?.["Logistics Shaft"] || "";
  const mediaRectifier = committeeData.data?.["Media Rectifier"] || "";
  const projectCombuster = committeeData.data?.["Project Combuster"] || "";
  const publicRelationProcessor =
    committeeData.data?.["Public Relation Processor"] || "";

  const generalMember = committeeData.data?.["General Member"] || ""; //mapping required

  const toplevel = [...executiveHead, ...viceExecutiveHead];
  const secondlevel = [...executiveMember, ...treasurer];
  const thirdlevel = [...advisor, ...seniorMember];
  const fourthlevel = [
    ...designTransformer,
    ...logisticShaft,
    ...mediaRectifier,
    ...projectCombuster,
    ...publicRelationProcessor,
  ];

  return (
    <section sx={styles.banner} id="committee">
      {committeeData ? (
        <Container sx={styles.banner.container}>
          <SectionHeader slogan="Meet Our Enthusiastic 17th Executive Committee" />
          <Grid sx={styles.grid}>
            {toplevel.map((level, idx) => (
              <TeamCard
                key={idx}
                src={level.image[0]}
                title={level.name[0]}
                altText={level.name[0]}
                designation={level.position[0]}
                fb={level.fb[0]}
                insta={level.insta[0]}
                tweet={level?.twitter[0]}
                linkedin={level?.linkedin[0]}
              />
            ))}
            {secondlevel.map((level, idx) => (
              <TeamCard
                key={idx}
                src={level.image[0]}
                title={level.name[0]}
                altText={level.name[0]}
                designation={level.position[0]}
                fb={level.fb[0]}
                insta={level.insta[0]}
                tweet={level.twitter[0]}
                linkedin={level.linkedin[0]}
              />
            ))}
            {thirdlevel.map((level, idx) => (
              <TeamCard
                key={idx}
                src={level.image[0]}
                title={level.name[0]}
                altText={level.name[0]}
                designation={level.position[0]}
                fb={level.fb[0]}
                insta={level.insta[0]}
                tweet={level.twitter[0]}
                linkedin={level.linkedin[0]}
              />
            ))}
            {fourthlevel.map((level, idx) => (
              <TeamCard
                key={idx}
                src={level.image[0]}
                title={level.name[0]}
                altText={level.name[0]}
                designation={level.position[0]}
                fb={level.fb[0]}
                insta={level.insta[0]}
                tweet={level.twitter[0]}
                linkedin={level.linkedin[0]}
              />
            ))}
            {generalMember.map((level, idx) => (
              <TeamCard
                key={idx}
                src={level.image[0]}
                title={level.name[0]}
                altText={level.name[0]}
                designation={level.position[0]}
                fb={level.fb[0]}
                insta={level.insta[0]}
                tweet={level.twitter[0]}
                linkedin={level.linkedin[0]}
              />
            ))}
          </Grid>
        </Container>
      ) : (
        <SectionHeader slogan="Page Under Construction" />
      )}
    </section>
  );
}

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch("https://wrcrobotics.pythonanywhere.com/committee");

  const committeeData = await res.json();

  // Pass data to the page via props
  return { props: { committeeData } };
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

/** @jsxImportSource @theme-ui/core */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../section-header";
import FeatureCardColumn from "./feature-card-column.js";
import {data} from "./key-feature.data";

export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.KeyFeature" }} id="feature">
      <Container sx={styles.container}>
        <SectionHeader
          title="Achievements"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc.src}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  container: {
    marginTop: "100px",
  },
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
};

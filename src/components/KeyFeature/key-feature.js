/** @jsxImportSource @theme-ui/core */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../section-header";
import FeatureCardColumn from "./feature-card-column.js";
import {data} from "./key-feature.data";

export default function KeyFeature() {
  return (
    <section sx={styles.section} id="feature">
      <Container sx={styles.container}>
        <SectionHeader
          title="Our Focus Areas"
          subtitle="What We Do"
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
  section: {
    py: [80, 100, 120],
    position: "relative",
    background: "linear-gradient(135deg, rgba(99, 102, 241, 0.02) 0%, rgba(0, 212, 255, 0.02) 50%, rgba(139, 92, 246, 0.02) 100%)",
    
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "url('/grid-pattern.svg')",
      opacity: 0.03,
      pointerEvents: "none",
    },
  },
  
  container: {
    position: "relative",
    zIndex: 2,
  },
  
  grid: {
    width: ["100%", "90%", "100%"],
    mx: "auto",
    gridGap: [
      "40px",
      "50px",
      "40px 40px",
      "50px 60px",
      "40px",
      "50px 40px",
      "60px 50px",
    ],
    gridTemplateColumns: [
      "repeat(1, 1fr)",
      "repeat(2, 1fr)",
      "repeat(2, 1fr)",
      "repeat(3, 1fr)",
    ],
    mt: [60, 80],
  },
};
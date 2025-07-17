/** @jsxImportSource @theme-ui/core */
import { jsx } from "theme-ui";
import { Container } from "theme-ui";
import SectionHeader from "./section-header";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { data } from "./testimonials.data";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

export default function Testimonials() {
  return (
    <section sx={{ variant: "section.Testimonials" }} id="testimonials">
      <Container sx={styles.container}>
        <SectionHeader title="Testimonials" />
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          showDots={false}
          arrows={false}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
        >
          {data.map((person) => (
            <div
              key={person.id}
              sx={{
                textAlign: "center",
                px: 3,
                py: 4,
                borderRadius: 8,
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                bg: "background",
                mx: 2,
              }}
            >
            
              <h3 sx={{ fontSize: 3, mb: 1 }}>{person.name}</h3>
              <p sx={{ fontStyle: "italic", color: "textMuted", mb: 2 }}>
                {person.role}
              </p>
              <p sx={{ fontSize: 2, color: "text" }}>“{person.text}”</p>
            </div>
          ))}
        </Carousel>
      </Container>
    </section>

    
  );
}


const styles = {
  container: {
    marginTop: "80px",
  },
};

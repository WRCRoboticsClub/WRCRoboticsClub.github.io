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
    <section sx={styles.section} id="testimonials">
      <Container sx={styles.container}>
        <SectionHeader 
          title="What Our Members Say" 
          subtitle="Testimonials"
        />
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          showDots={true}
          arrows={false}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-20-px"
          dotListClass="custom-dots"
        >
          {data.map((person) => (
            <div
              key={person.id}
              sx={styles.testimonialCard}
            >
              <div sx={styles.quote}>
                <p sx={styles.text}>"{person.text}"</p>
              </div>
              <div sx={styles.author}>
                <h3 sx={styles.name}>{person.name}</h3>
                <p sx={styles.role}>{person.role}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}

const styles = {
  section: {
    py: [80, 100, 120],
    background: "linear-gradient(135deg, rgba(99, 102, 241, 0.02) 0%, rgba(0, 212, 255, 0.02) 100%)",
  },
  
  container: {
    position: "relative",
  },
  
  testimonialCard: {
    textAlign: "center",
    p: [6, 7],
    mx: 3,
    background: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(20px)",
    borderRadius: "2xl",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
    transition: "all 0.4s ease",
    position: "relative",
    
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 20px 40px rgba(99, 102, 241, 0.1)",
    },
  },
  
  quote: {
    mb: 5,
    position: "relative",
    
    "&::before": {
      content: '"❝"',
      position: "absolute",
      top: "-20px",
      left: "50%",
      transform: "translateX(-50%)",
      fontSize: "3rem",
      color: "primary",
      opacity: 0.3,
    },
  },
  
  text: {
    fontSize: [2, 3],
    lineHeight: "relaxed",
    color: "text",
    fontStyle: "italic",
    fontWeight: "medium",
  },
  
  author: {
    pt: 4,
    borderTop: "1px solid rgba(99, 102, 241, 0.1)",
  },
  
  name: {
    fontSize: [3, 4],
    fontWeight: "bold",
    color: "text",
    mb: 1,
    fontFamily: "heading",
  },
  
  role: {
    fontSize: [1, 2],
    color: "text_secondary",
    fontWeight: "medium",
  },
};
/** @jsxImportSource @theme-ui/core */
import { jsx, Image, Box, Heading, Text } from "theme-ui";

export default function FeatureCardColumn({
  src,
  altText = "default alt text",
  title,
  text,
}) {
  return (
    <Box sx={styles.card}>
      <Image src={src} altText={altText} sx={styles.img} />
      <Box sx={styles.wrapper}>
        <Heading sx={styles.wrapper.title}>{title}</Heading>
        <Text sx={styles.wrapper.subTitle}>{text}</Text>
      </Box>
    </Box>
  );
}

const styles = {
  card: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    p: [6, 7],
    background: "rgba(255, 255, 255, 0.7)",
    backdropFilter: "blur(20px)",
    borderRadius: "2xl",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
    transition: "all 0.4s ease",
    position: "relative",
    overflow: "hidden",
    
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(0, 212, 255, 0.05) 100%)",
      opacity: 0,
      transition: "opacity 0.4s ease",
      pointerEvents: "none",
    },
    
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 20px 40px rgba(99, 102, 241, 0.15)",
      
      "&::before": {
        opacity: 1,
      },
    },
  },
  
  img: {
    width: ["80px", "90px", "100px"],
    height: ["80px", "90px", "100px"],
    objectFit: "contain",
    mb: 4,
    filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))",
    transition: "transform 0.4s ease",
    
    ".card:hover &": {
      transform: "scale(1.1)",
    },
  },
  
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    zIndex: 2,
    
    title: {
      fontSize: [3, 4],
      color: "text",
      lineHeight: 1.3,
      fontWeight: "bold",
      mb: 3,
      fontFamily: "heading",
    },
    
    subTitle: {
      fontSize: [1, 2],
      fontWeight: "body",
      lineHeight: "relaxed",
      color: "text_secondary",
      maxWidth: "280px",
      mx: "auto",
    },
  },
};

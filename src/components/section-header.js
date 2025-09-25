import React from "react";
import { Box, Text, Heading } from "theme-ui";

export default function SectionHeader({ title, subtitle, slogan, isWhite }) {
  return (
    <Box sx={styles.container}>
      {(subtitle || slogan) && (
        <Text sx={{
          ...styles.subtitle,
          color: isWhite ? "rgba(255, 255, 255, 0.8)" : "primary",
        }}>
          {subtitle || slogan}
        </Text>
      )}
      <Heading sx={{
        ...styles.title,
        color: isWhite ? "white" : "text",
      }}>
        {title}
      </Heading>
    </Box>
  );
}

const styles = {
  container: {
    textAlign: "center",
    maxWidth: "600px",
    mx: "auto",
    mb: [6, 8],
  },
  
  subtitle: {
    fontSize: [1, 2],
    fontWeight: "bold",
    letterSpacing: "2px",
    textTransform: "uppercase",
    mb: 3,
    display: "inline-block",
    px: 4,
    py: 2,
    borderRadius: "full",
    background: "rgba(99, 102, 241, 0.1)",
    border: "1px solid rgba(99, 102, 241, 0.2)",
  },
  
  title: {
    fontSize: [4, 5, 6],
    fontWeight: "bold",
    lineHeight: 1.2,
    fontFamily: "heading",
    position: "relative",
    
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "-8px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "80px",
      height: "4px",
      background: "linear-gradient(90deg, #6366f1, #00d4ff)",
      borderRadius: "2px",
    },
  },
};

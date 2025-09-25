/** @jsxImportSource @theme-ui/core */
import { jsx, Box, Flex, Text } from "theme-ui";
import { Link } from "../components/link";
import ClubLogo from "../assets/ClubLogo.jpg";

export default function Logo({ ...rest }) {
  return (
    <Link
      path="/"
      sx={{
        variant: "links.logo",
        display: "flex",
        cursor: "pointer",
        mr: 15,
        textDecoration: "none",
        "&:hover": {
          transform: "scale(1.05)",
        },
        transition: "transform 0.2s ease",
      }}
      {...rest}
    >
      <Flex sx={styles.logoContainer}>
        <Box sx={styles.logoImageContainer}>
          <img 
            src={ClubLogo.src || ClubLogo} 
            alt="WRC Robotics Club Logo"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              objectFit: "cover",
              filter: "drop-shadow(0 4px 20px rgba(59, 130, 246, 0.3))",
              transition: "all 0.3s ease",
            }}
          />
        </Box>
        <Box sx={styles.logoTextContainer}>
          <Text sx={styles.logoTitle}>Robotics Club</Text>
  
        </Box>
      </Flex>
    </Link>
  );
}

const styles = {
  logoContainer: {
    alignItems: "center",
    gap: 3,
  },
  logoImageContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    objectFit: "cover",
    filter: "drop-shadow(0 4px 20px rgba(59, 130, 246, 0.3))",
    transition: "all 0.3s ease",
    "&:hover": {
      filter: "drop-shadow(0 6px 25px rgba(59, 130, 246, 0.4))",
      transform: "scale(1.02)",
    },
  },
  logoTextContainer: {
    flexDirection: "column",
  },
  logoTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "text",
    lineHeight: 1.2,
    background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  logoSubtitle: {
    fontSize: "12px",
    color: "text_secondary",
    lineHeight: 1,
  },
};

/** @jsxImportSource @theme-ui/core */
import { jsx, Box, Container, Image, Text, Heading } from "theme-ui";
import CopyrightLogo from "../../assets/copyright.png";
import Link from "next/link";
export default function Copyright() {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.content}>
        <Box sx={styles.copyright}>
          <Image src={CopyrightLogo.src} alt="copyright" sx={styles.image} />
          <Text sx={styles.text}>Copyright by {new Date().getFullYear()}</Text>
        </Box>
        <Box sx={styles.designer}>
          <Text sx={styles.devName}>
            Managed By:
            <Link href="https://bhandari-prashant.com.np"> Prashant Bhandari </Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "150px",
    backgroundColor: "primary",
    px: [3, 4],
    py: [3, 4],
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
  },
  copyright: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  text: {
    fontSize: [1, 2],
    color: "white",
    fontWeight: 400,
    fontFamily: "Verdana, sans-serif",
  },
  image: {
    width: ["60px", "80px"],
    height: "auto",
  },
  designer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  devName: {
    fontSize: [1, 2],
    padding: "6px 12px",
    color: "white",
    fontWeight: 400,
    fontFamily: "Verdana, sans-serif",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
};

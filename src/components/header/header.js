/** @jsxImportSource @theme-ui/core */
import { Container, Flex, Button, Select, Box } from "theme-ui";
import { keyframes } from "@emotion/react";
import Link from "next/link";
import Logo from "../logo";
import MobileDrawer from "./mobile-drawer";
import menuItems from "../../data/header.data";
import { useRouter } from "next/router";

export default function Header({ className, isOpen, setIsOpen }) {
  const router = useRouter();
  return (
    <header sx={styles.header} className={className}>
      <Container sx={styles.container}>
        <Logo />

        <Flex as="nav" sx={styles.nav}>
          {menuItems.map((menuItem, index) => (
            <Link
              activeClass="active"
              href={menuItem.path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={index}
            >
              {menuItem.label}
            </Link>
          ))}
        </Flex>

        <Box sx={styles.rightContainer}>
          <Button
            variant="primary"
            aria-label="Get Started"
            sx={styles.rightContainer.button}
            onClick={() => router.push("/registerForm")}
          >
            Join Us
          </Button>
        </Box>

        <MobileDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
      </Container>
    </header>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;
const styles = {
  header: {
    color: "text",
    fontWeight: "body", 
    py: 4,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    background: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(20px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    transition: "all 0.4s ease",
    zIndex: 100,
    
    "&.sticky": {
      position: "fixed",
      background: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(99, 102, 241, 0.1)",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      py: 3,
    },
  },

  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1400px",
    mx: "auto",
    px: [4, 6, 8],
  },

  nav: {
    display: ["none", "none", "flex"],
    alignItems: "center",
    gap: 6,
    
    a: {
      fontSize: 2,
      fontWeight: "medium",
      color: "text_secondary",
      textDecoration: "none",
      position: "relative",
      transition: "all 0.3s ease",
      px: 3,
      py: 2,
      borderRadius: "md",
      
      "&:hover": {
        color: "primary",
        background: "rgba(99, 102, 241, 0.05)",
      },
      
      "&::after": {
        content: '""',
        position: "absolute",
        bottom: "-2px",
        left: "50%",
        transform: "translateX(-50%)",
        width: 0,
        height: "2px",
        background: "linear-gradient(90deg, #6366f1, #00d4ff)",
        transition: "width 0.3s ease",
      },
      
      "&:hover::after": {
        width: "80%",
      },

      "&.active": {
        color: "primary",
      },
    },
  },

  rightContainer: {
    display: "flex",
    alignItems: "center",
    gap: 4,

    select: {
      fontSize: 1,
      border: "1px solid",
      borderColor: "gray_200",
      borderRadius: "md",
      px: 3,
      py: 2,
      background: "background",
      color: "text",
      minWidth: "180px",
    },

    button: {
      px: 5,
      py: 3,
      fontSize: 2,
      fontWeight: "semibold",
      borderRadius: "lg",
      background: "linear-gradient(135deg, #6366f1, #4f46e5)",
      color: "white",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 15px rgba(99, 102, 241, 0.3)",
      
      "&:hover": {
        background: "linear-gradient(135deg, #4f46e5, #4338ca)",
        transform: "translateY(-2px)",
        boxShadow: "0 6px 20px rgba(99, 102, 241, 0.4)",
      },
    },
  },
};

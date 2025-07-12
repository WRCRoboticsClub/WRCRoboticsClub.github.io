/** @jsxImportSource @theme-ui/core */
import { Container, Flex, Button, Select, Box } from "theme-ui";
import { keyframes } from "@emotion/react";
import Link from "next/link";
import Logo from "../logo";
import LogoDark from "../../assets/Club_logo.png";
import MobileDrawer from "./mobile-drawer";
import menuItems from "../../data/header.data";
import { useRouter } from "next/router";

export default function Header({ className, isOpen, setIsOpen }) {
  const router = useRouter();
  return (
    <header sx={styles.header} className={className}>
      <Container sx={styles.container}>
        <Logo src={LogoDark.src} sx={styles.container.logo} />

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
{/*
        <Box sx={styles.rightContainer}>
        {<Select
          name="committee"
          defaultValue="17th-committee"
          sx={styles.rightContainer.select}
        >
          <option value="17th-committee">17th executive committee</option>
          <option value="16th-committee">16th executive committee</option>
        </Select>}

        <Button
          // className="donate__btn"
          variant="secondary"
          aria-label="Get Started"
          sx={styles.rightContainer.button}
          onClick={() => router.push("/registerForm")}
        >
          Register you team now
        </Button>
        </Box> 
         */}
        <MobileDrawer isDrawerOpen={isOpen} setIsDrawerOpen={setIsOpen} />
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
    py: 3,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.4s ease",
    animation: `${positionAnim} 0.4s ease`,
    ".donate__btn": {
      flexShrink: 0,
      mr: [10, 15, null, null, 0],
      ml: ["auto", null, null, null, 0],
    },
    "&.sticky": {
      position: "fixed",
      backgroundColor: "background",
      color: "text",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.08)",
      py: 2,
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    px: [3, 4],
    logo: {
      width: ["140px", "180px", "200px"],
      height: "auto",
    },
  },
  nav: {
    mx: "auto",
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "flex",
      gap: "20px",
    },
    a: {
      fontSize: [2, 3],
      fontWeight: 500,
      px: 2,
      cursor: "pointer",
      lineHeight: "1.4",
      transition: "color 0.25s ease",
      color: "text",
      "&:hover": {
        color: "secondary",
      },
      "&.active": {
        color: "secondary",
      },
    },
  },
  rightContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",

    button: {
      fontSize: "14px",
      fontWeight: "500",
      ml: "5px",
      px: "12px",
      py: "8px",
    },
    select: {
      fontSize: "15px",
      fontWeight: "500",
      px: "8px",
      py: "6px",
      borderRadius: "4px",
    },
  },
};

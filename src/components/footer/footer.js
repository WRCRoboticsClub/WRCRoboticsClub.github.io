/** @jsxImportSource @theme-ui/core */
import { jsx, Box, Container, Image, Text, Heading } from "theme-ui";
import { Link } from "../link";
import menuItems from "../../data/footer.data";
import FooterLogo from "../../assets/Club_logo.png";
import { FaFacebook, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Copyright from "./Copyright";

const social = [
  {
    path: "https://www.facebook.com/wrcrobo",
    icon: <FaFacebook />,
    color: "#4267B2",
  },
  {
    path: "https://www.twitter.com",
    icon: <FaTwitter />,
    color: "#1DA1F2",
  },
  {
    path: "/",
    icon: <FaGithub />,
    color: "#171515",
  },
  {
    path: "https://www.instagram.com/robotics.club.wrc/",
    icon: <FaInstagram />,
    color: "#bc2a8d",
  },
  {
    path: "https://mail.google.com/mail/u/0",
    icon: <SiGmail />,
    color: "#D44638",
  },
];

export default function Footer() {
  return (
    <>
      <footer sx={styles.footer} id="footer">
        <Container>
          <Box sx={styles.footer.footerBottomArea}>
            <Box sx={styles.footerLink}>
              <Link path="/">
                <Image
                  src={FooterLogo.src}
                  alt="logo"
                  sx={styles.footer.logo}
                />
              </Link>
              <nav sx={styles.footer.links}>
                {menuItems.map((item, i) => (
                  <Link
                    path={item.path}
                    key={i}
                    label={item.label}
                    sx={styles.footer.link}
                  />
                ))}
              </nav>
            </Box>

            <Box sx={styles.contact}>
              <Text sx={styles.contact.title}>Contact Us </Text>
              <Text sx={styles.contact.email}>robotics@wrc.edu.np</Text>
              <Box sx={styles.contact.container}>
                {/* <Box sx={styles.contact.info}>
                <Text sx={styles.contact.phone}>+9779846211026</Text>
                <Text sx={styles.contact.phone}>robotics@wrc.edu.np</Text>
                <Text sx={styles.contact.subTitle}>Executive Head</Text>
                <Text sx={styles.contact.subTitle}>Shishir Babu Rijal</Text>
              </Box> */}
                <Box sx={styles.contact.info}>
                  <Text sx={styles.contact.phone}>+9779815035124</Text>
                  <Text sx={styles.contact.subTitle}>Executive Head</Text>
                  <Text sx={styles.contact.subTitle}>Sandesh Ghorsai</Text>
                </Box>
                <Box sx={styles.contact.info}>
                  <Text sx={styles.contact.phone}>+9779840600635</Text>
                  <Text sx={styles.contact.subTitle}>Vice Executive Head</Text>
                  <Text sx={styles.contact.subTitle}>Sumit Sigdel</Text>
                </Box>
              </Box>
            </Box>

            <Box sx={styles.footer}>
              <Text sx={styles.contact.title}>Follow us @</Text>
              <Box sx={styles.social}>
                {social.map((socialItem, i) => (
                  <Box as="span" key={i} sx={styles.social.icon}>
                    <Link href={socialItem.path} color={socialItem.color}>
                      {socialItem.icon}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </footer>
      <Copyright />
    </>
  );
}
const styles = {
  footer: {
    padding: "1.5rem",
    footerBottomArea: {
      borderTop: "1px solid",
      borderTopColor: "border_color",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      pt: [6, null, 8],
      pb: ["40px", null, "80px"],
      textAlign: "center",
      gap: "20px",

      "@media screen and (max-width:700px)": {
        flexDirection: "column",
        gap: "30px",
      },
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      },
    },
    links: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: "6px",
    },
    link: {
      fontSize: [1, "15px"],
      color: "text",
      fontWeight: "600",
      cursor: "pointer",
      transition: "color 0.3s ease",
      display: "block",
      textDecoration: "underline",
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      letterSpacing: ["1.2px", null, "1.5px"],
      ":hover": {
        color: "primary",
      },
    },
    logo: {
      width: "140px",
      height: "auto",
      mb: 2,
    },
  },
  footerLink: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",

    "@media screen and (max-width: 1024px)": {
      display: "none",
    },
  },
  social: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",

    icon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "text",
      fontSize: 26,
      transition: "color 0.3s ease, transform 0.3s ease",
      cursor: "pointer",
      "&:hover": {
        color: "primary",
        transform: "scale(1.1)",
      },
    },
  },
  contact: {
    title: {
      fontSize: [2, "22px"],
      color: "text",
      fontWeight: "500",
      fontFamily: "Roboto, sans-serif",
      mb: 2,
    },
    info: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: "4px",
      px: [2, null, 4],
    },
    phone: {
      fontSize: [1, "17px", "19px"],
      color: "primary",
      fontWeight: "700",
      fontFamily: "Verdana, sans-serif",
    },
    email: {
      fontSize: [1, "22px"],
      color: "primary",
      fontWeight: "700",
      fontFamily: "Verdana, sans-serif",
      mb: 2,
    },
    subTitle: {
      fontSize: [0, "13px", null, "14px"],
      textAlign: "center",
      letterSpacing: ["1.2px", null, "1.5px"],
      textTransform: "uppercase",
      fontWeight: "600",
      color: "text",
    },
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "20px",
      mt: [3, 4],
    },
  },
};

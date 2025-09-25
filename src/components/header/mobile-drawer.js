import React, { useState } from "react";
import { Box, Close } from "theme-ui";
import Link from "next/link";
import { keyframes } from "@emotion/react";
import { FaFacebook, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import menuItems from "../../data/header.data";

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

export default function MobileDrawer({ isOpen, setIsOpen }) {
  return (
    <Box sx={styles.handler}>
      <Box sx={styles.burger} onClick={() => setIsOpen(!isOpen)}>
        <Box sx={styles.line1}></Box>
        <Box sx={styles.line2}></Box>
        <Box sx={styles.line3}></Box>
      </Box>
      {isOpen === true ? (
        <Box sx={styles.content}>
          <Close
            sx={styles.close}
            onClick={() => setIsOpen(!isOpen)}
          />
          <Box sx={styles.menu}>
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
          </Box>
          <Box sx={styles.menuFooter}>
            <Box sx={styles.social}>
              {social.map((socialItem, i) => (
                <Box as="span" key={i} sx={styles.social.icon}>
                  <Link href={socialItem.path}>{socialItem.icon}</Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      ) : (
        <Box></Box>
      )}
    </Box>
  );
}

const drawerAnimation = keyframes`
 0% { transform: translateX(100%); opacity: 0; }
 100% { transform: translateX(0); opacity: 1; }
`;

const styles = {
  handler: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
    width: "26px",

    "@media screen and (min-width: 1024px)": {
      display: "none",
    },
  },
  
  burger: {
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  
  line1: {
    width: "26px",
    height: "3px",
    background: "linear-gradient(90deg, #6366f1, #4f46e5)",
    margin: "5px",
    borderRadius: "2px",
    transition: "all 0.3s ease",
  },
  
  line2: {
    width: "26px", 
    height: "3px",
    background: "linear-gradient(90deg, #6366f1, #4f46e5)",
    margin: "5px",
    borderRadius: "2px",
    transition: "all 0.3s ease",
  },
  
  line3: {
    width: "26px",
    height: "3px", 
    background: "linear-gradient(90deg, #6366f1, #4f46e5)",
    margin: "5px",
    borderRadius: "2px", 
    transition: "all 0.3s ease",
  },

  close: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "20px",
    right: "20px",
    zIndex: "1",
    cursor: "pointer",
    width: "40px",
    height: "40px",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "50%",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    color: "white",
    transition: "all 0.3s ease",
    
    "&:hover": {
      background: "rgba(255, 255, 255, 0.2)",
      transform: "scale(1.1)",
    },
  },

  content: {
    position: "fixed",
    right: "0px",
    top: "0",
    width: ["280px", "320px"],
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(20px)",
    borderLeft: "1px solid rgba(99, 102, 241, 0.1)",
    zIndex: "1000",
    animation: `${drawerAnimation} 0.4s ease`,
    boxShadow: "-10px 0 30px rgba(0, 0, 0, 0.1)",
  },

  menu: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    pt: "80px",
    px: "20px",
    
    a: {
      fontSize: "18px",
      fontWeight: "medium",
      color: "text",
      py: "15px",
      px: "20px",
      cursor: "pointer",
      borderRadius: "lg",
      transition: "all 0.3s ease",
      width: "100%",
      textAlign: "center",
      position: "relative",
      
      "&:hover": {
        color: "primary",
        background: "rgba(99, 102, 241, 0.05)",
        transform: "translateX(5px)",
      },
      
      "&.active": {
        color: "primary",
        background: "rgba(99, 102, 241, 0.1)",
      },
    },
  },

  menuFooter: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    px: "20px",
    mt: "auto",
    pb: "40px",
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
      color: "text_secondary",
      fontSize: "20px",
      width: "45px",
      height: "45px",
      borderRadius: "50%",
      background: "rgba(99, 102, 241, 0.05)",
      border: "1px solid rgba(99, 102, 241, 0.1)",
      transition: "all 0.3s ease",
      cursor: "pointer",
      
      "&:hover": {
        color: "primary",
        background: "rgba(99, 102, 241, 0.1)",
        transform: "translateY(-2px)",
        boxShadow: "0 4px 15px rgba(99, 102, 241, 0.2)",
      },
    },
  },
};

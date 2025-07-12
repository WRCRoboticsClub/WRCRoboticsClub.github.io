export default {
  colors: {
    // Original colors from your first version
    text: "#343D48",
    text_secondary: "#02073E",
    heading: "#0F2137",
    heading_secondary: "#0F2137",
    background: "#FFFFFF",
    background_secondary: "#F9FBFD",
    border_color: "#E5ECF4",
    yellow: "#FFA740",
    primary: "#57CDE2",  // Original teal primary
    secondary: "#00008B", // Original deep blue secondary
    muted: "#E4E4E4",
    accent: "#609",
    modes: {
      dark: {
        text: "#fff",
        background: "#000",
        primary: "#0cf",
        secondary: "#09c",
        muted: "#111",
      },
    },
  },

  breakpoints: [
    "480px",
    "640px",
    "768px",
    "1024px",
    "1220px",
    "1366px",
    "1620px",
  ],
  
  fonts: {
    body: "'DM Sans', sans-serif", // Original font
    heading: "'DM Sans', sans-serif",
  },
  
  fontSizes: [12, 15, 16, 18, 20, 22, 24, 28, 32, 36, 42, 48, 52, 64],
  
  fontWeights: {
    body: "normal",
    heading: 500,
    bold: 700,
  },
  
  lineHeights: {
    body: 1.8,
    heading: 1.5,
  },
  
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
    heading: "-0.5px",
  },
  
  space: [0, 5, 10, 15, 20, 25, 30, 50, 80, 100, 120, 150],
  
  // Modern layout enhancements with original colors
  layout: {
    container: {
      maxWidth: ["100%", null, null, "780px", "1020px", "1200px", null, "1310px"],
      px: [4, 6],
    },
    header: {
      color: "#02073E",
      fontWeight: "normal",
      py: 3,
      position: "absolute",
      width: "100%",
      bg: "transparent",
      backdropFilter: "blur(12px)",
    },
  },
  
  // Modern section styling with original colors
  sectionHeader: {
    width: ["100%", null, "540px"],
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mt: ["-3px", null, -1],
    marginBottom: ["50px", null, "60px", null, null, "65px", null, "80px"],
    mx: "auto",
    title: {
      fontSize: ["24px", null, "28px", null, null, "32px", null, "36px"],
      color: "heading",
      lineHeight: [1.3, null, null, 1.25],
      textAlign: "center",
      fontWeight: "700",
      letterSpacing: "-.5px",
      position: "relative",
      "&:after": {
        content: '""',
        position: "absolute",
        bottom: "-8px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "80px",
        height: "4px",
        bg: "primary", // Using original teal
        borderRadius: "2px",
      }
    },
    subTitle: {
      fontSize: [0, "13px", null, "14px"],
      color: "primary", // Teal accent
      textAlign: "center",
      letterSpacing: ["1.5px", null, "2px"],
      textTransform: "uppercase",
      fontWeight: "700",
      mb: 2,
      lineHeight: 1.5,
      display: "inline-block",
      bg: "rgba(87, 205, 226, 0.1)", // Teal with opacity
      px: 3,
      py: 1,
      borderRadius: "20px",
    },
  },
  
  // Modern text styles with original colors
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: [4],
      letterSpacing: "-.55px",
      color: "heading",
    },
    heroPrimary: {
      color: "heading",
      fontSize: ["32px", "36px", "42px", "40px", "42px", "52px", "58px", "66px"],
      lineHeight: [1.3, null, null, null, null, 1.2],
      fontWeight: 700,
      mb: [4, null, null, null, null, 5],
    },
    heroSecondary: {
      fontSize: [2, null, "17px", null, null, "19px", 4],
      lineHeight: [1.9, null, null, 2],
      fontWeight: "body",
      mb: 5,
      px: [0, null, 5, 6, null, 8, 9],
      color: "heading",
    },
    title: {
      variant: "text.heading",
      fontWeight: "bold",
      fontSize: [3, null, 4],
      lineHeight: 1.25,
      mb: 1,
    },
    lead: {
      fontSize: 40,
      fontFamily: "DM Sans",
      fontWeight: "500",
      lineHeight: "60px",
      letterSpacing: "-1.5px",
      color: "#0F2137",
    },
    muted: {
      lineHeight: "26px",
      color: "muted",
    },
    secondary: {
      fontWeight: 500,
      color: "#00A99D",
      lineHeight: "40px",
    },
  },
  
  // Modern buttons with original colors
  buttons: {
    defaultBtn: {
      borderRadius: "45px",
      fontSize: ["14px", null, null, 2],
      letterSpacings: "-0.15px",
      padding: ["12px 20px", null, "15px 30px"],
      fontFamily: "body",
      cursor: "pointer",
      lineHeight: 1.2,
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      fontWeight: 500,
      "&:focus": {
        outline: 0,
      },
      "&:hover": {
        transform: "translateY(-3px)",
        boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
      },
    },
    primary: {
      variant: "buttons.defaultBtn",
      color: "white",
      bg: "primary", // Original teal
      "&:hover": {
        bg: "#4abfd4", // Slightly darker teal
        boxShadow: "0 6px 12px rgba(87, 205, 226, 0.3)",
      },
    },
    secondary: {
      variant: "buttons.defaultBtn",
      border: "2px solid",
      borderColor: "primary", // Teal border
      color: "primary", // Teal text
      bg: "transparent",
      "&:hover": {
        color: "white",
        bg: "primary", // Teal background
      },
    },
    whiteButton: {
      variant: "buttons.defaultBtn",
      color: "heading_secondary",
      bg: "white",
      "&:hover": {
        bg: "#f0f8ff", // Light blue background
      },
    },
  },
  
  // Modern cards with original colors
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      // Modern enhancements:
      bg: "background",
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      border: "1px solid",
      borderColor: "border_color",
      "&:hover": {
        transform: "translateY(-5px)",
        boxShadow: "0 12px 32px rgba(0,0,0,0.1)",
        borderColor: "primary", // Teal accent on hover
      },
    },
    offer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flex: ["1 1 calc(50% - 16px)", "1 1 20%"],
      minHeight: 130,
      m: 2,
      background: "#FFFFFF",
      border: "1px solid #EDEFF6",
      borderRadius: 5,
      // Modern enhancements:
      transition: "all 0.3s ease",
      "&:hover": {
        transform: "translateY(-3px)",
        boxShadow: "0 6px 12px rgba(0,0,0,0.05)",
      },
    },
    featureCard: {
      display: "flex",
      alignItems: "flex-start",
      flexDirection: "row",
      p: 3,
      // Modern enhancements:
      bg: "background",
      borderRadius: "12px",
      border: "1px solid",
      borderColor: "border_color",
      boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
      transition: "all 0.3s ease",
      "&:hover": {
        transform: "translateY(-3px)",
        boxShadow: "0 8px 16px rgba(0,0,0,0.08)",
      },
    },
  },
  
  // Modern global styles
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      fontSmoothing: "antialiased",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      "::selection": {
        bg: "primary", // Teal selection
        color: "white",
      },
      // Modal Global Style
      ".modal-video-close-btn": {
        cursor: "pointer",
      },
      ".modal-video-movie-wrap": {
        margin: 6,
        width: "auto",
      },
      // Smooth transitions for interactive elements
      a: {
        transition: "color 0.2s ease",
        "&:hover": {
          color: "primary", // Teal on hover
        }
      }
    },
    // Divider styles
    hr: {
      border: 0,
      borderBottom: "1px solid",
      borderColor: "#D9E0E7",
      my: 5,
    },
    ul: {
      listStyle: "none",
    },
    srOnly: {
      border: "0 !important",
      clip: "rect(1px, 1px, 1px, 1px) !important",
      clipPath: "inset(50%) !important",
      height: "1px !important",
      margin: "-1px !important",
      overflow: "hidden !important",
      padding: "0 !important",
      position: "absolute !important",
      width: "1px !important",
      whiteSpace: "nowrap !important",
    },
  },
};
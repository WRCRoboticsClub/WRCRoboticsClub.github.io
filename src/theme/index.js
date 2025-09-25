export default {
  breakpoints: [
    "576px",
    "768px",
    "992px",
    "1200px",
    "1400px",
    "1920px",
  ],
  
  fonts: {
    body: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    heading: "'Space Grotesk', 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace",
  },
  
  fontSizes: [
    12, 14, 16, 18, 20, 24, 28, 32, 36, 42, 48, 56, 64, 72
  ],
  
  fontWeights: {
    body: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    heading: 700,
  },
  
  lineHeights: {
    body: 1.6,
    heading: 1.3,
    tight: 1.2,
    relaxed: 1.8,
  },
  
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
    heading: "-0.5px",
  },
  
  space: [0, 5, 10, 15, 20, 25, 30, 50, 80, 100, 120, 150],
  
  sizes: {
    container: "1400px",
    containerSm: "1020px",
    containerMd: "1200px",
  },
  
  radii: {
    none: 0,
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    "2xl": "20px",
    full: "9999px",
  },
  
  shadows: {
    sm: "0 1px 3px rgba(0, 0, 0, 0.1)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1)",
    "2xl": "0 25px 50px rgba(0, 0, 0, 0.15)",
  },
  
  // Enhanced modern color palette for robotics
  colors: {
    // Core brand colors
    primary: "#6366f1",        // Modern indigo
    primary_light: "#818cf8",  // Light indigo
    primary_dark: "#4f46e5",   // Dark indigo
    secondary: "#00d4ff",      // Cyber cyan
    accent: "#f59e0b",         // Warm amber
    
    // Semantic colors
    success: "#10b981",        // Emerald
    warning: "#f59e0b",        // Amber
    error: "#ef4444",          // Red
    info: "#3b82f6",           // Blue
    
    // Neutral palette
    background: "#ffffff",
    surface: "#f8fafc",
    muted: "#f1f5f9",
    
    // Text colors
    text: "#1e293b",           // Slate 800
    text_secondary: "#64748b", // Slate 500
    text_muted: "#94a3b8",     // Slate 400
    text_inverted: "#ffffff",
    
    // Gray scale
    gray_50: "#f8fafc",
    gray_100: "#f1f5f9",
    gray_200: "#e2e8f0",
    gray_300: "#cbd5e1",
    gray_400: "#94a3b8",
    gray_500: "#64748b",
    gray_600: "#475569",
    gray_700: "#334155",
    gray_800: "#1e293b",
    gray_900: "#0f172a",
    
    // Additional semantic colors
    white: "#ffffff",
    black: "#000000",
    transparent: "transparent",
    
    // Special effects
    glass: "rgba(255, 255, 255, 0.25)",
    glass_dark: "rgba(0, 0, 0, 0.25)",
  },
  
  // Animation durations
  transitions: {
    fast: "0.2s ease",
    normal: "0.3s ease", 
    slow: "0.5s ease",
  },
  
  // Button variants
  buttons: {
    primary: {
      fontSize: 2,
      fontWeight: "semibold",
      color: "white",
      bg: "linear-gradient(135deg, #6366f1, #4f46e5)",
      border: 0,
      borderRadius: "lg",
      px: 5,
      py: 3,
      cursor: "pointer",
      transition: "fast",
      boxShadow: "0 4px 15px rgba(99, 102, 241, 0.3)",
      "&:hover": {
        bg: "linear-gradient(135deg, #4f46e5, #4338ca)",
        transform: "translateY(-2px)",
        boxShadow: "0 6px 20px rgba(99, 102, 241, 0.4)",
      },
    },
    secondary: {
      fontSize: 2,
      fontWeight: "medium",
      color: "primary",
      bg: "transparent",
      border: "2px solid",
      borderColor: "primary",
      borderRadius: "lg",
      px: 5,
      py: 3,
      cursor: "pointer",
      transition: "fast",
      "&:hover": {
        bg: "primary",
        color: "white",
        transform: "translateY(-2px)",
      },
    },
    cyber: {
      fontSize: 2,
      fontWeight: "bold",
      color: "white",
      bg: "linear-gradient(135deg, #00d4ff, #6366f1)",
      border: 0,
      borderRadius: "lg",
      px: 5,
      py: 3,
      cursor: "pointer",
      transition: "fast",
      textTransform: "uppercase",
      letterSpacing: "1px",
      boxShadow: "0 4px 15px rgba(0, 212, 255, 0.3)",
      "&:hover": {
        bg: "linear-gradient(135deg, #6366f1, #00d4ff)",
        transform: "translateY(-2px)",
        boxShadow: "0 6px 20px rgba(0, 212, 255, 0.4)",
      },
    },
  },
  
  // Form controls
  forms: {
    input: {
      fontSize: 2,
      px: 4,
      py: 3,
      border: "2px solid",
      borderColor: "gray_200",
      borderRadius: "lg",
      bg: "background",
      fontFamily: "body",
      transition: "fast",
      "&:focus": {
        borderColor: "primary",
        outline: "none",
        boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
      },
    },
    textarea: {
      fontSize: 2,
      px: 4,
      py: 3,
      border: "2px solid",
      borderColor: "gray_200",
      borderRadius: "lg",
      bg: "background",
      fontFamily: "body",
      resize: "vertical",
      minHeight: "120px",
      transition: "fast",
      "&:focus": {
        borderColor: "primary",
        outline: "none",
        boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
      },
    },
    label: {
      fontSize: 1,
      fontWeight: "medium",
      color: "text",
      mb: 2,
      display: "block",
    },
  },
  
  // Card styles
  cards: {
    primary: {
      bg: "white",
      borderRadius: "xl",
      p: 5,
      boxShadow: "0 4px 25px rgba(0, 0, 0, 0.05)",
      border: "1px solid",
      borderColor: "gray_100",
      transition: "fast",
      "&:hover": {
        transform: "translateY(-4px)",
        boxShadow: "0 8px 40px rgba(0, 0, 0, 0.1)",
      },
    },
    glass: {
      background: "rgba(255, 255, 255, 0.25)",
      borderRadius: "xl",
      p: 5,
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(255, 255, 255, 0.18)",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
      transition: "fast",
      "&:hover": {
        background: "rgba(255, 255, 255, 0.35)",
        transform: "translateY(-2px)",
      },
    },
  },
  
  // Text variants
  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      letterSpacing: "heading",
      color: "text",
    },
    body: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      color: "text",
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "caps",
      fontWeight: "bold",
      fontSize: 1,
    },
  },
  
  // Layout styles
  layout: {
    container: {
      maxWidth: "1400px",
      mx: "auto",
      px: [4, 6, 8],
    },
    header: {
      bg: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(99, 102, 241, 0.1)",
      transition: "fast",
    },
  },
  
  // Responsive utility styles
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      fontSize: 2,
      color: "text",
      bg: "background",
    },
    h1: {
      variant: "text.heading",
      fontSize: [5, 6, 7],
    },
    h2: {
      variant: "text.heading",
      fontSize: [4, 5, 6],
    },
    h3: {
      variant: "text.heading",
      fontSize: [3, 4, 5],
    },
    h4: {
      variant: "text.heading",
      fontSize: [2, 3, 4],
    },
    h5: {
      variant: "text.heading",
      fontSize: [1, 2, 3],
    },
    h6: {
      variant: "text.heading",
      fontSize: [0, 1, 2],
    },
    p: {
      color: "text",
      fontWeight: "body",
      lineHeight: "body",
    },
    a: {
      color: "primary",
      textDecoration: "none",
      transition: "fast",
      "&:hover": {
        color: "primary_dark",
      },
    },
  },
};
/** @jsxImportSource @theme-ui/core */
import { Container, Box, Heading, Text, Button, Grid } from "theme-ui";
import KeyFeature from "../components/KeyFeature/key-feature";
import Services from "../components/services/service";
import Testimonials from "../components/Testimonials";
import ClubLogo from "../assets/ClubLogo.jpg";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section sx={styles.hero} id="home">
        <Container sx={styles.hero.container}>
          {/* Left - Content */}
          <Box sx={styles.hero.contentBox}>
            <Box sx={styles.hero.badge}>
              <Text sx={styles.hero.badgeText}>🤖 Innovation • Learning • Growth</Text>
            </Box>
            
            <Heading as="h1" variant="heroPrimary" sx={styles.hero.title}>
              Robotics Club
              <Text as="span" sx={styles.hero.titleAccent}> WRC</Text>
            </Heading>
            
            <Heading as="h2" sx={styles.hero.subtitle}>
              Pashchimanchal Campus, Pokhara
            </Heading>
            
            <Text as="p" variant="heroSecondary" sx={styles.hero.description}>
              We are a team of passionate students working to promote innovation, 
              creative learning, and technical growth through engaging activities 
              beyond the classroom. Join us in building the future with robotics.
            </Text>
            
            <Box sx={styles.hero.actions}>
              <Button variant="cyber" sx={styles.hero.primaryBtn}>
                Explore Our Projects
              </Button>
              <Button 
                variant="secondary" 
                sx={styles.hero.secondaryBtn} 
                as="a" 
                href="https://www.facebook.com/wrcrobo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the Club
              </Button>
            </Box>

            {/* Stats */}
            <Grid sx={styles.hero.stats}>
              <Box sx={styles.hero.stat}>
                <Text sx={styles.hero.statNumber}>550+</Text>
                <Text sx={styles.hero.statLabel}>Modules</Text>
              </Box>
              <Box sx={styles.hero.stat}>
                <Text sx={styles.hero.statNumber}>50K+</Text>
                <Text sx={styles.hero.statLabel}>Students</Text>
              </Box>
              <Box sx={styles.hero.stat}>
                <Text sx={styles.hero.statNumber}>150+</Text>
                <Text sx={styles.hero.statLabel}>Members</Text>
              </Box>
              <Box sx={styles.hero.stat}>
                <Text sx={styles.hero.statNumber}>25+</Text>
                <Text sx={styles.hero.statLabel}>Projects</Text>
              </Box>
            </Grid>
          </Box>

          {/* Right - Modern Visual */}
          <Box sx={styles.hero.visualBox}>
            <Box sx={styles.hero.visualWrapper}>
              {/* Main Circle with Logo */}
              <Box sx={styles.hero.mainCircle}>
                <img 
                  src={ClubLogo.src || ClubLogo} 
                  alt="WRC Robotics Club Logo"
                  style={{
                    width: "420px",
                    height: "420px",
                    borderRadius: "50%",
                    objectFit: "contain",
                    background: "white",
                    padding: "15px",
                    boxShadow: "0 15px 50px rgba(99, 102, 241, 0.4)",
                  }}
                />
              </Box>
              
              {/* Orbiting Elements with Enhanced Animation */}
              <Box sx={styles.hero.orbit1}>
                <Box sx={styles.hero.orbitDot}></Box>
                <Box sx={styles.hero.orbitDotSecondary}></Box>
              </Box>
              <Box sx={styles.hero.orbit2}>
                <Box sx={styles.hero.orbitDot}></Box>
                <Box sx={styles.hero.orbitDotSecondary}></Box>
              </Box>
              <Box sx={styles.hero.orbit3}>
                <Box sx={styles.hero.orbitDot}></Box>
                <Box sx={styles.hero.orbitDotSecondary}></Box>
              </Box>
              
              {/* Pulse Rings */}
              <Box sx={styles.hero.pulseRing1}></Box>
              <Box sx={styles.hero.pulseRing2}></Box>
              
              {/* Background Grid */}
              <Box sx={styles.hero.gridPattern}></Box>
            </Box>
            
            {/* Floating Cards */}
            <Box sx={styles.hero.floatingCard1}>
              <Text sx={styles.hero.floatingText}>AI & Machine Learning</Text>
            </Box>
            <Box sx={styles.hero.floatingCard2}>
              <Text sx={styles.hero.floatingText}>Hardware Design</Text>
            </Box>
            <Box sx={styles.hero.floatingCard3}>
              <Text sx={styles.hero.floatingText}>Programming</Text>
            </Box>
            <Box sx={styles.hero.floatingCard4}>
              <Text sx={styles.hero.floatingText}>IoT & Automation</Text>
            </Box>
          </Box>
        </Container>

        {/* Background Elements */}
        <Box sx={styles.hero.bgPattern1}></Box>
        <Box sx={styles.hero.bgPattern2}></Box>
        <Box sx={styles.hero.bgPattern3}></Box>
      </section>

      {/* Components */}
      <KeyFeature />
      <Testimonials />
    </>
  );
}

const styles = {
  hero: {
    position: "relative",
    background: [
      "linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(0, 212, 255, 0.05) 50%, rgba(139, 92, 246, 0.05) 100%)",
    ],
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    py: [8, 10, 12],
    overflow: "hidden",

    container: {
      display: "grid",
      gridTemplateColumns: ["1fr", "1fr", "1fr 1fr"],
      gap: [6, 8, 10],
      alignItems: "center",
      position: "relative",
      zIndex: 2,
    },

    contentBox: {
      order: [2, 2, 1],
    },

    badge: {
      display: "inline-flex",
      alignItems: "center",
      background: "rgba(99, 102, 241, 0.1)",
      border: "1px solid rgba(99, 102, 241, 0.2)",
      borderRadius: "full",
      px: 4,
      py: 2,
      mb: 4,
    },

    badgeText: {
      fontSize: 1,
      fontWeight: "medium",
      color: "primary",
    },

    title: {
      fontSize: ["3rem", "3.5rem", "4rem", "4.5rem"],
      fontWeight: "black",
      lineHeight: "tight",
      letterSpacing: "tight",
      mb: 3,
      background: "linear-gradient(135deg, #0f172a, #4f46e5)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },

    titleAccent: {
      background: "linear-gradient(135deg, #6366f1, #00d4ff)",
      WebkitBackgroundClip: "text", 
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },

    subtitle: {
      fontSize: [4, 5, 6],
      fontWeight: "semibold",
      color: "text_secondary",
      mb: 4,
    },

    description: {
      fontSize: [3, 4],
      lineHeight: "relaxed",
      color: "text_secondary",
      mb: 6,
      maxWidth: "600px",
    },

    actions: {
      display: "flex",
      flexDirection: ["column", "row"],
      gap: 4,
      mb: 8,
    },

    primaryBtn: {
      fontSize: [2, 3],
      px: 6,
      py: 4,
      borderRadius: "xl",
      background: "linear-gradient(135deg, #00d4ff, #0066ff)",
      boxShadow: "0 0 30px rgba(0, 212, 255, 0.4)",
      "&:hover": {
        transform: "translateY(-3px)",
        boxShadow: "0 0 40px rgba(0, 212, 255, 0.6), 0 10px 30px rgba(0, 0, 0, 0.1)",
      },
    },

    secondaryBtn: {
      fontSize: [2, 3],
      px: 6,
      py: 4,
      borderRadius: "xl",
    },

    stats: {
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 4,
      mt: 6,
    },

    stat: {
      textAlign: "center",
      p: 3,
      background: "rgba(255, 255, 255, 0.5)",
      backdropFilter: "blur(10px)",
      borderRadius: "lg",
      border: "1px solid rgba(255, 255, 255, 0.2)",
    },

    statNumber: {
      fontSize: [4, 5],
      fontWeight: "bold",
      color: "primary",
      lineHeight: "none",
    },

    statLabel: {
      fontSize: 1,
      color: "text_tertiary",
      fontWeight: "medium",
    },

    visualBox: {
      position: "relative",
      order: [1, 1, 2],
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: ["450px", "550px", "600px"],
    },

    visualWrapper: {
      width: ["450px", "550px", "600px"],
      height: ["450px", "550px", "600px"],
      position: "relative",
      zIndex: 2,
    },

    mainCircle: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "280px",
      height: "280px",
      background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 30px 70px rgba(99, 102, 241, 0.5), 0 0 0 2px rgba(255, 255, 255, 0.3)",
      border: "6px solid rgba(99, 102, 241, 0.4)",
      zIndex: 3,
      animation: "glow 4s ease-in-out infinite alternate, logoFloat 6s ease-in-out infinite",
      "&:hover": {
        transform: "translate(-50%, -50%) scale(1.03)",
        transition: "all 0.4s ease",
        animation: "glow 2s ease-in-out infinite alternate, logoFloat 3s ease-in-out infinite",
      },
    },

    logoImage: {
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      objectFit: "cover",
      filter: "drop-shadow(0 4px 15px rgba(59, 130, 246, 0.3))",
    },

    orbit1: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "340px",
      height: "340px",
      border: "4px solid rgba(99, 102, 241, 0.6)",
      borderRadius: "50%",
      boxShadow: "0 0 20px rgba(99, 102, 241, 0.4), inset 0 0 20px rgba(99, 102, 241, 0.2)",
      animation: "rotate 18s linear infinite, orbitGlow 3s ease-in-out infinite alternate",
    },

    orbit2: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "420px",
      height: "420px",
      border: "3px solid rgba(0, 212, 255, 0.5)",
      borderRadius: "50%",
      boxShadow: "0 0 25px rgba(0, 212, 255, 0.4), inset 0 0 15px rgba(0, 212, 255, 0.2)",
      animation: "rotate 25s linear infinite reverse, orbitGlow 4s ease-in-out infinite alternate",
    },

    orbit3: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "500px",
      height: "500px",
      border: "3px solid rgba(139, 92, 246, 0.4)",
      borderRadius: "50%",
      boxShadow: "0 0 30px rgba(139, 92, 246, 0.3), inset 0 0 20px rgba(139, 92, 246, 0.1)",
      animation: "rotate 35s linear infinite, orbitGlow 5s ease-in-out infinite alternate",
    },

    orbitDot: {
      position: "absolute",
      top: "-12px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "24px",
      height: "24px",
      background: "linear-gradient(135deg, #6366f1, #00d4ff)",
      borderRadius: "50%",
      boxShadow: "0 0 40px rgba(99, 102, 241, 1), 0 0 80px rgba(0, 212, 255, 0.6), 0 0 120px rgba(99, 102, 241, 0.3)",
      animation: "pulse 2s ease-in-out infinite, dotGlow 3s ease-in-out infinite alternate",
      border: "2px solid rgba(255, 255, 255, 0.8)",
    },

    orbitDotSecondary: {
      position: "absolute",
      top: "-8px",
      right: "50%",
      transform: "translateX(50%)",
      width: "16px",
      height: "16px",
      background: "linear-gradient(135deg, #8b5cf6, #00d4ff)",
      borderRadius: "50%",
      boxShadow: "0 0 30px rgba(139, 92, 246, 0.8), 0 0 60px rgba(0, 212, 255, 0.4)",
      animation: "pulse 2.5s ease-in-out infinite 1s, dotFloat 4s ease-in-out infinite",
      border: "1px solid rgba(255, 255, 255, 0.6)",
    },

    pulseRing1: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "450px",
      height: "450px",
      border: "2px solid rgba(99, 102, 241, 0.2)",
      borderRadius: "50%",
      animation: "ringPulse 6s ease-in-out infinite",
    },

    pulseRing2: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "380px",
      height: "380px",
      border: "2px solid rgba(0, 212, 255, 0.2)",
      borderRadius: "50%",
      animation: "ringPulse 4s ease-in-out infinite 1s",
    },

    gridPattern: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: `
        radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
        linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px)
      `,
      backgroundSize: "100% 100%, 60px 60px, 60px 60px",
      borderRadius: "30px",
      zIndex: 1,
    },

    floatingCard1: {
      position: "absolute",
      top: "8%",
      right: "8%",
      background: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(15px)",
      border: "2px solid rgba(99, 102, 241, 0.3)",
      borderRadius: "lg",
      p: 3,
      boxShadow: "0 10px 40px rgba(99, 102, 241, 0.3), 0 0 20px rgba(99, 102, 241, 0.2)",
      animation: "float 4s ease-in-out infinite, cardGlow 3s ease-in-out infinite alternate",
      zIndex: 4,
      "&:hover": {
        transform: "translateY(-5px) scale(1.05)",
        transition: "all 0.3s ease",
      },
    },

    floatingCard2: {
      position: "absolute",
      bottom: "15%", 
      left: "8%",
      background: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(15px)",
      border: "2px solid rgba(0, 212, 255, 0.3)",
      borderRadius: "lg",
      p: 3,
      boxShadow: "0 10px 40px rgba(0, 212, 255, 0.3), 0 0 20px rgba(0, 212, 255, 0.2)",
      animation: "float 4s ease-in-out infinite 1.5s, cardGlow 4s ease-in-out infinite alternate",
      zIndex: 4,
      "&:hover": {
        transform: "translateY(-5px) scale(1.05)",
        transition: "all 0.3s ease",
      },
    },

    floatingCard3: {
      position: "absolute",
      top: "45%",
      left: "-8%",
      background: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(15px)",
      border: "2px solid rgba(139, 92, 246, 0.3)",
      borderRadius: "lg",
      p: 3,
      boxShadow: "0 10px 40px rgba(139, 92, 246, 0.3), 0 0 20px rgba(139, 92, 246, 0.2)",
      animation: "float 4s ease-in-out infinite 3s, cardGlow 5s ease-in-out infinite alternate",
      zIndex: 4,
      "&:hover": {
        transform: "translateY(-5px) scale(1.05)",
        transition: "all 0.3s ease",
      },
    },

    floatingCard4: {
      position: "absolute",
      top: "45%",
      right: "-8%",
      background: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(15px)",
      border: "2px solid rgba(16, 185, 129, 0.3)",
      borderRadius: "lg",
      p: 3,
      boxShadow: "0 10px 40px rgba(16, 185, 129, 0.3), 0 0 20px rgba(16, 185, 129, 0.2)",
      animation: "float 4s ease-in-out infinite 2s, cardGlow 3.5s ease-in-out infinite alternate",
      zIndex: 4,
      "&:hover": {
        transform: "translateY(-5px) scale(1.05)",
        transition: "all 0.3s ease",
      },
    },

    floatingText: {
      fontSize: 1,
      fontWeight: "medium",
      color: "text",
      whiteSpace: "nowrap",
    },

    // Background Patterns
    bgPattern1: {
      position: "absolute",
      top: "10%",
      left: "10%",
      width: "200px",
      height: "200px",
      background: "radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)",
      borderRadius: "full",
      animation: "pulse 4s ease-in-out infinite",
      zIndex: 1,
    },

    bgPattern2: {
      position: "absolute",
      bottom: "20%",
      right: "15%",
      width: "150px", 
      height: "150px",
      background: "radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)",
      borderRadius: "full",
      animation: "pulse 4s ease-in-out infinite 2s",
      zIndex: 1,
    },

    bgPattern3: {
      position: "absolute",
      top: "50%",
      right: "5%",
      width: "100px",
      height: "100px", 
      background: "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
      borderRadius: "full",
      animation: "pulse 4s ease-in-out infinite 1s",
      zIndex: 1,
    },
  },
};

// Add global CSS animations
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes rotate {
      from { transform: translate(-50%, -50%) rotate(0deg); }
      to { transform: translate(-50%, -50%) rotate(360deg); }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 0.5; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.1); }
    }
  `;
  document.head.appendChild(style);
}

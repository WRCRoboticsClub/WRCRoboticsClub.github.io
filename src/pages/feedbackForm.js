/** @jsxImportSource @theme-ui/core */
import { useState, useEffect } from "react";
import { Container, Box, Label, Input, Textarea, Button, Text, Heading } from "theme-ui";
import Modal from "../components/Modal";

/*
 * EMAIL SOLUTION OPTIONS FOR WRC ROBOTICS CLUB FEEDBACK FORM
 * 
 * CURRENT: Uses mailto (opens email client) - Works immediately but requires user to send
 * 
 * FOR AUTOMATIC EMAIL DELIVERY, CHOOSE ONE:
 * 
 * 1. NETLIFY FORMS (Easiest if deployed on Netlify):
 *    - Add data-netlify="true" to form
 *    - Emails go to your Netlify dashboard
 *    - No code changes needed
 * 
 * 2. WEB3FORMS (Free, 5 min setup):
 *    - Go to web3forms.com
 *    - Get free access key
 *    - Replace "YOUR_ACCESS_KEY_HERE" in code below
 * 
 * 3. FORMSPREE (Free tier available):
 *    - Create account at formspree.io
 *    - Get form endpoint
 *    - Replace URL in code
 * 
 * 4. EMAILJS (Free tier available):
 *    - Setup EmailJS account
 *    - Add EmailJS script and config
 * 
 * CURRENT STATUS: mailto fallback - opens email client with pre-filled message
 */

export default function feedbackForm() {
  // Using Web3Forms - Free email service, no signup required
  const web3formsUrl = "https://api.web3forms.com/submit";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: ""
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const { openModal } = useModals();

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => {
    setFormData({ name: "", email: "", feedback: "" });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name.trim() || !formData.email.trim() || !formData.feedback.trim()) {
      alert("Please fill in all fields");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Submitting form data:", formData);
      
      // Try Web3Forms first (automatic email delivery)
      const response = await fetch(web3formsUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "f4245070-a69b-4570-b1c4-f4c05d6043a5",
          name: formData.name,
          email: formData.email,
          message: `Feedback from WRC Robotics Club Website:\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nFeedback:\n${formData.feedback}`,
          subject: `Feedback from ${formData.name} - WRC Robotics Club`,
          from_name: "WRC Robotics Club Website",
          to: "robotics@wrc.edu.np"
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        console.log("Feedback sent successfully via Web3Forms to robotics@wrc.edu.np");
        setIsOpen(true);
        clearState();
      } else {
        console.error("Web3Forms failed:", result.message);
        // Fallback to mailto
        fallbackToMailto();
      }
      
    } catch (error) {
      console.error("Error with Web3Forms, falling back to mailto:", error);
      // Fallback to mailto
      fallbackToMailto();
    } finally {
      setIsSubmitting(false);
    }
  };

  const fallbackToMailto = () => {
    // Fallback mailto solution
    const subject = encodeURIComponent(`Feedback from ${formData.name} - WRC Robotics Club`);
    const body = encodeURIComponent(
      `Hello WRC Robotics Team,\n\n` +
      `You have received new feedback from your website:\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Feedback:\n${formData.feedback}\n\n` +
      `---\n` +
      `This email was sent from the WRC Robotics Club website feedback form.`
    );
    
    window.location.href = `mailto:robotics@wrc.edu.np?subject=${subject}&body=${body}`;
    
    setTimeout(() => {
      setIsOpen(true);
      clearState();
    }, 1000);
  };

  return (
    <section sx={styles.section} id="feedback">
      <Container sx={styles.container}>
        <Box sx={styles.header}>
          <Text sx={styles.subtitle}>💬 Get In Touch</Text>
          <Heading sx={styles.title}>Share Your Feedback</Heading>
          <Text sx={styles.description}>
            We value your thoughts and suggestions. Help us improve by sharing your experience with WRC Robotics Club.
          </Text>
        </Box>

        <Box sx={styles.formWrapper}>
          <Box sx={styles.formCard}>
            <Box as="form" onSubmit={(e) => submitForm(e)} sx={styles.form}>
              <Box sx={styles.formGroup}>
                <Label htmlFor="name" sx={styles.label}>Full Name</Label>
                <Input
                  name="name"
                  id="name"
                  value={formData.name}
                  placeholder="Enter your full name"
                  onChange={onChange}
                  sx={styles.input}
                />
              </Box>

              <Box sx={styles.formGroup}>
                <Label htmlFor="email" sx={styles.label}>Email Address</Label>
                <Input
                  name="email"
                  id="email"
                  type="email"
                  value={formData.email}
                  placeholder="Enter your email address"
                  onChange={onChange}
                  sx={styles.input}
                />
              </Box>

              <Box sx={styles.formGroup}>
                <Label htmlFor="feedback" sx={styles.label}>Your Feedback</Label>
                <Textarea
                  name="feedback"
                  id="feedback"
                  placeholder="Share your thoughts, suggestions, or feedback about our robotics sessions and activities..."
                  value={formData.feedback}
                  rows={6}
                  onChange={onChange}
                  sx={styles.textarea}
                />
              </Box>

              <Button
                type="submit"
                disabled={isSubmitting}
                sx={styles.submitButton}
              >
                {isSubmitting ? (
                  <>
                    <Box sx={styles.spinner}></Box>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Feedback
                    <Box sx={styles.buttonIcon}>→</Box>
                  </>
                )}
              </Button>
            </Box>
          </Box>

          {/* Info Cards */}
          <Box sx={styles.infoCards}>
            <Box sx={styles.infoCard}>
              <Box sx={styles.infoIcon}>📧</Box>
              <Text sx={styles.infoTitle}>Email Us</Text>
              <Text sx={styles.infoText}>robotics@wrc.edu.np</Text>
            </Box>
            
            <Box sx={styles.infoCard}>
              <Box sx={styles.infoIcon}>🤝</Box>
              <Text sx={styles.infoTitle}>Join Us</Text>
              <Text sx={styles.infoText}>Become a member of our robotics community</Text>
            </Box>
            
            <Box sx={styles.infoCard}>
              <Box sx={styles.infoIcon}>🚀</Box>
              <Text sx={styles.infoTitle}>Innovate</Text>
              <Text sx={styles.infoText}>Build the future with cutting-edge technology</Text>
            </Box>
          </Box>
        </Box>

        <Modal
          open={isOpen}
          setOpen={setIsOpen}
          title={"Thank You!"}
          message={"Your feedback has been received. We appreciate your input and will get back to you soon."}
        />
      </Container>

      {/* Background Elements */}
      <Box sx={styles.bgElement1}></Box>
      <Box sx={styles.bgElement2}></Box>
    </section>
  );
}

const styles = {
  section: {
    py: [8, 10, 12],
    position: "relative",
    background: "linear-gradient(135deg, rgba(99, 102, 241, 0.02) 0%, rgba(0, 212, 255, 0.02) 100%)",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  },

  container: {
    maxWidth: "1200px",
    mx: "auto",
    px: [4, 6, 8],
  },

  header: {
    textAlign: "center",
    mb: [8, 10],
  },

  subtitle: {
    fontSize: 2,
    fontWeight: "medium",
    color: "primary",
    mb: 3,
  },

  title: {
    fontSize: [7, 8, 9],
    fontWeight: "bold",
    color: "heading",
    mb: 4,
    background: "linear-gradient(135deg, #0f172a, #4f46e5)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  description: {
    fontSize: 3,
    color: "text_secondary",
    maxWidth: "600px",
    mx: "auto",
    lineHeight: "relaxed",
  },

  formWrapper: {
    display: "grid",
    gridTemplateColumns: ["1fr", "1fr", "2fr 1fr"],
    gap: [6, 8],
    alignItems: "start",
  },

  formCard: {
    background: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "2xl",
    p: [6, 8],
    boxShadow: "xl",
    transition: "base",
    "&:hover": {
      boxShadow: "2xl",
      borderColor: "rgba(99, 102, 241, 0.2)",
    },
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },

  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },

  label: {
    fontSize: 2,
    fontWeight: "medium",
    color: "text",
  },

  input: {
    px: 4,
    py: 3,
    fontSize: 2,
    borderRadius: "lg",
    border: "2px solid",
    borderColor: "gray_200",
    background: "background",
    color: "text",
    transition: "fast",
    "&:focus": {
      outline: "none",
      borderColor: "primary",
      boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
    },
  },

  textarea: {
    px: 4,
    py: 3,
    fontSize: 2,
    borderRadius: "lg",
    border: "2px solid",
    borderColor: "gray_200",
    background: "background",
    color: "text",
    transition: "fast",
    minHeight: "150px",
    resize: "vertical",
    fontFamily: "body",
    "&:focus": {
      outline: "none",
      borderColor: "primary",
      boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
    },
  },

  submitButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    px: 6,
    py: 4,
    fontSize: 3,
    fontWeight: "semibold",
    borderRadius: "xl",
    border: "none",
    cursor: "pointer",
    transition: "base",
    background: "linear-gradient(135deg, #6366f1, #4f46e5)",
    color: "white",
    boxShadow: "lg",
    "&:hover": {
      background: "linear-gradient(135deg, #4f46e5, #4338ca)",
      boxShadow: "xl",
      transform: "translateY(-2px)",
    },
    "&:disabled": {
      opacity: 0.7,
      cursor: "not-allowed",
      transform: "none",
    },
  },

  buttonIcon: {
    fontSize: 4,
    transition: "base",
  },

  spinner: {
    width: "20px",
    height: "20px",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    borderTop: "2px solid white",
    borderRadius: "full",
    animation: "spin 1s linear infinite",
  },

  infoCards: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },

  infoCard: {
    background: "rgba(255, 255, 255, 0.6)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "xl",
    p: 5,
    textAlign: "center",
    transition: "base",
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "lg",
      borderColor: "rgba(99, 102, 241, 0.2)",
    },
  },

  infoIcon: {
    fontSize: 6,
    mb: 3,
  },

  infoTitle: {
    fontSize: 3,
    fontWeight: "semibold",
    color: "heading",
    mb: 2,
  },

  infoText: {
    fontSize: 2,
    color: "text_secondary",
    lineHeight: "relaxed",
  },

  // Background Elements
  bgElement1: {
    position: "absolute",
    top: "10%",
    left: "5%",
    width: "300px",
    height: "300px",
    background: "radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)",
    borderRadius: "full",
    animation: "pulse 6s ease-in-out infinite",
    zIndex: -1,
  },

  bgElement2: {
    position: "absolute",
    bottom: "20%",
    right: "10%",
    width: "200px",
    height: "200px",
    background: "radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)",
    borderRadius: "full",
    animation: "pulse 6s ease-in-out infinite 3s",
    zIndex: -1,
  },
};

/** @jsxImportSource @theme-ui/core */
import { Box, Heading, Text, Button } from "theme-ui";

export default function Modal({ open, setOpen, title, message }) {
  const closeModal = () => {
    setOpen(false);
  };

  if (!open) {
    return null;
  }

  return (
    <>
      {/* Backdrop */}
      <Box sx={styles.backdrop} onClick={closeModal} />
      
      {/* Modal */}
      <Box sx={styles.modal}>
        <Box sx={styles.modalContent}>
          {/* Success Icon */}
          <Box sx={styles.iconWrapper}>
            <Box sx={styles.successIcon}>✓</Box>
          </Box>

          <Heading sx={styles.title}>{title}</Heading>
          <Text sx={styles.message}>{message}</Text>

          <Button onClick={closeModal} sx={styles.button}>
            Got it!
          </Button>
        </Box>
      </Box>
    </>
  );
}

const styles = {
  backdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(5px)",
    zIndex: 1000,
    animation: "fadeIn 0.3s ease-out",
  },

  modal: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1001,
    animation: "scaleIn 0.3s ease-out",
  },

  modalContent: {
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "2xl",
    p: 8,
    maxWidth: "400px",
    width: "90vw",
    textAlign: "center",
    boxShadow: "2xl",
  },

  iconWrapper: {
    display: "flex",
    justifyContent: "center",
    mb: 4,
  },

  successIcon: {
    width: "60px",
    height: "60px",
    borderRadius: "full",
    background: "linear-gradient(135deg, #10b981, #059669)",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)",
    animation: "scaleIn 0.5s ease-out 0.2s both",
  },

  title: {
    fontSize: 5,
    fontWeight: "bold",
    color: "heading",
    mb: 3,
  },

  message: {
    fontSize: 3,
    color: "text_secondary",
    lineHeight: "relaxed",
    mb: 6,
  },

  button: {
    px: 6,
    py: 3,
    fontSize: 2,
    fontWeight: "semibold",
    borderRadius: "lg",
    background: "linear-gradient(135deg, #6366f1, #4f46e5)",
    color: "white",
    border: "none",
    cursor: "pointer",
    transition: "base",
    "&:hover": {
      background: "linear-gradient(135deg, #4f46e5, #4338ca)",
      transform: "translateY(-2px)",
      boxShadow: "lg",
    },
  },
};

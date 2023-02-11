/** @jsxImportSource @theme-ui/core */
import { Container, Box, Text, Input } from "theme-ui";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import SectionHeader from "../../components/section-header";
import paymentQr from "../../assets/qr-robotics-site.jpg";
import Modal from "../../components/Modal";

const formurl = "https://backend-robotics.herokuapp.com/api/form";

export default function Payment() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [transactionCode, setTransactionCode] = useState("");
  const [message, setMessage] = useState({
    message: "",
    title: "",
  });
  const [formData, setFormData] = useState({});
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("formData"))) {
      setFormData(JSON.parse(localStorage.getItem("formData")));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!transactionCode) {
      setIsOpen(true);
      setMessage({
        message:
          "You should enter your transaction code to proceed with your registration",
        title: "Payment Error",
      });
      return;
    }

    const data = {
      ...formData,
      transaction_code: transactionCode,
    };

    // setFormData({ ...formData, transaction_code: transactionCode });

    const response = await fetch(formurl, {
      method: "POST",
      body: JSON.stringify({ _token: "token", data }),
    });
    if (response.statusText === "OK") {
      setIsOpen(true);
      setMessage({
        message:
          "Thank you for registering. We will send further details via Email. We hope to meet you soon in the event!",
        title: "Registration Successful",
      });
      setTimeout(() => {
        router.push("/");
        localStorage.removeItem("formData");
      }, 3000);
    } else {
      setIsOpen(true);
      setMessage({
        message: "Something went wrong. Please try again later.",
        title: "Registration Failed",
      });
    }
    // console.log("done", response);
  };

  // console.log("transactionCode", transactionCode);

  return (
    <section sx={styles.banner} id="register-form">
      <Container sx={styles.banner.container}>
        <div className="container">
          <Box sx={styles.paymentContent}>
            <SectionHeader title="Payment through eSewa" />
            <Box sx={styles.stepsContainer}>
              <Box>
                <Box sx={styles.qrImage}>
                  <Image src={paymentQr} alt="Amit Patel" />
                </Box>
                <input
                  type="text"
                  placeholder="Transaction Code"
                  name="t_code"
                  value={transactionCode}
                  onChange={(e) => setTransactionCode(e.target.value)}
                />
              </Box>
              <Box sx={styles.qrText}>
                <Text sx={styles.qrText.header}>
                  Steps to complete your payment
                </Text>
                <Text sx={styles.qrText.step}>1. Scan the QR code given</Text>
                <Text sx={styles.qrText.step}>2. Pay through eSewa</Text>
                <Text sx={styles.qrText.step}>
                  3. Write your teams name in remarks section
                </Text>
                <Text sx={styles.qrText.step}>
                  4. Wait for the payment to be confirmed
                </Text>
                <Text sx={styles.qrText.step}>
                  5. Save the screenshot of completion of transaction
                </Text>
                <Text sx={styles.qrText.step}>
                  6. Enter your transaction code in the form below QR
                </Text>
                <Text sx={styles.qrText.step}>
                  <b>* Note: The registration fee is Rs. 1200/-</b>
                </Text>
                <Text sx={styles.qrText.step}>
                  If the QR code is not working.
                </Text>
                <Text sx={styles.qrText.step}>
                  You can do direct transfer to
                </Text>
                <Text sx={styles.qrText.step}>
                  <b>Amit Patel</b>
                </Text>
                <Text sx={styles.qrText.step}>
                  eSewa userid:<b>+9779803299782.</b>
                </Text>
              </Box>
            </Box>
            <Box sx={styles.buttonsContainer}>
              <button onClick={() => router.push("/registerForm/confirmation")}>
                Back
              </button>
              <button onClick={(e) => handleSubmit(e)}>Submit</button>
            </Box>
          </Box>
        </div>
      </Container>

      <Modal
        open={isOpen}
        setOpen={setIsOpen}
        title={message.title}
        message={message.message}
      />
    </section>
  );
}

const styles = {
  banner: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    container: {
      minHeight: "inherit",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
  },
  paymentContent: {
    padding: "20px",
  },
  stepsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    "@media screen and (max-width: 768px)": {
      flexDirection: "column",
    },
  },
  qrImage: {
    width: "250px",
    height: "250px",
  },
  qrText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "left",
    mx: "30px",
    header: {
      marginTop: "20px",
      fontSize: "24px",
      fontWeight: "600",
      color: "secondary",
    },
    step: {
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: 1.5,
    },
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

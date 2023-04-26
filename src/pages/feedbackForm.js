/** @jsxImportSource @theme-ui/core */
import { useState, useEffect } from "react";
import { Container, Box, Label, Input, Textarea, Button } from "theme-ui";
import Modal from "../components/Modal";

export default function feedbackForm() {
  const baseurl = "https://roboticswrc.herokuapp.com/feedback.php";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  // const { openModal } = useModals();

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => {
    setFormData({ name: "", email: "", comment: "" });
    // console.log("cleared");
  };
  const submitForm = async (e) => {
    e.preventDefault();

    setIsOpen(true);
    // console.log("before", formData);
    const response = await fetch(baseurl, {
      method: "POST",
      body: JSON.stringify({ data: 1, formData }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log("done", response);

    if (response.statusText === "OK") {
      clearState();
    }
  };

  return (
    <section sx={styles.banner} id="form">
      <Container sx={styles.banner.container}>
        <Box as="form" onSubmit={(e) => submitForm(e)}>
          <Label htmlFor="name">Name</Label>
          <Input
            name="name"
            id="name"
            mb={5}
            value={formData.name}
            placeholder="Full Name"
            onChange={onChange}
          />
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            id="email"
            mb={5}
            value={formData.email}
            placeholder="Email"
            onChange={onChange}
          />

          <Label htmlFor="comment">
            Provide us any feedback related to Rainy session
          </Label>
          <Textarea
            name="comment"
            id="comment"
            placeholder="Feedback"
            value={formData.comment}
            rows={6}
            mb={5}
            onChange={onChange}
          />

          <Button>Submit</Button>
        </Box>
        <Modal
          open={isOpen}
          setOpen={setIsOpen}
          title={"Feedback"}
          message={"Thank you for your response!"}
        />
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",

    // ::backdrop:{
    //   backgroundColor:'#000000';
    // }
    container: {
      minHeight: "inherit",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    contentBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "center",
      mb: ["40px", null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: "center",
      textAlign: "center",
      display: "inline-flex",
      mb: [0, null, -6, null, null, "-40px", null, -3],
      img: {
        position: "relative",
        height: [200, "auto"],
      },
    },
  },
};

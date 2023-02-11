/** @jsxImportSource @theme-ui/core */
import { useState, useEffect } from "react";
import { Container, Box } from "theme-ui";
import Modal from "../../components/Modal";
import { useRouter } from "next/router";

const tokenurl = "https://backend-robotics.herokuapp.com/api/token";

export default function registerForm() {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState({
    message: "",
    title: "",
  });
  const [formData, setFormData] = useState({
    _token: "",
    team_name: "",
    b_name: "",
    clz: "",
    p_email: "",
    p_contact: "",
    s_email: "",
    s_contact: "",
    m_name: "",
    t_name_1: "",
    t_name_2: "",
    t_name_3: "",
    t_name_4: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // const clearState = () => {
  //   setFormData({ name: "", email: "", comment: "" });
  // };

  const getToken = async () => {
    const response = await fetch(tokenurl, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    var tokenid = response.json();

    tokenid.then((value) => {
      setFormData((prevState) => ({
        ...prevState,
        _token: value[0],
      }));
    });
  };

  const handleNextPage = (e) => {
    e.preventDefault();
    setDrawerOpen(!drawerOpen);
    getToken();
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    setDrawerOpen(!drawerOpen);
  };

  const handleProceed = async (e) => {
    e.preventDefault();
    if (
      formData.team_name === "" ||
      formData.b_name === "" ||
      formData.clz === "" ||
      formData.p_email === "" ||
      formData.p_contact === "" ||
      formData.t_name_1 === ""
    ) {
      setIsOpen(true);
      setMessage({
        message:
          "Team name, Bot name, Institution, Primary Email, Primary Contact, and at least one team member name are required.",
        title: "Error",
      });
      return;
    }

    localStorage.setItem("formData", JSON.stringify(formData));
    router.push("/registerForm/confirmation");
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("formData"))) {
      setFormData(JSON.parse(localStorage.getItem("formData")));
    }
  }, []);

  return (
    <section sx={styles.banner} id="register-form">
      {/* <SectionHeader title="Registration for Battle for Speed 2022 is OPEN. HURRY UP!!" /> */}
      <Container sx={styles.banner.container}>
        <div
          className={drawerOpen ? "container right-panel-active" : "container"}
          id="container"
        >
          <div className="form-container sign-up-container">
            <form action="#">
              <h1>Enter your mentor and team member details</h1>
              <input
                type="text"
                placeholder="Team Mentor"
                name="m_name"
                value={formData.m_name}
                onChange={onChange}
              />
              <input
                type="text"
                placeholder="Team Member 1"
                name="t_name_1"
                value={formData.t_name_1}
                onChange={onChange}
                required
              />
              <input
                type="text"
                placeholder="Team Member 2"
                name="t_name_2"
                value={formData.t_name_2}
                onChange={onChange}
              />
              <input
                type="text"
                placeholder="Team Member 3"
                name="t_name_3"
                value={formData.t_name_3}
                onChange={onChange}
              />
              <input
                type="text"
                placeholder="Team Member 4"
                name="t_name_4"
                value={formData.t_name_4}
                onChange={onChange}
              />
              <div className="agree">
                <input type="checkbox" className="agreebox" />
                <label htmlFor="agree">
                  I agree to the{" "}
                  <a
                    color="primary"
                    href="https://robotics.wrc.edu.np/files/BOS-RuleBook_2022.pdf"
                    target="_blank"
                  >
                    <b>
                      <u>
                        <mark>Rule Book</mark>
                      </u>
                    </b>
                  </a>
                  ,terms and conditions of the event.
                  <b>"Battle for speed 2022"</b>.
                </label>
              </div>

              <div className="previousSubmit">
                <button className="previous" onClick={(e) => handlePrevious(e)}>
                  Back
                </button>
                <button onClick={(e) => handleProceed(e)}>Proceed</button>
              </div>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <Box as="form">
              <h1>Register for Battle for Speed 2022</h1>
              <h3>
                click here:
                <a
                  color="primary"
                  href="https://robotics.wrc.edu.np/files/BOS-RuleBook_2022.pdf"
                  target="_blank"
                >
                  <b>
                    <u>
                      <mark>Rule Book and description</mark>
                    </u>
                  </b>
                </a>
              </h3>
              <input
                type="text"
                placeholder="Team Name"
                name="team_name"
                value={formData.team_name}
                onChange={onChange}
                required
              />
              <input
                type="text"
                placeholder="Robot Name"
                name="b_name"
                value={formData.b_name}
                onChange={onChange}
                required
              />
              <input
                type="text"
                placeholder="Instituion/Organisation"
                name="clz"
                value={formData.clz}
                onChange={onChange}
                required
              />

              <input
                type="email"
                placeholder="Primary Email"
                name="p_email"
                value={formData.p_email}
                onChange={onChange}
                required
              />
              <input
                type="phone"
                placeholder="Primary Phone Number"
                name="p_contact"
                value={formData.p_contact}
                onChange={onChange}
                required
              />
              <input
                type="email"
                placeholder="Alternative Email"
                name="s_email"
                value={formData.s_email}
                onChange={onChange}
              />
              <button onClick={(e) => handleNextPage(e)}>Next page</button>
            </Box>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Check your team info</h1>
                <p>To see if everything is correct, check your team info</p>
                <button
                  className="ghost"
                  id="signIn"
                  onClick={() => setDrawerOpen(!drawerOpen)}
                >
                  Check Info
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your mentor and team member details </p>
                <button
                  className="ghost"
                  id="signUp"
                  onClick={() => setDrawerOpen(!drawerOpen)}
                >
                  Team Details
                </button>
              </div>
            </div>
          </div>
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
};

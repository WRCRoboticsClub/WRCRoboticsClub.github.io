/** @jsxImportSource @theme-ui/core */
import { Container, Box } from "theme-ui";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import SectionHeader from "../../components/section-header";

export default function Confirmation() {
  // const [formData, setFormData] = useState({
  //   _token: "",
  //   team_name: "Nema",
  //   b_name: "Bema",
  //   clz: "tema",
  //   p_email: "cat",
  //   p_contact: "bat",
  //   s_email: "sat",
  //   m_name: "nat",
  //   t_name_1: "talk",
  //   t_name_2: "mock",
  //   t_name_3: "shock",
  //   t_name_4: "mock",
  // });
  // const formData = window.localStorage.getItem("formData") || {};

  const [formData, setFormData] = useState({});
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("formData"))) {
      setFormData(JSON.parse(localStorage.getItem("formData")));
    }
  }, []);
  const router = useRouter();

  return (
    <section sx={styles.banner} id="register-form">
      <Container sx={styles.banner.container}>
        <div className="container">
          <div className="confirmation-form">
            <SectionHeader title="Confirmation your Application" />

            <table id="confirmApplication">
              <tbody>
                <tr>
                  <td>Team Name</td>
                  <td>{formData.team_name}</td>
                </tr>
                <tr>
                  <td>Bot Name</td>
                  <td>{formData.b_name}</td>
                </tr>
                <tr>
                  <td>Institution</td>
                  <td>{formData.clz}</td>
                </tr>

                <tr>
                  <td>Primary Email</td>
                  <td>{formData.p_email}</td>
                </tr>
                <tr>
                  <td>Primary Contact</td>
                  <td>{formData.p_contact}</td>
                </tr>
                <tr>
                  <td>Secondary Email</td>
                  <td>{formData.s_email}</td>
                </tr>

                <tr>
                  <td>Team Mentor Name</td>
                  <td>{formData.m_name}</td>
                </tr>
                <tr>
                  <td>Team Member 1</td>
                  <td>{formData.t_name_1}</td>
                </tr>
                <tr>
                  <td>Team Member 2</td>
                  <td>{formData.t_name_2}</td>
                </tr>
                <tr>
                  <td>Team Member 3</td>
                  <td>{formData.t_name_3}</td>
                </tr>
                <tr>
                  <td>Team Member 4</td>
                  <td>{formData.t_name_4}</td>
                </tr>
              </tbody>
            </table>
            <Box sx={styles.buttonsContainer}>
              <button onClick={() => router.push("/registerForm")}>
                Check
              </button>
              <button
                sx={styles.payButton}
                onClick={() => router.push("/registerForm/payment")}
              >
                Pay
              </button>
            </Box>
          </div>
        </div>
      </Container>
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
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  payButton: {
    marginLeft: "10px",
  },
};

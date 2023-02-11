/** @jsxImportSource @theme-ui/core */
import { ModalStack } from "@mattjennings/react-modal-stack";

export default function Modal({ open, setOpen, title, message }) {
  const closeModal = () => {
    setOpen(false);
  };

  if (!open) {
    return null;
  }

  return (
    <ModalStack
      renderModals={({ stack }) => (
        <>
          {stack.length > 0 && <div sx={styles.stack} />}
          {stack.map((modal, index) => {
            return (
              <modal.component
                key={index}
                open={modal === stack[stack.length - 1]}
                {...modal.props}
              />
            );
          })}
        </>
      )}
    >
      <div sx={styles.container}>
        <div sx={styles.containerBox}>
          <h2>{title}</h2>
          <p>{message}</p>

          <div>
            <button onClick={() => closeModal()}>Close</button>
            {/* {isConfirm && (
              <button sx={styles.submitButton} onClick={(e) => submitForm(e)}>
                Submit
              </button>
            )} */}
          </div>
        </div>
      </div>
    </ModalStack>
  );
}

const styles = {
  stack: {
    zIndex: 90,
    position: `fixed`,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.3)",
  },
  container: {
    zIndex: 100,
    position: `fixed`,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: `flex`,
    justifyContent: `center`,
    alignItems: "center",
    backdropFilter: "blur(5px)",
  },
  containerBox: {
    width: 400,
    height: 250,
    textAlign: "center",
    padding: "0 16px",
    borderRadius: "10px",
    background: "white",
    border: "1px solid #e5e5e5",
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  },
  // containerTable: {
  //   marginTop: "100px",
  //   width: "80%",
  //   height: "75%",
  //   overflowY: "scroll",
  //   textAlign: "center",
  //   padding: "0 16px",
  //   borderRadius: "10px",
  //   background: "white",
  //   border: "1px solid #e5e5e5",
  //   boxShadow:
  //     "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  // },
  // submitButton: {
  //   marginLeft: "10px",
  // },
};

import ReactDOM from "react-dom";
import styles from "./modal.module.css";
import { useEffect } from "react";

const Modal = ({ children, state, ...rest }) => {
  return ReactDOM.createPortal(
    state && <ModalInner {...rest}>{children}</ModalInner>,
    document.getElementById("modal-root")
  );
};

const ModalInner = ({ children, onClose }) => {
  const escHandler = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    window.document.addEventListener("keydown", escHandler);

    return () => {
      window.document.removeEventListener("keydown", escHandler);
    };
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <svg
          className={`bi bi-x-lg ${styles.icon}` }
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
        {children}
      </div>
    </div>
  );
};

export default Modal;

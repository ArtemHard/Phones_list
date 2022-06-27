import ReactDOM from "react-dom";
import styles from "./modal.module.css";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { modalWrVariants, modalInnerVariants } from "./modalAnimation";

const Modal = ({ children, state, ...rest }) => {
  return ReactDOM.createPortal(
    <AnimatePresence>
    {state && <ModalInner {...rest}>{children}</ModalInner>}
    </AnimatePresence>,
    document.getElementById("modal-root"),
    
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

  const closeClickHandler = () => {
    onClose();
  };

  const innerClickHandler = (e) => {
    e.stopPropagation();
  };

  return (
    <motion.div
      variants={modalWrVariants}
      initial="start"
      animate="show"
      exit="end"
      onClick={closeClickHandler}
      className={styles.wrapper}
    >
      <motion.div
        variants={modalInnerVariants}
        onClick={innerClickHandler}
        className={styles.inner}
      >
        <svg
          onClick={closeClickHandler}
          role="button"
          className={`bi bi-x-lg ${styles.icon}`}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Modal;

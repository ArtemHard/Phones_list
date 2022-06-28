// import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { PhonesItemVariants } from "./animationPhonesItem";
import { useNavigate } from "react-router-dom";
import { usePhonesContext } from "../Phones";

function PhonesItem({ name, phone, id }) {
  let deleteTrashHold = 120;
  const { deletePhone } = usePhonesContext();

  const followX = useMotionValue(0);
  const xInput = [-deleteTrashHold, 0, deleteTrashHold];
  const background = useTransform(followX, xInput, [
    "linear-gradient(180deg, #FF0000 0%, #FF0000 100%)",
    "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%)",
    "linear-gradient(180deg, #FF0000 0%, #FF0000 100%)",
  ]);

  let isDrag = false;

  const navigate = useNavigate();

  const dragStartHandler = () => {
    console.log("dragStartHandler");

    isDrag = true;
  };

  const dragEndHandler = () => {
    console.log("dragEndHandler");
    if (Math.abs(followX.get()) > deleteTrashHold) {
      deletePhone(id);
    }

    setTimeout(() => {
      isDrag = false;
    });
  };

  const ClickHandler = () => {
    console.log("mouseUpHandler", { isDrag });
    if (!isDrag) navigate(`/phones/${id}`);
  };

  return (
    <div>
      <motion.div
        className="list-group-item list-group-item-action"
        drag="x"
        style={{ x: followX, background }}
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
        onDragStart={dragStartHandler}
        onDragEnd={dragEndHandler}
        variants={PhonesItemVariants}
        onClick={ClickHandler}
        role="button"
        exit={{
          caleY: 0,
          opacity: 0,
          zIndex: -1,
        }}
      >
        {/* <Link className="list-group-item list-group-item-action" to={`/phones/${id}`}> */}
        <span className="pe-4">{name}</span>
        <span>{phone}</span>
        {/* </Link> */}
      </motion.div>
    </div>
  );
}

export default PhonesItem;

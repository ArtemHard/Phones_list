// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PhonesItemVariants } from "./animationPhonesItem";
import { useNavigate } from "react-router-dom"
import { usePhonesContext } from "../Phones";


function PhonesItem({ name, phone, id }) {

  const {deletePhone} = usePhonesContext()

  let isDrag = false
  let deleteTrashHold = 120

const navigate = useNavigate()

const dragStartHandler = () => {
  console.log('dragStartHandler');
  
  isDrag = true
}

const dragEndHandler =  (_, info) => {
  console.log('dragEndHandler', deleteTrashHold, info.offset);
  if (Math.abs(info.offset.x)  > deleteTrashHold) {
    deletePhone(id)
  }


  setTimeout(() => {
    isDrag = false
  })

}

const ClickHandler = () => {
  console.log("mouseUpHandler", {isDrag});
  if (!isDrag) navigate(`/phones/${id}`)
  
  
}

  return (
    <motion.div
      className="list-group-item list-group-item-action"
      drag="x"
      dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
      onDragStart={dragStartHandler}
      onDragEnd={dragEndHandler}
      variants={PhonesItemVariants}
      onClick={ClickHandler}
      role="button"
    >
      {/* <Link className="list-group-item list-group-item-action" to={`/phones/${id}`}> */}
      <span className="pe-4">{name}</span>
      <span>{phone}</span>
      {/* </Link> */}
    </motion.div>
  );
}

export default PhonesItem;

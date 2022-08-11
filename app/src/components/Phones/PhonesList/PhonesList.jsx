import PhonesItem from "../PhonesItem/PhonesItem";
import { motion } from "framer-motion";
import { phonesListVariants } from "./animationPhones";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setPhonesQuery } from "../../redux/actionCreators/phonesAC";

function PhonesList() {
  const phones = useSelector(store => store.phones);
  const filter = useSelector(store => store.filter)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPhonesQuery(filter))
  }, [filter])
  return (
    <div className="d-flex justify-content-center">
      {phones.length ? (
        <motion.div
          variants={phonesListVariants}
          initial="start"
          animate="end"
          className="list-group"
        >
            {phones.map((phone) => (
              <PhonesItem key={phone.id} {...phone} />
            ))}
        </motion.div>
      ) : null}
    </div>
  );
}

export default PhonesList;

import PhonesItem from "../PhonesItem/PhonesItem";
import { motion, AnimatePresence } from "framer-motion";
import { phonesListVariants } from "./animationPhones";
import { useSelector } from "react-redux";

function PhonesList() {
  const phones = useSelector(store => store.phones);

  return (
    <div className="d-flex justify-content-center">
      {phones.length ? (
        <motion.div
          variants={phonesListVariants}
          initial="start"
          animate="end"
          className="list-group"
        >
          <AnimatePresence>
            {phones.map((phone) => (
              <PhonesItem key={phone.id} {...phone} />
            ))}
            </AnimatePresence>
        </motion.div>
      ) : null}
    </div>
  );
}

export default PhonesList;

import { useContext } from "react";
import { PhonesContext } from "../Phones";
import PhonesItem from "../PhonesItem/PhonesItem";
import { motion } from "framer-motion";
import { phonesListVariants } from "./animationPhones";

function PhonesList() {
  const { phones } = useContext(PhonesContext);

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

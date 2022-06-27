import { useNavigate } from "react-router-dom"
import { usePhonesDetailContext } from "../PhonesDetail"
import { motion } from "framer-motion"


const cardVariants = {
  start: {
    opacity: 0,
    y: 100,
    rotate: 60
  },
  end: {
    opacity: 1, 
    y:0,
    rotate: 0,
    transition: {
      duration: 0.8,
      rotate: {
        duration: 0.5,
      }
    }
  }

}

const PhonesDetailCard = () => {

    const navigate = useNavigate({})

    const {phone, openModal} = usePhonesDetailContext()
    
    


    return (
        <motion.div variants={cardVariants} initial="start" animate="end" className="card" style={{ width: '18rem' }}>
          <img src={phone.pic} className="card-img-top" alt="..." />
          <div className="card-body">
            <motionh5 className="card-title">{phone.name}</motionh5>
            <p className="card-text">{phone.phone}</p>
            <button type="button" onClick={() => navigate(-1)} className="btn btn-primary mx-1">Go back</button>
            <button type="button" onClick={openModal} className="btn btn-success mx-1">Edit</button>
          </div>
        </motion.div>
    )
}

export default PhonesDetailCard
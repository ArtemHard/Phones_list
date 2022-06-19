import { useContext } from "react"
import { createContext } from "react"
import { useMemo } from "react"
import usePhonesDetail from "./hooks/usePhonesDetail"
import usePhonesDetailModal from "./hooks/usePhonesDetailModal"
import PhonesDetailCard from "./PhonesDetailCard/PhonesDetailCard"
import PhonesDetailModal from "./PhonesDetailModal/PhonesDetailModal"


const PhonesDetailContext = createContext()

const PhonesDetail = () => {
   

  const {viewModal, openModal, closeModal} = usePhonesDetailModal()

  const {phone, submitHandler} = usePhonesDetail(closeModal)

  const sharedValues = useMemo(() => {
    return {
      viewModal, openModal, closeModal, phone, submitHandler,
    }
  }, [phone, viewModal])
  

    return (
      <PhonesDetailContext.Provider value={sharedValues}>
        <div className="d-flex justify-content-center">
          <PhonesDetailCard />
          <PhonesDetailModal />
        </div>
      </PhonesDetailContext.Provider>
        
    )
}

export default PhonesDetail

export const usePhonesDetailContext = () =>  useContext(PhonesDetailContext)


import Modal from "../../../Modal/Modal"
import { usePhonesDetailContext } from "../PhonesDetail"
import Form from "../../Form/Form"

const PhonesDetailModal = () => {

    const {viewModal, closeModal, phone, submitHandler} = usePhonesDetailContext()

    

    return (
        <Modal
        state = {viewModal}
        onClose = {closeModal}
        >
            <Form
             onSubmit={submitHandler}   
             {...phone}
            />
        </Modal>

    )
}

export default PhonesDetailModal
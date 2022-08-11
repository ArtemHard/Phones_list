import { useDispatch } from 'react-redux'
import { addPhoneQuery } from '../../redux/actionCreators/phonesAC';
import Form from '../Form/Form'

function PhoneForm() {
  const dispatch = useDispatch()
  const submitHandler = async (e) => {
    e.preventDefault()

    const formData = Object.fromEntries(new FormData(e.target).entries())
    dispatch(addPhoneQuery(formData, e))
  }

  return (
    <Form
      onSubmit={submitHandler}
      
    />
  )
}

export default PhoneForm

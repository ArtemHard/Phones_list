import { useDispatch } from 'react-redux'
import { setPhonesQuery } from '../redux/actionCreators/phonesAC'
import PhoneForm from './PhoneForm/PhoneForm'
import PhonesList from './PhonesList/PhonesList'
// import SearchPhoneForm from './Search/SearchPhoneForm'
import {createContext, useEffect, useContext} from 'react'

const PhonesContext = createContext()

function Phones() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPhonesQuery())
    }, [])

    return (
        <>
            <PhoneForm />
            < hr className='mb-4' />
            {/* <SearchPhoneForm/> */}
            <PhonesList/>
        </>
    )
}

export default Phones

const usePhonesContext = () => useContext(PhonesContext)

export {
    PhonesContext,
    usePhonesContext,
}
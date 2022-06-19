import PhoneForm from './PhoneForm/PhoneForm'
import PhonesList from './PhonesList/PhonesList'

const {createContext, useState, useEffect, useContext} = require('react')

const PhonesContext = createContext()

function Phones() {

    const [phones, setPhones] = useState([])


    useEffect(() => {
        fetch('http://localhost:3000/api/v1/phones')
            .then(response => response.json())
            .then(dataFromServer => setPhones(dataFromServer))
    }, [])


const addPhone = (newPhone) => {
    setPhones((prev) => [ ...prev, newPhone])
}

    return (
        <PhonesContext.Provider value={{ phones, addPhone }}>
            <PhoneForm />
            < hr className='mb-4' />
            <PhonesList/>
        </PhonesContext.Provider>
    )
}

export default Phones

const usePhonesContext = () => useContext(PhonesContext)

export {
    PhonesContext,
    usePhonesContext,
}
import PhoneForm from './PhoneForm/PhoneForm'
import PhonesList from './PhonesList/PhonesList'
import SearchPhoneForm from './Search/SearchPhoneForm'

const {createContext, useState, useEffect, useContext} = require('react')

const PhonesContext = createContext()

function Phones() {

    const [phones, setPhones] = useState([])


    useEffect(() => {
        fetch('http://localhost:3000/api/v1/phones')
            .then(response => response.json())
            .then((dataFromServer) => setPhones((prev) => dataFromServer))
    }, [])


const addPhone = (newPhone) => {
    setPhones((prev) => [ ...prev, newPhone])
}

const updatePhones = (newPhonesList) => setPhones(newPhonesList)

const deletePhone = (id) => {
    fetch(`http://localhost:3000/api/v1/phones/${id}`, {
        method: 'DELETE',
    })
            .then(response => {
                if (response.status === 200) {
                    setPhones(prev => prev.filter((phone) => phone.id !== id))
                }
            })
            
}

    return (
        <PhonesContext.Provider value={{ phones, addPhone, deletePhone, updatePhones }}>
            <PhoneForm />
            < hr className='mb-4' />
            <SearchPhoneForm/>
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
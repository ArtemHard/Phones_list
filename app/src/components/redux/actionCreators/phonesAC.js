import { ADD_PHONE, DELETE_PHONE, SET_PHONES, UPDATE_PHONE } from "../types/phonesTypes"

const setPhones = (newPhonesArray) => {
    return {
        type: SET_PHONES,
        payload: newPhonesArray
    }
}

export const setPhonesQuery = (filter = '') => async (dispatch) => {

    const response = await fetch(`http://localhost:3000/api/v1/phones/?${filter}`)
    const dataFromServer = await response.json()
    dispatch(setPhones(dataFromServer))
}

const deletePhone = (id) => {
    return {
        type: DELETE_PHONE,
        payload: id,
    }
}

export const deletePhoneQuery = (id) => async (dispatch) => {

    const response = await fetch(`http://localhost:3000/api/v1/phones/${id}`, {
        method: 'DELETE',
    })
    
    if (response.status === 200) {
        dispatch(deletePhone(id))
    }
}

const updatePhone = (newPhoneObject) => {
    return {
        type: UPDATE_PHONE,
        payload: newPhoneObject,
    }
}

export const updatePhoneQuery = (id, formData, closeModal) => async (dispatch) => {
  const response = await fetch(
    `http://localhost:3000/api/v1/phones/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  );

  if (response.status === 200) {
    const updatedPhoneFromServer = await response.json(); // не приходит ответ
    dispatch(updatePhone(updatedPhoneFromServer));
    closeModal();
  } else {
    alert("Wrong data");
  }
}

const addPhone = (newPhoneObject) => {
    return {
        type: ADD_PHONE,
        payload: newPhoneObject,
    }
}

export const addPhoneQuery = (formData, e) => async (dispatch) => {

    const response = await fetch(
        `http://localhost:3000/api/v1/phones/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
  
      if (response.status === 201) {
        const addedPhoneFromServer = await response.json(); // не приходит ответ
        dispatch(addPhone(addedPhoneFromServer))
        e.target.reset()
      } else {
        alert("Wrong data");
      }
}

export const getPhoneQuery = (id, setLoading) => async (dispatch) => {
  const response = await fetch(`http://localhost:3000/api/v1/phones/${id}`)
  const phoneFromServer = await response.json()
  dispatch(addPhone(phoneFromServer))
  setLoading(false)
}
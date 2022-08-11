import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { getPhoneQuery, updatePhoneQuery } from "../../../redux/actionCreators/phonesAC";
const usePhonesDetail = (closeModal) => {
  const { phonesId } = useParams();

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch()

  const phone = useSelector(store => store.phones.find((el) => el.id === phonesId)) || {}

  useLayoutEffect(() => {
    console.log('useLayoutEffect');
    setLoading(true)
    dispatch(getPhoneQuery(phonesId, setLoading))
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target).entries());
  
    dispatch(updatePhoneQuery(phonesId, formData, closeModal))
  };

  return {
    phone,
    submitHandler,
    loading,
  };
};

export default usePhonesDetail;

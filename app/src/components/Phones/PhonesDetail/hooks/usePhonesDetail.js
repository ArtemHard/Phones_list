import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { updatePhoneQuery } from "../../../redux/actionCreators/phonesAC";
const usePhonesDetail = (closeModal) => {
  const { phonesId } = useParams();

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch()

  const [phone, setPhone] = useState({});

  useLayoutEffect(() => {
    setLoading(true);

    fetch(`http://localhost:3000/api/v1/phones/${phonesId}`)
      .then((response) => response.json())
      .then((dataFromServer) => setPhone(dataFromServer))
      .finally(() => setLoading(false));
  }, [phonesId]);

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

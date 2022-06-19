import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const usePhonesDetail = (closeModal) => {
  const { phonesId } = useParams();

  const [phone, setPhone] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/phones/${phonesId}`)
      .then((response) => response.json())
      .then((dataFromServer) => setPhone(dataFromServer));
  }, [phonesId]);

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target).entries());

    const response = await fetch(
      `http://localhost:3000/api/v1/phones/${phone.id}`,
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
      setPhone(updatedPhoneFromServer);
      closeModal();
      e.target.reset();
    } else {
      alert("Wrong data");
    }
  };

  console.log("usePhonesDetail:", { phone });
  return {
    phone,
    submitHandler,
  };
};

export default usePhonesDetail;

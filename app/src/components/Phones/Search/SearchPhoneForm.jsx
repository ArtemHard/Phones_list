import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";


// let isMount = false

const SearchPhoneForm = () => {
  const [searchInput, setSearchInput] = useState("");

  let isMount = useRef(false)
 

  

  useEffect(()=> {
    console.log('useEffect');
    if(isMount.current) {
        const filter = {
            search: searchInput
        }

        const prepareFilterForUrl = encodeURIComponent(JSON.stringify(filter))
        fetch(`http://localhost:3000/api/v1/phones/?filter=${prepareFilterForUrl}`)
        .then(response => response.json())
        .then(console.log)

    } else {
        isMount.current = true
    }

  }, [searchInput])


  const changeHandler = (e) => {
    setSearchInput(e.target.value)
  }

  return (
    <form className="d-flex flex-column align-items-center">
      <div className="mb-3">
        <input
          type="text"
          name="name"
          placeholder="Name..."
          className="form-control"
          id="exampleInputEmail1"
          onChange={changeHandler}
          value={searchInput}
        />
      </div>
    </form>
  );
};

export default SearchPhoneForm;

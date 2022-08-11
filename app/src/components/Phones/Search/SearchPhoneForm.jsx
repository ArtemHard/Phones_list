import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setFilter } from "../../redux/actionCreators/filterAC";

// let isMount = false

const SearchPhoneForm = () => {
  const [searchInput, setSearchInput] = useState("");
  let isMount = useRef(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch()

  useEffect(() => {
    console.log("useEffect");
    if (isMount.current) {
      const filter = {
        search: searchInput,
      };

      const prepareFilterForUrl = encodeURIComponent(JSON.stringify(filter));

      const query = `filter=${prepareFilterForUrl}`;

      setSearchParams(query);
      dispatch(setFilter(query))

    } else {
      const parsedQuery = JSON.parse(searchParams.get("filter"));

      
      if (parsedQuery && parsedQuery.search) {
          setSearchInput(parsedQuery.search)
          dispatch(setFilter(parsedQuery))
        }
        isMount.current = true;
    }
  }, [searchInput]);

  const changeHandler = (e) => {
    setSearchInput(e.target.value);
  };

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

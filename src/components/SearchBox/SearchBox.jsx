import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

import css from "./SearchBox.module.css";

export default function SearchBox() {
  const filterValue = useSelector((state) => state.filters.name);
  const findFieldId = useId();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.searchBox}>
      <label htmlFor={findFieldId}>Find contacts by name</label>
      <input
        value={filterValue}
        id={findFieldId}
        onChange={handleChange}
      ></input>
    </div>
  );
}

import React from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleQuery = (query) => {
    dispatch(changeFilter(query));
  };

  return (
    <div className={css.box}>
      <label>Find contacts by name</label>
      <input type="text" value={filter} onChange={(evt) => handleQuery(evt.target.value)} />
    </div>
  );
};

export default SearchBox;

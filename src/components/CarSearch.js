import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeSearchTerm } from '../store';

const CarSearch = () => {
  const [searchInput, setSearchInput] = useState('');
  const dispatch = useDispatch();

  const handleSearchTermChange = e => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(changeSearchTerm(searchInput));
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [searchInput, dispatch]);

  return (
    <div className="list-header">
      <div className="title is-31">My Cars</div>
      <div className="search field is-horizontal">
        <label htmlFor="" className="label1">
          Search
        </label>
        <input
          type="text"
          className="input"
          value={searchInput}
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  );
};

export default CarSearch;

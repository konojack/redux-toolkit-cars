import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCar, changeCost, changeName } from '../store';

const CarForm = () => {
  const { name, cost } = useSelector(state => state.form);
  const dispatch = useDispatch();

  const handleNameChange = e => {
    dispatch(changeName(e.target.value));
  };

  const handleCostChange = e => {
    const number = parseFloat(e.target.value) || 0;
    dispatch(changeCost(number));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addCar({ name, cost }));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-31">Add Car</h4>
      <form action="">
        <div className="field-group">
          <div className="field">
            <label htmlFor="" className="label">
              Name
            </label>
            <input
              type="text"
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label htmlFor="" className="label">
              Cost
            </label>
            <input
              type="number"
              className="input is-expanded"
              value={cost || ''}
              onChange={handleCostChange}
            />
          </div>
          <div className="field">
            <button className="button is-link" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CarForm;

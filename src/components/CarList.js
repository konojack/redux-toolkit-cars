import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCar } from '../store';

const CarList = () => {
  const cars = useSelector(state => state.cars.data);
  const dispatch = useDispatch();

  const handleCarDelete = carId => {
    dispatch(removeCar(carId));
  };

  return (
    <div className="car-list">
      {cars.map(car => (
        <div key={car.id} className="panel">
          <p>
            {car.name} - ${car.cost}
          </p>
          <button
            className="button is-danger"
            onClick={() => handleCarDelete(car.id)}
          >
            Delete
          </button>
        </div>
      ))}
      <hr />
    </div>
  );
};

export default CarList;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCar } from '../store';

const CarList = () => {
  const { cars, name } = useSelector(({ form, cars: { searchTerm, data } }) => {
    const filteredCars = data.filter(
      car =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase()) || !searchTerm
    );

    return {
      cars: filteredCars,
      name: form.name,
    };
  });

  const dispatch = useDispatch();

  const handleCarDelete = carId => {
    dispatch(removeCar(carId));
  };

  const renderedCars = cars?.map(car => {
    const isBold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel ${isBold && 'bold'}`}>
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
    );
  });

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
};

export default CarList;

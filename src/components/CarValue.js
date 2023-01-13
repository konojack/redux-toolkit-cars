import React from 'react';
import { useSelector } from 'react-redux';

const CarValue = () => {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) =>
    data
      .filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .reduce((acc, currentValue) => acc + currentValue.cost, 0)
  );

  return <div className="car-value">Total Cost: ${totalCost}</div>;
};

export default CarValue;

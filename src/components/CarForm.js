import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../store';

const CarForm = () => {
  const form = useSelector(state => state.form);
  const dispatch = useDispatch();
  return <div>CarForm</div>;
};

export default CarForm;

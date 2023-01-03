import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <h1>Categories</h1>
      <button type="button" onClick={() => handleStatus()}>Check Status</button>
      <p>{status}</p>
    </div>
  );
};

export default Categories;

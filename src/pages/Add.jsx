import React, { useContext } from 'react'
import Typography from '@mui/material/Typography';
import CarForm from '../components/forms/Form';
import { CarsContext } from '../components/contexts/car.context';
import { useNavigate } from 'react-router-dom';

function Add() {

  const { addCar } = useContext(CarsContext);
  const navigate = useNavigate();
  const submitHandler = (data) => {
    addCar(data);
    navigate('/');

  }

  return (
    <>
      <Typography
        variant="h2"
        component="h1"
      >
        Add todo
      </Typography>
      <CarForm submitHandler={submitHandler} />
    </>
  )
}

export default Add
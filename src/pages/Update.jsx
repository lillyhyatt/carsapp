import React, { useContext } from 'react'
import { useParams } from "react-router-dom"
import Typography from '@mui/material/Typography';
import CarForm from '../components/forms/Form';
import { CarsContext } from '../components/contexts/car.context';
import { useNavigate } from 'react-router-dom';

function Update() {
  const { id } = useParams();
  const { cars, updateCar } = useContext(CarsContext);

  const car = cars.find(({ _id }) => id === _id);

  const navigate = useNavigate();
  const submitHandler = (data) => {
    updateCar(data);
    navigate('/');

  }

  // send car and handler to form
  return (
    <>
      <Typography
        variant="h2"
        component="h1"
        sx={{ marginBottom: 2 }}
      >
        update car
      </Typography>
      <CarForm car={car} submitHandler={submitHandler} />
    </>
  )
}

export default Update
import React, { useContext, useEffect } from 'react';



import Typography from '@mui/material/Typography';


import { CarsContext } from '../components/contexts/car.context';
import { UIContext } from './../components/contexts/UI.context';

import CarsList from '../components/CarsList';


function Home() {

  const { cars, fetchCars, deleteCar } = useContext(CarsContext);
  const { showMessage } = useContext(UIContext);


  useEffect(() => {
    fetchCars();
  }, [fetchCars])



  const deleteHandler = (id) => {

    deleteCar(id);

  }




  return (
    <>
      <Typography variant="h3" component="h2">
        Cars
      </Typography>


      <CarsList cars={cars} deleteHandler={deleteHandler} />
    </>
  )
}

export default Home;
import React from 'react'
import { useParams } from "react-router-dom"
import Typography from '@mui/material/Typography';
import CarForm from '../components/forms/TodoForm';


function Update() {
  const {id} = useParams();
  // send car and handler to form
  return (
    <>
   <Typography
        variant="h2"
        component="h1"
      >
      update {id}
      </Typography>
      <CarForm />
     </>
  )
}

export default Update
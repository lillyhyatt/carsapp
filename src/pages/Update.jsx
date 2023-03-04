import React from 'react'
import { useParams } from "react-router-dom"


function Update() {
  const {id} = useParams();
  return (
    <>
   <h1>update {id}</h1>
     </>
  )
}

export default Update
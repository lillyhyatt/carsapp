import React from 'react'
import { NavLink } from 'react-router-dom'

function TempHeader() {
  return (
    <div>
        <NavLink to="/">List page</NavLink>
        <NavLink to="/add">Add page</NavLink>
        <NavLink to="/update">Update page</NavLink>
        <NavLink to="/notfound">Not found page</NavLink>
    </div>
  )
}

export default TempHeader
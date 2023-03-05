import React from 'react'
import { Link } from "react-router-dom";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';

function CarsList({
    cars = [], 
deleteHandler=() => console.log('Not deleteHandler provided to carslist')
}) {

    const reversedCars = [...cars].reverse();
return (
    <List>
    {reversedCars.map(({ name, bhp, avatar_url, _id }) => (
      <ListItem key={_id}>
        <ListItemAvatar>
          <Avatar alt="" src={avatar_url} />
        </ListItemAvatar>
        <ListItemText>
          {name} (BHP: {bhp})
        </ListItemText>
        <IconButton
          aria-label="update"
          to={`/update/${_id}`}
          component={Link}
        >
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => deleteHandler(_id)}>
          <DeleteIcon />
        </IconButton>
      </ListItem>
    ))}
  </List>
  )
}

export default CarsList
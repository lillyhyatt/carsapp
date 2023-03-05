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
return (
    <List>
    {cars.map(({ name, bhp, avatar_url, _id }, i) => (
      <ListItem key={i}>
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
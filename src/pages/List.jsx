import React from 'react';
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






function Home() {

const todos = [
{
_id: 1,
name: "Jeep",
bhp: 1234,
avatar_url: 
"https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_crop,f_auto,fl_lossy,x_633,y_45,w_702,h_395/w_860,h_484,c_fill/auto-client/c7f1e5de6b644419264c29564901ac27/jeep_adv_ne_wrangler_hpcanvas_1600x505_desktop.jpg",
}


]


  return (
    <>
<Typography variant="h3" component="h2">
  To dos
</Typography>;
<List>
        {todos.map(({ name, bhp, avatar_url, _id }, i) => (
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
            <IconButton aria-label="delete" onClick={() => deleteCar(_id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>

    </>
  )
}

export default Home;
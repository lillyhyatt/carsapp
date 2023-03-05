import React from 'react'
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';


function MobileNavigation({ mobileOpen = false, handleDrawerToggle = () => console.log('no handleDrawToggle function'), drawerWidth = 240 }) {
    return (
        <Box component="nav">
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ my: 2 }}>
                        ToDo App
                    </Typography>
                    <Divider />
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ textAlign: 'center' }} component={NavLink} to="/">
                                <ListItemText primary={"Home"} />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton sx={{ textAlign: 'center' }} component={NavLink} to="/add">
                                <ListItemText primary={"Add Todo"} />
                            </ListItemButton>
                        </ListItem>

                    </List>
                </Box>
            </Drawer>
        </Box>
    )
}

export default MobileNavigation


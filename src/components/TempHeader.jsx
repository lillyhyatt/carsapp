import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';



function DrawerAppBar(props) {

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: 'flex' }}>
<MobileNavigation handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen}  />
<DesktopNavigation handleDrawerToggle={handleDrawerToggle} />
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
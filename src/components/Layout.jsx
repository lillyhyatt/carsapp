import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import TempHeader from './TempHeader'
import Container from '@mui/material/Container';
import { Snackbar } from '@mui/material';
import { UIContext } from './contexts/UI.context';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';




function Layout() {
  const { isOpen: open,
    severity,
    onClose: handleClose,
    message,
  } = useContext(UIContext);

  const action = (props) => {
    return (
      <React.Fragment>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    )
  };


  return (
    <>
      <header>

        <TempHeader />
      </header>
      <main>
        <Container maxWidth="md">
          <Outlet />
        </Container>
      </main>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}

      >

        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
          {action}
        </Alert>

      </Snackbar>
    </>
  )
}

export default Layout
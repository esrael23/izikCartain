import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../../image/ikizLogo1.png'

const Appbarmobile = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <>
    <AppBar position="fixed" sx={{backgroundColor: 'white'}}>
  <Toolbar variant="dense" sx={{justifyContent: 'space-between'}}>
    
  <img src={Logo} alt="Logo" style={{ height: '50px', marginRight: '10px' }} />
    <IconButton edge="start" color="inherit" aria-label="menu"
    id="basic-button"
    aria-controls={open ? 'basic-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
    onClick={handleClick}>
      <MenuIcon color='primary' sx={{fontSize: '40px'}}/>
    </IconButton>
  </Toolbar>
</AppBar>

<Menu
        // id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
       

        sx={{marginRight: '20px'}}
      >
        <Stack spacing={2} sx={{width: '180px'}} >
          <Button onClick={handleClose} href="/">home</Button>
        <Button onClick={handleClose} href="/aboutus">About us</Button>
        <Button onClick={handleClose} href="/work">work</Button>
        <Button onClick={handleClose} href="/contact">contact</Button>
        </Stack>
        
      </Menu>
</>
  )
}

export default Appbarmobile
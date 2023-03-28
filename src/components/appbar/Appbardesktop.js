import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Logo from '../../image/ikizLogo1.png'
import { Button, Stack, Container } from '@mui/material'
const Appbardesktop = () => {
  return (
    <>
      <AppBar position="fixed" color="grey">
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <img src={Logo} alt="Logo" style={{ height: '50px', marginRight: '10px' }} />
            <Stack direction={'row'} spacing={2} >
              <Button
                href='/'
                sx={{ fontSize: '15px', fontWeight: 'none' }}
              >home</Button>
              <Button href='/aboutUs' sx={{ fontSize: '15px' }}>About us </Button>
              <Button href='/work' sx={{ fontSize: '15px' }}>work</Button>
              <Button href='/contact' sx={{ fontSize: '15px' }}>Contacts</Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default Appbardesktop
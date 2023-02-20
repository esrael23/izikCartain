
import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Logo from '../../image/izikpng.png'
import { Box, Button, Stack, Container, Avatar } from '@mui/material'

const Appbardesktop = () => {
  return (
    <>
    <AppBar position="fixed" color="grey">
      <Container maxWidth="xl">
        <Toolbar sx={{justifyContent: 'space-between'}}>
        {/* <Box sx={{
          backgroundImage: `url(${Logo})`,
          backgroundSize:'cover',
          backgroundPosition: 'center',
          height: 100
      }}>
          
        </Box> */}
        {/* <Avatar  sx={{backgroundImage: `url(${Logo})`,
          backgroundSize:'cover',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat',
            width: '350px',
             height: '200px'}}/> */}
             <Typography variant="h4" color="initial">izik</Typography>
        
        
        
        <Stack direction={'row'} spacing={2} >
          <Button
           href='/'
            sx={{fontSize:'20px', fontWeight: 'none'}}
             >home</Button>
          <Button href='/aboutUs' sx={{fontSize:'20px'}}>About us </Button>
          <Button href='/work' sx={{fontSize:'20px'}}>work</Button>
          <Button href='/contact' sx={{fontSize:'20px'}}>Contacts</Button>
        </Stack>
      </Toolbar>
      </Container>
      
    </AppBar>
    
  
      
    </>
  )
}

export default Appbardesktop
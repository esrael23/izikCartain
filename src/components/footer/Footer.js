import { Box, Button, Container, Grid, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {
  return (
    <div>
      <Box width={'100%'} height={'auto'} sx={{background:'#D29F22' ,marginTop:'100px', paddingY:'50px'}}  >
        <Container maxWidth="xl" sx={{display:'flex', alignItems:'center', justifyContent: 'center'}}>
        <Grid container py={1}>
            <Grid item xs="12" sm='12' md="4" >
              <Typography variant="h5" color="white" fontFamily={'poppins'}>About us</Typography>
              <Typography variant="subtitle1" color="white" fontWeight={'300'} fontFamily={'poppins'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
            </Grid>
          
            <Grid item xs="12" sm='12' md="4"  px={'50px'} py={"20px"}>
              <Typography variant="h5" color="white" fontFamily={'poppins'}>Phone number</Typography>
              {/* <Stack spacing={0}   >
          <Button  href="/" color={'info'}>home</Button>
        <Button href="/aboutus" color={'info'}>About us</Button>
        <Button  href="/work" color={'info'}>work</Button>
        <Button  href="/contact" color={'info'}>contact</Button>
        </Stack> */}
        <Typography variant="subtitle1" color={'wheat'} 
        >+251-1234-23-344</Typography> 
        <Typography variant="subtitle1" color={'wheat'} 
        >+251-1234-23-344</Typography>
              
            </Grid>
            <Grid item xs="12" sm='12' md="4"  >
              
              <Typography variant="h5" color="white" fontFamily={'poppins'}>Our Address</Typography>
              <Typography variant="subtitle1" color="white">chichinia on the way to name hotel mall 1st floor</Typography>
              <br/>
              <Typography variant="h5" color="white" fontFamily={'poppins'}>Write Us</Typography>
              <Typography variant="subtitle1" color="white">example@gmail.com</Typography>
              <Typography variant="subtitle1" color="white">example2@gmail.com</Typography>
              <br/>
              <Typography variant="h5" color="white" fontFamily={'poppins'}>Follow Us</Typography>
              
                <Stack direction={'row'} spacing={2}>
                  <IconButton href='https://mui.com/material-ui/material-icons/'>
                  <FacebookIcon color='info' sx={{fontSize:'40px'}}/>
                   </IconButton>
                   <IconButton>
                  <InstagramIcon color='info' sx={{fontSize:'40px'}}/>
                   </IconButton>
                   <IconButton>
                  <TelegramIcon color='info' sx={{fontSize:'40px'}}/>
                   </IconButton>
                  
                </Stack>
                
             
            </Grid>
            

          </Grid>

          
        </Container>
      </Box>
    </div>
  )
}

export default Footer
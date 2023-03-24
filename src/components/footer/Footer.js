import { Box, Button, Container, Grid, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import BG from "../../image/liquid-cheese.png"

const Footer = () => {
  return (
    <div>
      <Box width={'100%'} height={'auto'} sx={{
        background:'#D29F22' ,
        backgroundImage:  `url(${BG})`,
        marginTop:'100px',
         paddingY:'50px',
         color: 'black'
         }}>
        <Container maxWidth="xl" sx={{display:'flex', alignItems:'center', justifyContent: 'center'}}>
        <Grid container py={1}>
            <Grid item xs="12" sm='12' md="4" >
              <Typography variant="h6" color="black" fontFamily={'poppins'}>About us</Typography>
              <Typography variant="subtitle1" color="black" paddingRight={4} fontWeight={'250'} fontFamily={'poppins'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
            </Grid>
            <Grid item
             xs="12"
             sm='12'
             md="4" 
            //  px={'50px'}
                >
              <Typography variant="h6" color="black" fontFamily={'poppins'} >Phone Number</Typography>
        <Typography variant="subtitle1" color={'black'} 
        >0955337777</Typography> 
        <Typography variant="subtitle1" color={'black'} 
        >0911764944</Typography>
        <Typography variant="subtitle1" color={'black'} 
        >0923586960</Typography>
        <Typography variant="subtitle1" color={'black'} 
        >0920679023</Typography>
            </Grid>
            <Grid item xs="12" sm='12' md="4"  >
              
              <Typography variant="h6" color="black" fontFamily={'poppins'}>Our Address</Typography>
              <Typography variant="subtitle1" color="black" fontFamily={'poppins'}
              fontWeight={'250'}>chichinia on the way to name hotel mall 1st floor</Typography>
              <Typography variant="h6" color="black" fontFamily={'poppins'}>Write Us</Typography>
              <Typography variant="subtitle1" color="black">Ikizcurtain@gmail.com</Typography>
              <Typography variant="h6" color="black" fontFamily={'poppins'}>Follow Us</Typography>
              
                <Stack direction={'row'} spacing={2}>
                  <IconButton href='https://mui.com/material-ui/material-icons/'>
                  <FacebookIcon color='black' sx={{fontSize:'40px'}}/>
                   </IconButton>
                   <IconButton>
                  <InstagramIcon color='black' sx={{fontSize:'40px'}}/>
                   </IconButton>
                   <IconButton href='https://t.me/ikizcurtain'>
                  <TelegramIcon color='black' sx={{fontSize:'40px'}}/>
                   </IconButton>
                   <IconButton href='https://www.tiktok.com/@ikiz_curtain?_t=8auGvVIqJaX&_r=1'>
                   <img src="https://img.icons8.com/ios/50/000000/tiktok--v1.png"/>
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
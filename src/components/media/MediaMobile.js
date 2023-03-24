

import { Box, Container, IconButton, Stack, Typography } from '@mui/material'
import Mediaimg from '../../image/Untitled-26.jpg'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

const MediaMobile = () => {
  return (
    <div>
      <Box width={'100%'} height={"80vh"} sx={{backgroundImage: `url(${Mediaimg})`, backgroundPosition:'center', backgroundSize: 'cover',backgroundRepeat:'no-repeat', backgroundAttachment:'fixed', display: 'flex'}}>
        <Box  width={'100%'} height={"40vh"}>
        <Box  sx={{opacity:"0.5",
      background:'white' , paddingLeft: '40px', textAlign: 'center'  }} >

          <Typography variant="h4" color="black" sx={{marginTop: '230px', paddingLeft:'10px'}}>FOLLOW US </Typography>
          <Box sx={{display: 'flex', alignItems: 'center',}}>
            <Stack direction={'row'} gap={2} display="flex" justifyContent={"space-around"} >
              <IconButton aria-label="" color='black'sx={{bgcolor: 'black'}}  size="100px">
                
              <FacebookIcon sx={{fontSize:'50px'}}/>
              </IconButton>
              <IconButton aria-label="" color='black' size="100px">
              <InstagramIcon sx={{fontSize:'50px'}}/>
              </IconButton>
              <IconButton aria-label="" color='black' size="100px">
              <TelegramIcon sx={{fontSize:'50px'}}/>
              </IconButton>
              <IconButton href='https://www.tiktok.com/@ikiz_curtain?_t=8auGvVIqJaX&_r=1'>
                   <img style={{color: 'white', fontSize:'40px'}} src="https://img.icons8.com/ios/50/000000/tiktok--v1.png"/>
                   
                   </IconButton>
            </Stack>
          </Box>
        </Box>
        </Box>

      </Box>
    </div>
  )
}

export default MediaMobile
import { Box, Container, Stack, Typography, IconButton } from '@mui/material'
import Mediaimg from '../../image/Untitled-1.jpg'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

const MediaDesktop = () => {
  return (
    <div>
      <Box width={'100%'} height={"80vh"} sx={{backgroundImage: `url(${Mediaimg})`, backgroundPosition:'center', backgroundSize: 'cover',backgroundRepeat:'no-repeat', }}>
      <Box sx={{display: 'flex', justifyContent: 'center' }}>
          <Typography variant="h4" color="primary" paddingTop={'400px'} paddingLeft={'200px'}>FOLLOW US ON SOCIAL </Typography>
          <Box sx={{display: 'flex', alignItems: 'center',}}>
            <Stack direction={'row'} gap={2} >
              <IconButton aria-label="" color='primary' size="100px">
                
              <FacebookIcon sx={{fontSize:'40px'}}/>
              </IconButton>
              <IconButton aria-label="" color='primary' size="100px">
                
              <InstagramIcon sx={{fontSize:'40px'}}/>
              </IconButton>
              <IconButton aria-label="" color='primary' size="100px">
                
              <TelegramIcon sx={{fontSize:'40px'}}/>
              </IconButton>


            </Stack>
          </Box>
        </Box>

      </Box>
    </div>
  )
}

export default MediaDesktop


import { Box, Container, Typography } from '@mui/material'
import Mediaimg from '../../image/Untitled-26.jpg'
import React from 'react'

const MediaMobile = () => {
  return (
    <div>
      <Box width={'100%'} height={"80vh"} sx={{backgroundImage: `url(${Mediaimg})`, backgroundPosition:'center', backgroundSize: 'cover',backgroundRepeat:'no-repeat'}}>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <Typography variant="h4" color="primary">FOLLOW US </Typography>
        </Box>

      </Box>
    </div>
  )
}

export default MediaMobile
import { Box, Typography } from '@mui/material'
import React from 'react'
import Bgimage from '../../image/G-familyroom.jpg'

const ServHead = () => {
  return (
    <div>
      <Box height={"35vh"} width="100%" sx={{backgroundImage: `url(${Bgimage})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment:'fixed'}}>
        <Box  height={"35vh"} width="100%" sx={{background:'black', opacity:'0.3', display:'flex',
        justifyContent:'center', alignItems: 'center'}} >
          <Typography variant="h3" color={'white'} sx={{opacity:'1'}}>The beauty of your house Ikiz Curtain</Typography>
        </Box>
      </Box>
    </div>
  )
}
export default ServHead
import { Box, Typography } from '@mui/material'
import React from 'react'
import Bgimage from '../../image/hero.jpg'


const OurWorkheader = () => {
  return (
    <Box height={"50vh"} width="100%" sx={{backgroundImage: `url(${Bgimage})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment:'fixed'}}>
        <Box  height={"50vh"} width="100%" sx={{background:'black', opacity:'0.3', display:'flex',
        justifyContent:'center', alignItems: 'center'}} >
          <Typography variant="h2" color={'white'} sx={{opacity:'1'}}>Our Works</Typography>
        </Box>
      </Box>
  )
}

export default OurWorkheader
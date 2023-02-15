import { Box, Typography } from '@mui/material'
import React from 'react'
import Aboutdetail from '../../components/aboutusComponent/Aboutdetail'
import Mission from '../../components/aboutusComponent/mission'
import Successes from '../../components/aboutusComponent/successes'
import Bgimage from '../../image/hero.jpg'

const ServHead = () => {
  return (
    <div>
      <Box height={"50vh"} width="100%" sx={{backgroundImage: `url(${Bgimage})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment:'fixed'}}>
        <Box  height={"50vh"} width="100%" sx={{background:'black', opacity:'0.3', display:'flex',
        justifyContent:'center', alignItems: 'center'}} >
          <Typography variant="h2" color={'white'} sx={{opacity:'1'}}>About us</Typography>
        </Box>
      </Box>
      <Aboutdetail/>
      <Mission/>
      <Successes/>
    </div>
  )
}

export default ServHead
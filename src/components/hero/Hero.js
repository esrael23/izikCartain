import React from 'react'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import Heroimg from "../../image/hero.jpg"

const Hero = () => {
  return (
    <div>
      <Box sx={{height:'100vh', width: '100%', backgroundImage:  `url(${Heroimg})`,backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat', alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
        <Box sx={{display: 'flex',opacity:"0.5",
      
          background:'white',
           justifyContent: 'center'  }} width={"100%"}>
          <Typography
           variant="h1"
            color="primary"
          sx={{opacity:"1"}}
            py={6}
            fontWeight={'bold'} fontSize= "100px" >IKIZ</Typography>
          {/* <Typography variant="h4" color="initial">Cartain</Typography> */}

        </Box>
      </Box>
    </div>
  )
}

export default Hero
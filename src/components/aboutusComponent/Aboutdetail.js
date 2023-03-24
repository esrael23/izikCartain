
import React from 'react'
import Container from '@mui/material/Container'
import { Box, Typography, Button } from '@mui/material'
import { AboutData } from '../../Data/AboutData'

const Aboutdetail = () => {
  return (
    <>
    <Container maxWidth="md">
      <Box height={"50vh"} width={'100%'} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        {AboutData.map((data, index) => {
          return (
          <Box textAlign={'center'}>
          <Typography variant="body1" align='center' pb={4} fontWeight="300" sx={{fontSize:{xs:"15px", sm:'20px', md: '25px' }}} >{data.detail}</Typography>
          <Button variant="outlined" size='large' href='./contactus'>Contact us
            
          </Button>
        </Box>)
})}
        
      </Box>
      
    </Container>

    </>
  )
}

export default Aboutdetail
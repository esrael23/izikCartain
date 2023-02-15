import React from 'react'
import Container from '@mui/material/Container'
import { Box, Typography, Button } from '@mui/material'

const Aboutus = () => {
  return (
    <>
    <Container maxWidth="md">
      <Box height={"50vh"} width={'100%'} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Box textAlign={'center'}>
          <Typography variant="h6" align='center' pb={4} fontWeight="300" >Izik Curtain is a well established production workshop which has been operating in Ethiopia since 1998 EC. The company is engaged in the production of in house ,office and hotel curtains in accordance with the concept of interior design.</Typography>
          <Button variant="outlined" size='large' >Read more about us
            
          </Button>
        </Box>
      </Box>
      
    </Container>

    </>
  )
}

export default Aboutus
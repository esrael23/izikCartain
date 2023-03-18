import React from 'react'
import Container from '@mui/material/Container'
import { Box, Typography, Button, createTheme } from '@mui/material'
import { createMuiTheme,responsiveFontSizes,ThemeProvider } from '@mui/material'
let themes = createTheme();
themes = responsiveFontSizes(themes)
const Aboutus = () => {
  return (
    <>
    <ThemeProvider theme={themes}>

    <Container maxWidth="lg">
      <Box height={"50vh"} width={'100%'} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Box textAlign={'center'}>
          <Typography variant="h6" align='center' p={2} fontWeight="300" fontFamily={'poppins[300]'}  sx={{ fontSize: {xs: '15px', md: '20px', xl: '20px'} }} >Izik Curtain is a well established production workshop which has been operating in Ethiopia since 1998 EC. The company is engaged in the production of in house office and hotel curtains in accordance with the concept of interior design.</Typography>
          <Button variant="outlined" size='small'>
            Read more about us
          </Button>
          
        </Box>
      </Box>
      
    </Container>
    </ThemeProvider>

    </>
  )
}

export default Aboutus
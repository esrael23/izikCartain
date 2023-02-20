import React from 'react'
import Container from '@mui/material/Container'
import { Box, Grid, Paper, Typography } from '@mui/material'
import Proimg from '../../image/images (2).jpg'
import { ProductData } from '../../Data/ProductData'

const Products = () => {
  return (
    <>
    <Box>
    <Container maxWidth="xl">
      <Typography variant="h6" fontSize={'40px'} fontFamily={'poppins'} fontWeight={"bold"} color="primary"  pt={5} pb={5}>SAMPLE PRODUCTS</Typography>
          <Grid container spacing={4}>
            {ProductData.map((pro, index)=> {
        return(
        <Grid item xs="12" sm="6" md="6" lg="3" >
          <Paper elevation={0} spacing={2}>
        <Box sx={{backgroundImage: `url(${pro.image})`, height: '300px', backgroundRepeat: 'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}}></Box>
        <Typography variant="h6" fontSize={'20px'} color="primary" pt={2}>{pro.title}</Typography>
      </Paper>
        </Grid>
  )
      })}
      </Grid>
      
      
    
      
    </Container>
    </Box>
    </>
  )
}

export default Products
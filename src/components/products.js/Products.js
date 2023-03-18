import React from 'react'
import Container from '@mui/material/Container'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { ProductData } from '../../Data/ProductData'

const Products = () => {
  return (
    <>
      <Box alignContent={"center"}>
        <Container maxWidth="lg">
          <Typography variant="h6" sx={{ fontSize: { xs: '20px', md: '30px' } }} fontFamily={'poppins'} fontWeight={"bold"} color="primary" pt={5} pb={5}>SAMPLE PRODUCTS</Typography>
          <Grid container spacing={4}>
            {ProductData.map((pro, index) => {
              return (
                <Grid item xs="12" sm="6" md="6" lg="3" >
                  <Card sx={{ maxWidth: 345 }} elevation="0.2">
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image={pro.image}
                        alt="pruducts"
                      />
                      <CardContent >
                        <Typography gutterBottom variant="h5" component="div" paddint="10px">
                          {pro.title}
                        </Typography>
                        <CardActions>
                          <Button size="small" color="primary" href='/work'>
                            see more
                          </Button>
                        </CardActions>
                      </CardContent>
                    </CardActionArea>
                  </Card>
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
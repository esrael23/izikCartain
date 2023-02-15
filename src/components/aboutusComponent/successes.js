import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import { AboutData } from '../../Data/AboutData'
import { grey, red, yellow } from '@mui/material/colors'

const Successes = () => {
  const greys = grey[50];
  return (
    <>
    <Box width={'100%'} sx={{background:greys}} >

   
    <Container maxWidth="xl" py='1'>
      {AboutData.map((data, index) =>{
          return(

            
      <Grid container spacing={2}>

<Grid item xs="12" sm="12" md="6">
        <Box sx={{backgroundImage: `url(${data.missitionimage})`,backgroundPosition: 'center', backgroundSize: 'cover', width:'100%', height: '400px', py:'10px'}}>
          
        </Box>
      </Grid>
        
            <Grid item xs="12" sm="12" md="6">
          <Box  sx={{display: 'flex', justifyContent:'center', alignItems:'center'}}  height="400px" fullwidth>
            <Box justifyContent={'center'}>
              <Typography variant="h6" color={'primary'}>successes</Typography>
            <Typography variant="subtitle1" >
              {data.missionDetail}
              </Typography>
            </Box>
            
          </Box>
        </Grid>
       
        
        
        
      </Grid>  )
        })}
      
    </Container>
    </Box>
    </>
  )
}

export default Successes
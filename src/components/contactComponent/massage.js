import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Box, Button, Card, CardContent, TextField } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';

const Massage = () => {
  return (
    <>
    <Container maxWidth="xl" >
      <Grid container spacing={2} my={8}>
        <Grid item xs={12} md={6} >
          <Typography variant="h6" color="primary" >ADDRESS</Typography>
          <Box mt={5}>
            <Box sx={{display:'flex', paddingX:'20px', marginX: '20px', marginTop: '70px'}}>
            <LocationOnIcon color='primary' sx={{fontSize:'50px'}} />
            <Typography variant="subtitle1" pl={2}>	Addis Ababa , Ethiopia chichiniya Atlas Road
On the way to bla bla ena sefere ezaw new </Typography>
            </Box>
            <Box sx={{display:'flex', paddingX:'20px', marginX: '20px' , marginY: '20px'}}>
            <PhoneIphoneIcon color='primary' sx={{fontSize:'50px'}}/>
            <Box pl={2}>
            <Typography variant="subtitle1" >	+251-12-123-456 </Typography>
            <Typography variant="subtitle1" >	+251-12-123-456 </Typography>
            </Box>
            </Box>
            <Box sx={{display:'flex', paddingX:'20px', marginX: '20px', marginY: '20px'}}>


            <EmailIcon color='primary' sx={{fontSize:'50px'}}/>
            <Box pl={2}>
            <Typography variant="subtitle1" >	
            eg@mail.com</Typography>
            <Typography variant="subtitle1" >	
            eg@mail.com</Typography>
            </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
        <Card sx={{paddingY:3}} elevation={0}>
            <CardContent>
              <form>
              <Grid container rowSpacing={4} columnSpacing={2}>
                <Grid item xs={6} sm={6}>
                  <TextField variant='outlined' placeholder='enter first name!' label="First name" fullWidth required/>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <TextField variant='outlined' placeholder='enter last name!' label="Last name" fullWidth />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField type={'email'} variant='outlined' placeholder='enter last name!' label="Last name" fullWidth required/>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField multiline rows={4} variant='outlined' placeholder='enter massage name!' label="Massage" fullWidth required/>
                </Grid>
                <Grid item xs={12}>
                  <Button type='submit' variant='contained' color='primary' fullWidth>Submit</Button>

                </Grid>

              </Grid>
              </form>

            </CardContent>
          </Card>
        </Grid>
        
      </Grid>
      
    </Container>
    </>
  )
}

export default Massage
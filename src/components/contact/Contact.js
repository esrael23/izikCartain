import React, { useRef } from 'react'
import Container from '@mui/material/Container'
import { Button,Box, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_brttqyt', 'template_imqz0kf', form.current, 'sskl72LnYjI6BWKVG')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
   
    <Container maxWidth="xl" mx={4}  >
      <Box >
        <Box sx={{display:'flex',
       justifyContent: 'center'}}>
          <Typography variant="h4" color="primary" sx={{
       justifyContent: 'center'}} fontFamily={'poppins'} mt={4}>Get in touch</Typography>
      
        </Box>
        <Box sx={{display:'flex',
       justifyContent: 'center', }} mb={4}>
         
      <Typography variant="subtitle1" color={'info'} fontFamily={'poppins'} align={'center'}>add name and email below along with what you are looking for<br/> in the massage box. or you can call us at 12345678</Typography>
        </Box>

      
      <Grid container spacing={4}>
  <Grid item xs={12} lg={6}>
    
       

        <Card sx={{paddingY:3}} elevation={0}>
            <CardContent>
              <form ref={form} onSubmit={sendEmail}>
              <Grid container rowSpacing={4} columnSpacing={2}>
                <Grid item xs={6} sm={6}>
                  <TextField variant='outlined' placeholder='enter first name!' label="First name" fullWidth required name='user_name'/>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <TextField variant='outlined' placeholder='enter last name!' label="Last name" fullWidth name='user_lastName'/>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField type={'email'} variant='outlined' placeholder='enter last name!' label="Last name" fullWidth required name='user_email'/>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField multiline rows={4} variant='outlined' placeholder='enter massage name!' label="Message" fullWidth required name='message'/>
                </Grid>
                <Grid item xs={12}>
                  <Button type='submit' variant='contained' color='primary' fullWidth >Send</Button>

                </Grid>

              </Grid>
              </form>

            </CardContent>
          </Card>

        </Grid>
        <Grid item xs={12} lg={6} >
       {/* <div> */}
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3378793195666!2d38.66375611432647!3d9.03291049141593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8765802bd65f%3A0xe0dcc551554e8f40!2zU2hha2EgTWFsbCB8IEFzaGV3YSBNZWRhIHwg4Yi74YmDIOGInuGIjSB8IOGKoOGIuOGLiyDhiJzhi7M!5e0!3m2!1sam!2set!4v1675943325096!5m2!1sam!2set" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    {/* </div> */}

        </Grid>
      </Grid>
      </Box>
      
     </Container>
    
  )
}

export default Contact
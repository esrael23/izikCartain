import { Card, Typography, TextField, Button, Box } from '@mui/material'
import React from 'react'

const LoginPage = () => {
  return (
    <Box bgcolor={'grey'} height={'100vh'} width={'100%'} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Card sx={{width: '400px', height: '500px', padding: '30px'}} >
        <Typography variant='h4' align='center' p={4}>IKIZ ADMIN</Typography>
        <TextField
        sx={{marginTop: '50px'}}
        align='center'
        margin='30px'
        fullWidth
          // id=""
          label="e-mail"
          // value={}
          // onChange={}
        />
        <TextField
        sx={{alignContent: 'center' , marginTop: '50px'}} fullWidth
         label="Password"
          // onChange={}
          />
      <Button variant="contained" color="primary" fullWidth align='center' sx={{marginTop: '70px'}}>login
            
          </Button>
      </Card>
    
    </Box>
  )
}

export default LoginPage
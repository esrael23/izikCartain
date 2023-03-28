

import React from 'react'
// import './App.css';
import { Box, Button, Input, LinearProgress, Typography,Stack, Container, Card, CardHeader, TextField, ImageList, ImageListItem, Grid, CardActionArea, CardMedia, CardActions, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Alert, Snackbar } from '@mui/material';
import { useEffect, useState } from 'react';
// import React from 'react';
import { deleteObject, getDownloadURL, listAll, ref, uploadBytesResumable } from 'firebase/storage';
// import { storage } from '../firebase/Firebase';
import { storage } from '../firebase-config/firebase';
import { uuidv4 } from '@firebase/util';
import ConfirmationDialog from './ConfirmationDialog';



const UpLoadimage = () => {


    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [imageList, setImageList] = useState([]);
    const imagelistRef = ref(storage, 'images/');
    const [imageTobeDelete, setImageTobeDelete] = useState("");
  
// dialog 

  const [openAl, setOpenAl] = React.useState(false);
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = (url) => {
    setImageTobeDelete(url);
    setOpen(true);
  };

  // const handleClose = () => {
  //   setOpen(false);
  // };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);

    setOpenAl(false);
  };

  const deleteHandler = () => {
    const imageRef = ref(storage, imageTobeDelete)    
    deleteObject(imageRef).then((res) =>{
      setImageList(imageList.filter((img) => img.url !== imageTobeDelete))//
      setOpen(false);
      setOpenAl(true);
      setImageTobeDelete("")
    })

  }

  const getData = () => {
    listAll(imagelistRef).then((res) => {
      res.items.map((item) =>{
        getDownloadURL(item).then((url) =>{
          setImageList((prev) => [...prev, {url: url, ref: item}])
        })
      })
    }
    )
  } 


  // const uploadfile = () => {
  //   if(image == null) return;

  //   const imageRef = ref(storage, `images/${image.name + uuidv4()}`)
  //   const upLoadFile = uploadBytesResumable(imageRef, image)

  //   upLoadFile.on("state_changed", (snapshot) =>{
  //     const progress = Math.round(snapshot.bytesTransferred/snapshot.
  //     totalBytes * 200);
  //     setProgress(progress)
  //   },(err) =>{
  //     // add some error logs here
  //   }, async () => {
  //     setProgress(0);
  //     setImageList([])
  //     getData()
  //     setOpenAl(true);
  //   });
  //   setImage(null)
  // }


  const uploadfile = () => {
    if(image == null) {
      console.log("No file selected.");
      alert("no file selected");
      // or display an error message to the user
    } else {
      const imageRef = ref(storage, `images/${image.name + uuidv4()}`)
      const upLoadFile = uploadBytesResumable(imageRef, image)
  
      upLoadFile.on("state_changed", (snapshot) =>{
        const progress = Math.round(snapshot.bytesTransferred/snapshot.
        totalBytes * 200);
        setProgress(progress)
      },(err) =>{
        // add some error logs here
      }, async () => {
        setProgress(0);
        setImageList([])
        getData()
        setOpenAl(true);
        setImage(null);
        // fileInputRef.current.click();
      });
    }
  }
  
  useEffect(() => {
    getData();
  }, [])



  return (
    <div>
      <Container>
      <Typography variant="h6" color="primary" justifyContent={'center'} marginY={10}>admin gallery page</Typography>
      <Box marginBottom={10}>
        <TextField
         type='file'
         accept="image/png, image/jpeg, image/gif"
           size='small' onChange={(e) =>{setImage(e.target.files[0])}} ></TextField>
        <Button onClick={uploadfile}>UpLoad</Button>
        <Stack spacing={2} sx={{ flex: 1 }}>
          {
            progress !== 0 ?  (
              
              <LinearProgress determinate value={50} sx={{width: `${progress}%`}} />
            ) : null
          }

        </Stack>
       
      </Box>
      
      <Snackbar open={openAl} autoHideDuration={6000} onClose={handleClose}>
      <Alert severity="success">This is a success alert — check it out!</Alert>
      </Snackbar>
      <Container>
  
  <Grid container spacing={2} columnSpacing={2}>
    {imageList && imageList.map((fileobj, index) => (
      <Grid item xs={4} key={index}>
        <Card sx={{maxWidth: 345}} >
          <CardActionArea>
            <CardMedia
            height="200"
            component="img"
            image={`${fileobj.url}`}
            >
           
            </CardMedia>
            <CardActions>
              <Button variant='text'
              onClick={() => handleClickOpen(fileobj.url)}
               >
                delete
              </Button>


            </CardActions>
          </CardActionArea>

        </Card>

        <ConfirmationDialog
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={() => {
          deleteHandler();
          setImageTobeDelete(''); // Clear the imagePathToDelete
        }}
      />

  </Grid>


    ))}
  </Grid>

        
      </Container>

            </Container>



            {/* dialog */}


           
    </div>
  )
}

export default UpLoadimage

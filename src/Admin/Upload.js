import { Box, Container, Typography, TextField, Button, Grid,  Dialog } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Bgimage from '../image/IMG_20230307_124938_587.jpg'
import { storage } from '../firebase-config/firebase'
import { deleteObject, getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage'
import { uuidv4 } from '@firebase/util';
import CloseIcon from '@mui/icons-material/Close';


const imagesListRef = ref(storage, 'images/')

const Upload = () => {
  const [upload, setupload] = useState('');
  const [imagelist, setimagelist] = useState([]);
const [selectedPhoto, setSelectedPhoto] = useState([])

  
const [open, setopen] = useState(false);

const changecontent = (photo) => {
  // console.log("nammmmmmmmmmmmmmmmeL ", photo)
  setopen(true);
  setSelectedPhoto([photo])
  //  19:39
};




const handleClose = () => {
  setopen(false);
};

  const uploadimage = () => {
    if (upload == null) return;
    const imageRef = ref(storage, `images/${upload.name + uuidv4()}`);
    uploadBytes(imageRef, upload).then(
      alert("image uploaded")
    )

  }

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      console.log("ddddddddddd", response);
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setimagelist((prev) =>[...prev, url])
        })
      })
    })

  },[])


  const deleteImage = async (img, url) => {
    // deleteObject(ref).then((res) =>{
    //   setimagelist(imagelist.filter((img) => img.url !== url))
    //   // setOpen(false);
    // // setOpenAl(true);  

    //   // alert('seccessfully deleted')
    // })

  }


  return (
    <div>
      <Box height={"50vh"} width="100%" sx={{backgroundImage: `url(${Bgimage})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment:'fixed'}}>
        <Box  height={"50vh"} width="100%" sx={{background:'black', opacity:'0.3', display:'flex',
        justifyContent:'center', alignItems: 'center'}} >
          <Typography variant="h2" color={'white'} sx={{opacity:'1'}}>admin page</Typography>
        </Box>
        </Box>

        <Container sx={{display: 'flex', justifyContent: 'center', paddingTop: '50px'}} >
          <TextField
            // id=""
            // label=""
            // value={upload}
            onChange={(e) =>{setupload(e.target.files[0])}}
            size={'small'}
            color="primary"
            type={'file'}
            sx={{paddingRight: '20px'}}
          />
          <Button variant="contained" color="primary" onClick={uploadimage}>Upload image
          </Button>

        </Container>
        {/* <Container>
          <Grid container spacing={2} rowSpacing={2}>
            {imagelist.map((url) => {
              return(

                <Grid item xs={6} md={4} >
            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={url}
          alt="green iguana"
          />
        
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          delete
        </Button>
      </CardActions>
    </Card>

            </Grid>

)
})}
          </Grid>

        </Container>
 */}


        <Container maxWidth="lg" sx={{marginTop: '150px' }}>

<Grid container spacing={1}>
  {imagelist.map((photo) =>{
    return(
      <Grid item xs={6} sm={6} md={4} lg={3}>
              <Box
               onClick={() => changecontent(photo)} 
               sx={{backgroundImage:`url(${photo})`,backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat', width:"100%", height:{xs :'200px', sm: '300px'} }}></Box>
               <Button variant="text" color="primary" onClick={
                () => deleteImage(photo)}>
                 delete
               </Button>
              </Grid> 
    )
  })}
</Grid>
</Container> 
{selectedPhoto.map((pop) => {
  return(
    <Dialog
    //  aria-labelledby='dialog-title'
    aria-labelledby="draggable-dialog-title"
      open={open}
      
    onClose={handleClose}
    // sx={{width: '1200px' }}
    maxWidth={1500}
     >
     


    <Box sx={{backgroundImage: `url(${pop})`, backgroundPosition:'center', backgroundSize: 'cover', display:'flex', justifyContent: 'end',width: {xs: '350px', md: '600px'}, height: {xs:'350px',md:'500px'},  }}  >
      {/* <img src={pop.img} alt={pop.title} style={{width:'100%', height: '100%'}} /> */}
       <CloseIcon onClick={() => setopen(false)} color={'primary'} />
   
    </Box>


</Dialog>
    ) 
})}




    </div>
  )
}

export default Upload
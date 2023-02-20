import * as React  from 'react';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { Box,Dialog} from '@mui/material';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';


export default function Gallery() {
const [open, setopen] = useState(false);
const [selectedPhoto, setSelectedPhoto] = useState([])
const handleClose = () => {
  setopen(false);
};

const changecontent = (photo) => {
  // console.log("nammmmmmmmmmmmmmmmeL ", photo)
  setopen(true);
  setSelectedPhoto([photo])
  //  19:39
};

  return (
    <>
    <Container maxWidth="xl" sx={{marginTop: '150px' }}>

    <Grid container spacing={2}>
      {itemData.map((photo) =>{
        return(
          <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Box
                   onClick={() => changecontent(photo)} 
                   sx={{backgroundImage:`url(${photo.img})`,backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat', width:"100%", height:'300px' }}></Box>
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
         


        <Box sx={{backgroundImage: `url(${pop.img})`, backgroundPosition:'center', backgroundSize: 'cover', display:'flex', justifyContent: 'end',width: {xs: '350px', md: '600px'}, height: {xs:'350px',md:'500px'},  }}  >
          {/* <img src={pop.img} alt={pop.title} style={{width:'100%', height: '100%'}} /> */}
           <CloseIcon onClick={() => setopen(false)} color={'primary'} />
       
        </Box>
 
   
    </Dialog>
        ) 
    })}  
    </>
   
  );
}

const itemData = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    
    id: 5,
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    id: 7,
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    id: 8,
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    id: 9,
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    id: 10,
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    id: 11,
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    id: 12,
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];
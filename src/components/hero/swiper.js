// import React, { useEffect, useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./styles.css";
// import img1 from '../images/images (2).jpg'
// import img2 from '../images/8A4A0326-min-1-min.jpg'




// // import required modules
// import { Autoplay, Pagination, Navigation,EffectFade } from "swiper";
// import { Box, Container, Paper, styled, Typography, keyframes  } from "@mui/material";
// import { height} from "@mui/system";

// const TextShadowPopBr =  keyframes`
// 0% {
//   text-shadow: 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555;
//   -webkit-transform: translateX(0) translateY(0);
//           transform: translateX(0) translateY(0);
// }
// 100% {
//   text-shadow: 1px 1px #555555, 2px 2px #555555, 3px 3px #555555, 4px 4px #555555, 5px 5px #555555, 6px 6px #555555, 7px 7px #555555, 8px 8px #555555;
//   -webkit-transform: translateX(-8px) translateY(-8px);
//           transform: translateX(-8px) translateY(-8px);
// }


// `;

// const Title = styled(Typography) (() => ({
//   color:'#eee',
//   '&:hover': {
//     animation: `${TextShadowPopBr} 0.6s both`
    
//     // color: 'red'
//   }
// }));
// const rollinleft = keyframes`
// 0% {
//   -webkit-transform: translateZ(600px);
//           transform: translateZ(600px);
//   opacity: 0;
// }
// 100% {
//   -webkit-transform: translateZ(0);
//           transform: translateZ(0);
//   opacity: 1;
// }

// `;
// const Holder = styled(Box)(({roll}) => ({
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   animation: roll && `${rollinleft} 3s cubic-bezier(0.250, 0.460, 0.450, 0.940) 8 both`

// }))


// const Swiperjs =() => {
//   const [roll, setroll] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setroll(true);
//     },500)
//   })
//   return (
//     <Paper sx={{height: '100vh'}}  elevation="0">
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
       
//         // effect= {'fade'}
//         speed={5000}
//         loop
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true }
//         modules={[Autoplay, Pagination, Navigation,EffectFade]}
//         className="mySwiper"
//       >
        
//         <SwiperSlide>
//           <Box sx={{
//             backgroundImage: `url(${img1})`,
//             backgroundRepeat: 'no-repeat',
//             backgroundPosition: 'center',
//             backgroundSize:  "cover",
//             width: '100%',
//             height: "100%",
//             display: 'flex',
//             justifyContent: 'center'

//           }}>
//             <Holder roll={roll}>
//             <Title variant="h1"  >DREAM </Title>
//             </Holder>
//           </Box>
//           {/* <img src={img1} style={{}}/> */}
//         </SwiperSlide>
//         <SwiperSlide>
//         <Box sx={{
//             backgroundImage: `url(${img2})`,
//             backgroundRepeat: 'no-repeat',
//             backgroundPosition: 'center',
//             backgroundSize:  "cover",
//             width: '100%',
//             height: "100%",
//             display: 'flex',
//             justifyContent: 'center'

//           }}>
//             <Holder roll={roll}>
//             <Title variant="h1"  >DREAM </Title>
//             </Holder>
//           </Box>
//         </SwiperSlide>
//         <SwiperSlide>
//         <Box sx={{
//             backgroundImage: `url(${img1})`,
//             backgroundRepeat: 'no-repeat',
//             backgroundPosition: 'center',
//             backgroundSize:  "cover",
//             width: '100%',
//             height: "100%",
//             display: 'flex',
//             justifyContent: 'center'

//           }}>
//             <Holder roll={roll}>
//             <Title variant="h1"  >DREAM </Title>
//             </Holder>
//           </Box>
//         </SwiperSlide>
       
//       </Swiper>
//     </Paper>
//   );
// }
// export default Swiperjs;
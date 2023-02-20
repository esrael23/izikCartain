import { Box } from "@mui/material"
import Aboutus from "../../components/aboutus/Aboutus"
import Appbardesktop from "../../components/appbar/Appbardesktop"
import Appindex from "../../components/appbar/appindex"
import Contact from "../../components/contact/Contact"
import Footer from "../../components/footer/Footer"
import Hero from "../../components/hero/Hero"
import Hore from "../../components/hero/Hero"
import Products from "../../components/products.js/Products"
import ServHead from "../../components/servicesHead/ServHead"


const Home = () => {
  return (
    <>
   
   <Hero/>
   <Aboutus/>
   <ServHead/>
   <Products/>
   <Contact/>
   
    </>
  )
}

export default Home
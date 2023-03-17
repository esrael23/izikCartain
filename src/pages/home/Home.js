import Aboutus from "../../components/aboutus/Aboutus"
import Contact from "../../components/contact/Contact"
import Hero from "../../components/hero/Hero"
// import Swiper from "../../components/hero/swiper"
import Mediaindex from "../../components/media/mediaIndex"
import Products from "../../components/products.js/Products"
import ServHead from "../../components/servicesHead/ServHead"


const Home = () => {
  return (
    <>
   
   <Hero/>
   {/* <Swiper/> */}
   <Aboutus/>
   <ServHead/>
   <Products/>
   <Mediaindex/>
   <Contact/>
   
    </>
  )
}

export default Home
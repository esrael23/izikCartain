import "./index.css"
import { ThemeProvider } from '@mui/material';
import Home from './pages/home/Home';
import theme from './Theme';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from './pages/AboutUs/AboutUs';
import OurWorks from './pages/OurWorks/OurWorks';
import Contacts from './pages/contacts/Contacts';
import Appindex from './components/appbar/appindex';
import Footer from './components/footer/Footer';
import Upload from "./Admin/Upload";
import LoginPage from "./Admin/LoginPage";
// import UpLoadForm from "./firebase/UpLoadForm";

// let theme = createTheme();
// theme = responsiveFontSizes(theme);
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Appindex/>
      <Router>
        <Routes> 
          <Route path="/" element={<Home/>} />
          {/* <Route path="/" element={<LoginPage/>} /> */}
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/work" element={<OurWorks/>} />
          <Route path="/contact" element={<Contacts/>} />
          <Route path="/ikizadmin" element={<Upload/>} />

        </Routes>
      </Router>
      <Footer/>
       
      
    
    </ThemeProvider>
   
  );
}

export default App;

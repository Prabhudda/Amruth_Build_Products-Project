import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home_Page/Home';
import About from './Pages/About/About';
import Products from './Pages/Product/Products';
import Services from './Pages/Service_Page/Services';
import Contact from './Pages/Contact/Contact';
// import Team from './Pages/Team/Team';
import ScrollToTop from '../src/Components/ScrollToTop';
import Footer from '../src/Components/Footer/Footer';
import Whatsapp from './Components/Whatsapp/Whatsapp';
import Projects from './Pages/Projects_Page/Projects';
import 'aos/dist/aos.css'; // Import the AOS CSS
import AOS from 'aos'; // Import the AOS library

AOS.init(); // Initialize AOS
const MainContainer = styled.section``;

function App() {
  return (
    <MainContainer className=''>
      <Router>
        <Navbar />
        <Whatsapp />
        <ScrollToTop />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          {/*<Route path='/team' element={<Team />} /> */}
        </Routes>
        <Footer />
      </Router>
    </MainContainer>
  );
}

export default App;

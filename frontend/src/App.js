import styled from 'styled-components';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home_Page/Home';
import About from './Pages/About/About';
import Products from './Pages/Product/Products';
import Services from './Pages/Service_Page/Services';
import Contact from './Pages/Contact/Contact';
import ProjectDetails from './Pages/Projects_Page/ProjectDetails';
import ScrollToTop from '../src/Components/ScrollToTop';
import Footer from '../src/Components/Footer/Footer';
import Whatsapp from './Components/Whatsapp/Whatsapp';
import Projects from './Pages/Projects_Page/Projects';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Admin from './adminPage/Admin';
import ErrorPage from './Pages/Error_Page/ErrorPage';

AOS.init();
const MainContainer = styled.section``;

function App() {
  return (
    <MainContainer className=''>
      <Router>
          <div>
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
              <Route path='/project/:id' element={<ProjectDetails />} />
              <Route path='/admin' element={<Admin />} />
              <Route path='*' element={<ErrorPage />} />
            </Routes>
            <Footer />
          </div>
      </Router>
    </MainContainer>
  );
}

export default App;

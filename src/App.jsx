import { useState, useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/navbar'
import Footer from './component/footer'
import DetailSingle from './pages/sub-page/detail-single_room'
import DetailDoubleRoom from './pages/sub-page/detail-double'
import DetailFamilyRoom from './pages/sub-page/detail-family'
import DetailTwinRoom from './pages/sub-page/detail_twin'
import ScrollToTop from './pages/scrollToTop';
import Pages from './pages';
function App() {
   useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,     // animate on first scroll-in only
      mirror: true,  // don't reverse on scroll-up
    });
  }, []);
  return (  
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Pages />} />
          <Route path="/singleroom" element={<DetailSingle />} />
          <Route path="/doubleroom" element={<DetailDoubleRoom />} />
          <Route path="/twinroom" element={<DetailTwinRoom />} />
          <Route path="/familyroom" element={<DetailFamilyRoom />} />
        </Routes>
        <Footer />
      </Router>
  )
}

export default App

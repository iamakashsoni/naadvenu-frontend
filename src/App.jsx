import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Home from './Main/Home/Home'
import Gallery from './Main/Gallery/Gallery';
import AboutUs from './Main/Pages/AboutUs';
import Contact from './Main/Pages/Contact';
import FAQ from './Main/Pages/FAQ';
import BlogList from './Main/Blog/BlogList';
import BlogDetail from './Main/Blog/BlogDetail';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/blog' element={<BlogList />} />
        <Route path='/blog-detail' element={<BlogDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App

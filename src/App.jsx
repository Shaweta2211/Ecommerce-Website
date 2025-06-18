

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import { Pages } from './pages/Pages';
import ContactUs from './pages/ContactUs';
import { Blog } from './pages/Blog';
import AboutUs from './pages/AboutUs';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<div>404 Error - Page Not Found</div>} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;


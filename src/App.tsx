import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Layout from './components/layout/Layout';
import ContactPage from './pages/ContactPage';
import ProductsPage from './pages/ProductsPage';

function App() {
  useEffect(() => {
    document.title = "Rahman Agro";
  }, []);

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
         <Route path="contact" element={<ContactPage />} />
        <Route path="products" element={<ProductsPage />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
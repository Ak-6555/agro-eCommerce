import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Layout from './components/layout/Layout';
import ContactPage from './pages/ContactPage';
import ProductsPage from './pages/ProductsPage';
import { AuthProvider } from './components/context/AuthContext';
import LoginPage from './components/auth/Login';
import SignupPage from './components/auth/Signup';

function App() {
  useEffect(() => {
    document.title = "Rahman Agro";
  }, []);

  return (
    <BrowserRouter>
    <AuthProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="about" element={<AboutPage />} />
         <Route path="contact" element={<ContactPage />} />
        <Route path="products" element={<ProductsPage />} />
      </Route>
      </Routes>
    </AuthProvider>
     
    </BrowserRouter>
  );
}

export default App;
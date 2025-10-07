import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext/cart-context.exports';

// Layout Components
import Header from './components/layout/Header/header-component.exports';
import Footer from './components/layout/Footer/footer-component.exports';

// Page Components
import HomePage from './pages/HomePage/home-page.exports';
import ProductPage from './pages/ProductPage/product-page.exports';
import ContactPage from './pages/ContactPage/contact-page.exports';
import NotFoundPage from './pages/NotFoundPage/not-found-page.exports';

// Styles
import styles from './App.module.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className={styles.app}>
          <Header />
          <main className={styles.main}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/products/:id" element={<ProductPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
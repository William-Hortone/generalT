import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import { About, Customer, Home, Services } from './pages';
import {PageTransition} from './components';

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <PageTransition>
              <Home />
            </PageTransition>
          } />
          <Route path="/about" element={
            <PageTransition>
              <About />
            </PageTransition>
          } />
          <Route path="/services" element={
            <PageTransition>
              <Services />
            </PageTransition>
          } />
          <Route path="/customer" element={
            <PageTransition>
              <Customer />
            </PageTransition>
          } />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
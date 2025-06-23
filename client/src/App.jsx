// src/App.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header/Header';
import Prices from './pages/Prices/Prices';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Contacts from './pages/Contacts/Contacts';

function App() {
  const location = useLocation();

  const pageTransition = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
    transition: { duration: 0.4, ease: 'easeInOut' },
  };

  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                variants={pageTransition}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <About />
              </motion.div>
            }
          />
          <Route
            path="/portfolio"
            element={
              <motion.div
                variants={pageTransition}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Portfolio />
              </motion.div>
            }
          />
          <Route
            path="/prices"
            element={
              <motion.div
                variants={pageTransition}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Prices />
              </motion.div>
            }
          />
          <Route
            path="/contacts"
            element={
              <motion.div
                variants={pageTransition}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Contacts />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;

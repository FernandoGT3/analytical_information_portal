import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import MapPage from './components/MapPage';
import PrivateRoute from './components/PrivateRoute';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Rota de login livre, sem proteção */}
        <Route path="/login" element={<Login />} />
        
        {/* Rota para Home, protegida por PrivateRoute */}
        <Route
          path="/"
          element={
            // <PrivateRoute>
              <Home />
            // </PrivateRoute>
          }
        />

        {/* Rota para Mapa, também protegida */}
        <Route
          path="/map"
          element={
            <PrivateRoute>
              <MapPage />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Home from './pages/Home';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';
import BackOffice from './pages/BackOffice';
import Login from './pages/Login';

const theme = createTheme();

function PrivateRoute({ children }) {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/backoffice" 
          element={
            <PrivateRoute>
              <BackOffice />
            </PrivateRoute>
          } 
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
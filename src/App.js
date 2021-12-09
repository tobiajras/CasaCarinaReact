import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {
   BrowserRouter as Router,
   Routes,
   Route,
  } from 'react-router-dom';
import Inicio from './pages/Inicio/Inicio'
import Nosotros from './pages/Nosotros/Nosotros'
import Productos from './pages/Productos/Productos'
import Contacto from './pages/Contacto/Contacto'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='/nosotros'element={<Nosotros/>}></Route>
        <Route path='/productos'element={<Productos/>}></Route>
        <Route path='/contacto'element={<Contacto/>}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;

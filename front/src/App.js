import './styles.css';
import React from 'react';
import Header from './components/layout/Header';
import IngresarProducto from './components/IngresarProductos';
import Listaproadmin from './components/Listaproadmin';
import ModificarProducto from './components/ModificarProductos';
import Listaventaadmin from './components/Listaventaadmin';
import VistaClientes from './components/VistaCliente';
import DetallesdeProducto from './components/DetallesdeProducto';
import CarritoUsuario from './components/CarritoUsuario';
import Home from './components/Home';


//Router traido desde react-router-dom (no confundir con el de express)
import { BrowserRouter as Router,Route , Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
    <div className="App">
        <Header />
        <div className='container container-fluid'>
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Home" element={<Home />}/>
          <Route path="/IngresarProducto" element={<IngresarProducto />}/>
          <Route path="/listaproductoadmin" element={<Listaproadmin />}/>
          <Route path="/ModificarProducto/:id" element={<ModificarProducto />}/>
          <Route path="/Listaventaadmin" element={< Listaventaadmin/>}/>
          <Route path="/VistaClientes" element={<VistaClientes />}/>
          <Route path="/DetallesProducto/:id" element={<DetallesdeProducto />}/>
          <Route path="/carrito" element={<CarritoUsuario />}/>
          </Routes>
        </div>
      
    </div>
    </Router>
  );
}

export default App;

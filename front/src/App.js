import './styles.css';
import React from 'react';
import Header from './components/layout/Header';
/*import Detalleproduadmin from './components/Detalleproduadmin';
import Listaproadmin from './components/Listaproadmin';
import CarritoUsuario from './components/CarritoUsuario';
import Listaventaadmin from './components/Listaventaadmin';
import Detallesdecompra from './components/Detalles_de_compra';
import VistaClientes from './components/VistaCliente';*/

import IngresarProducto from './components/IngresarProductos';
//Router traido desde react-router-dom (no confundir con el de express)
import { BrowserRouter as Router,Route , Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
    <div className="App">
        <Header />
        <div className='container container-fluid'>
          <Routes>
        
          <Route path="/IngresarProducto" element={<IngresarProducto />}/>
          </Routes>
        </div>
      
    </div>
    </Router>
  );
}

export default App;

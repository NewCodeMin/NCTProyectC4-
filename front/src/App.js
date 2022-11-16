import './styles.css';
import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import IngresarProducto from './components/IngresarProductos';
import Listaproadmin from './components/Listaproadmin';
import ModificarProducto from './components/ModificarProductos';
import Listaventaadmin from './components/Listaventaadmin';
import VistaClientes from './components/VistaCliente';
import DetallesdeProducto from './components/DetallesdeProducto';
import CarritoUsuario from './components/CarritoUsuario';
import { Login } from './components/user/Login';
import Home from './components/Home';
import { loadUser } from './actions/userActions';
import store from "./store"
import { Register } from './components/user/Register';
import { Profile } from './components/user/Profile';


//Router traido desde react-router-dom (no confundir con el de express)
import { BrowserRouter as Router,Route , Routes } from 'react-router-dom';



function App() {
  useEffect(()=>{
    store.dispatch(loadUser())
   },[])
  return (
    <Router>
    <div className="App">
        <Header />
        <div className='container container-fluid'>
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Home" element={<Home />}/>
          <Route path="/Search/:keyword" element={<VistaClientes />}/>
          <Route path="/IngresarProducto" element={<IngresarProducto />}/>
          <Route path="/listaproductoadmin" element={<Listaproadmin />}/>
          <Route path="/ModificarProducto/:id" element={<ModificarProducto />}/>
          <Route path="/Listaventaadmin" element={< Listaventaadmin/>}/>
          <Route path="/VistaClientes" element={<VistaClientes />}/>
          <Route path="/DetallesProducto/:id" element={<DetallesdeProducto />}/>
          <Route path="/carrito" element={<CarritoUsuario />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element= {<Register />} />
          <Route path="/yo" element={<Profile />}/>
          
          
          </Routes>
        </div>
      
    </div>
    </Router>
  );
}

export default App;

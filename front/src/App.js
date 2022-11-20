import './styles.css';
import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
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
import ProtectedRoute from './routes/ProtectedRoute';
import { Shipping } from './components/Shipping';
import { ConfirmOrder } from './components/ConfirmOrder';
import { Payment } from './components/Payment';
import { Success } from './components/Success'


//Router traido desde react-router-dom (no confundir con el de express)
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ListOrder } from './components/order/ListOrder';
import { OrderDetails } from './components/order/OrderDetails';
import OrdersList from './components/order/OrderList.js';
import ProcessOrder from './components/order/ProccessOrder';




function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='container container-fluid'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Search/:keyword" element={<VistaClientes />} />
            <Route path="/VistaClientes" element={<VistaClientes />} />
            <Route path="/DetallesProducto/:id" element={<DetallesdeProducto />} />
            <Route path="/carrito" element={<CarritoUsuario />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/yo" element={<Profile />} />

            {/*Ruta protegida*/}
            <Route path="/IngresarProducto" element={<ProtectedRoute isAdmin={true}><IngresarProducto /></ProtectedRoute>} />
            <Route path="/listaproductoadmin" element={<ProtectedRoute isAdmin={true}><Listaproadmin /></ProtectedRoute>} />
            <Route path="/ModificarProducto/:id" element={<ProtectedRoute isAdmin={true}><ModificarProducto /></ProtectedRoute>} />
            <Route path="/Listaventaadmin" element={<ProtectedRoute isAdmin={true}>< Listaventaadmin /></ProtectedRoute>} />

            <Route path="/shipping" element={<ProtectedRoute><Shipping /></ProtectedRoute>} />

            <Route path="/order/confirm"
              element={<ProtectedRoute><ConfirmOrder /></ProtectedRoute>} />

            <Route path="/payment"
              element={<ProtectedRoute><Payment /></ProtectedRoute>} />

            <Route path="/success"
              element={<ProtectedRoute><Success /></ProtectedRoute>} />

            <Route path="/myOrders"
              element={<ProtectedRoute><ListOrder /></ProtectedRoute>} />

            <Route path="/order/:id"
              element={<ProtectedRoute><OrderDetails /></ProtectedRoute>} />

            <Route path="/orderList"
              element={<ProtectedRoute isAdmin={true}><OrdersList /></ProtectedRoute>} />

            <Route path="/admin/order/:id"
              element={<ProtectedRoute isAdmin={true}><ProcessOrder /></ProtectedRoute>} />
          </Routes>
        </div>
<Footer />
      </div>
    </Router>
  );
}

export default App;

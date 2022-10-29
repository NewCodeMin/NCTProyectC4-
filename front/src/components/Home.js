import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <Fragment>
            <div class="container-fluid px-0">
                <header>
                    <div class="shape"></div>

                    <div class="container">	<div class="row">
                        <div class="col-md-6 left-side">
                            <img src="https://i.imgur.com/jrRBTai.png" class="w-100" alt='imagen'></img>
                        </div>	<div class="col-md-6 right-side">
                            <h1>TIENDA DE ZAPATOS</h1>
                            <p>DEPORTIVOS</p>
                            <div class="text-center">
                            <Link to="/VistaClientes">
                                <button class="btn order-button" >Vista para clientes</button>
                            </Link>
                            <Link to="/Listaventaadmin">
                                <button class="btn order-button" >Lista ventas para admin</button>
                            </Link>
                            <Link to="/listaproductoadmin">
                                <button class="btn order-button" >Lista productos para admin</button>
                            </Link>
                            <Link to="/IngresarProducto">
                                <button class="btn order-button" >Ingresar producto</button>
                            </Link>
                            <Link to="/ModificarProducto/635b90b93ee13359fb6c5a78">
                                <button class="btn order-button" >Modificar producto</button>
                            </Link>
                            <Link to="/DetallesProducto/635b90b93ee13359fb6c5a78">
                                <button class="btn order-button" >Detalles producto</button>
                            </Link>
                            <Link to="/carrito">
                                <button class="btn order-button" >Carrito</button>
                            </Link>
                            </div>
                        </div>
                    </div>
                    </div>
                </header>
            </div>
        </Fragment>
    )
}

export default Home
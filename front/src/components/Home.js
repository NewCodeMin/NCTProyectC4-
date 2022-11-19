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
                                <button class="btn order-button" >Ver productos en venta</button>
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
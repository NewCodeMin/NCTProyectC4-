import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../actions/cartActions';
import { Link } from 'react-router-dom'
import MetaData from './layout/MetaData'

const CarritoUsuario = () => {
    const dispatch = useDispatch();
    const { cartItems } = useSelector(state => state.cart)

    const increaseQty = (id, quantity, inventario) => {
        const newQty = quantity + 1;
        if (newQty > inventario) return;
        dispatch(addItemToCart(id, newQty))
    }
    const decreaseQty = (id, quantity) => {
        const newQty = quantity - 1;
        if (newQty <= 0) return;
        dispatch(addItemToCart(id, newQty))
    }
    const removeCartItemHandler = (id) => {
        dispatch(removeItemFromCart(id))
    }

    return (
        <Fragment>
            <MetaData title={'Mi carrito'} />


            {cartItems.length === 0 ? <h2 className="mt-5">Su carrito esta vacio</h2> : (
                <Fragment>
                    <section id="productos" class='container mt-5'>
                        <div class='row'>
                            <div class="card">
                                <div class="row">
                                    <div class="col-md-8 cart">
                                        <div class="title">
                                            <div class="row">
                                                <div class="col"><h4><b>Carrito de compras</b> </h4></div>

                                            </div>
                                        </div>
                                        {cartItems && cartItems.map(item => (
                                            <div class="row border-top border-bottom">
                                                <div class="row main align-items-center" key={item.nombre}>
                                                    <div class="col-2"><img class="img-fluid" src={item.imagen} alt={item.nombre} /></div>
                                                    <div class="col">
                                                        <div class="row">
                                                            <Link to={`/DetallesProducto/${item.product}`}>{item.nombre}</Link>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <span className="btn btn-danger minus" onClick={() => decreaseQty(item.product, item.quantity)}>-</span>
                                                        <a class="border" href=' '>{item.quantity}</a>
                                                        <span className="btn btn-primary plus" onClick={() => increaseQty(item.product, item.quantity, item.inventario)}>+</span>
                                                    </div>
                                                    <div class="col">&#36; {item.precio} 
                                                    <span class="btn btn-close"  onClick={() => removeCartItemHandler(item.product)}></span></div>
                                                </div>
                                            </div>
                                            
                                        ))}
                                         <div class="back-to-shop"><Link to={`/VistaClientes`}>&larr;</Link><span class="text-muted">Volver a la tienda</span></div>
                                    </div>
                                    <div class="col-md-4 summary">
                                        <div><h5><b>Resumen</b></h5></div>

                                        <div class="row">
                                            <div class="col" >Articulos {cartItems.reduce((acc, item) => (acc + Number(item.quantity)), 0)}</div>
                                            <div class="col text-right">&#36; {cartItems.reduce((acc, item) => acc + (item.quantity * item.precio), 0).toFixed(0)}</div>
                                        </div>
                                        <form>
                                            <p>ENVÍO</p>
                                            <select><option class="text-muted">Entrega estandar- &#36;12000</option></select>
                                            <p>Dar codigo</p>
                                            <input id="code" placeholder="Ingresar codigo" />
                                        </form>
                                        <div class="row"  >
                                            <div class="col">PRECIO TOTAL
                                            </div>
                                            <div class="col text-right">&#36; {cartItems.reduce((acc, item) => 12000+ acc + (item.quantity * item.precio), 0).toFixed(0)}</div>
                                        </div>
                                        <button class="btn1">Confirmar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Fragment>
            )}
        </Fragment>
    )
}

export default CarritoUsuario
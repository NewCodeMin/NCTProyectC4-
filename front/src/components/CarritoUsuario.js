import React, { Fragment } from 'react'

const CarritoUsuario = () => {
    return (
        <Fragment>
                <section id="productos" class='container mt-5'>
            <div class='row'>
                <div class="card">
                    <div class="row">
                        <div class="col-md-8 cart">
                            <div class="title">
                                <div class="row">
                                    <div class="col"><h4><b>Carrito de compras</b></h4></div>

                                </div>
                            </div>
                            <div class="row border-top border-bottom">
                                <div class="row main align-items-center">
                                    <div class="col-2"><img class="img-fluid" src="https://bosico.vteximg.com.br/arquivos/ids/1710772-1500-1500/Calzado-ZMD8CF-CAFE_1.jpg?v=637804258723700000" alt="Generic placeholder "/></div>
                                    <div class="col">
                                        <div class="row">Zapatos casuales para celtas </div>
                                    </div>
                                    <div class="col">
                                        <a href=" ">-</a><a href=" " class="border">1</a><a href=" ">+</a>
                                    </div>
                                    <div class="col">&#36; 44.00 <span class="close">&#10005;</span></div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="row main align-items-center">
                                    <div class="col-2"><img class="img-fluid" src="https://bosico.vteximg.com.br/arquivos/ids/1710772-1500-1500/Calzado-ZMD8CF-CAFE_1.jpg?v=637804258723700000" alt="Generic placeholder " /></div>
                                    <div class="col">
                                        <div class="row">Zapatos casuales para celtas </div>
                                    </div>
                                    <div class="col">
                                        <a href=" ">-</a><a href=" " class="border">1</a><a href=" ">+</a>
                                    </div>
                                    <div class="col">&#36; 44.00 <span class="close">&#10005;</span></div>
                                </div>
                            </div>
                            <div class="row border-top border-bottom">
                                <div class="row main align-items-center">
                                    <div class="col-2"><img class="img-fluid" src="https://bosico.vteximg.com.br/arquivos/ids/1710772-1500-1500/Calzado-ZMD8CF-CAFE_1.jpg?v=637804258723700000"alt="Generic placeholder " / ></div>
                                    <div class="col">
                                        <div class="row">Zapatos casuales para celtas </div>
                                    </div>
                                    <div class="col">
                                        <a href=" ">-</a><a href=" " class="border">1</a><a href=" ">+</a>
                                    </div>
                                    <div class="col">&#36; 44.00 <span class="close">&#10005;</span></div>
                                </div>
                            </div>
                            <div class="back-to-shop"><a href=" ">&larr;</a><span class="text-muted">Volver a la tienda</span></div>
                        </div>
                        <div class="col-md-4 summary">
                            <div><h5><b>Resumen</b></h5></div>

                            <div class="row">
                                <div class="col" >Articulos 3</div>
                                <div class="col text-right">&#36; 132.00</div>
                            </div>
                            <form>
                                <p>ENVÍO</p>
                                <select><option class="text-muted">Entrega estandar- &#36;5.00</option></select>
                                <p>Dar codigo</p>
                                <input id="code" placeholder="Ingresar codigo" />
                            </form>
                            <div class="row"  >
                            <div class="col">PRECIO TOTAL
                            </div>
                            <div class="col text-right">&#36; 137.00</div>
                        </div>
                        <button class="btn1">Verificar</button>
                    </div>
                </div>
            </div>
            </div>
        </section>  
        </Fragment>
    )
}

export default  CarritoUsuario
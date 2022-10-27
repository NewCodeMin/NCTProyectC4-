import React, { Fragment, useEffect } from 'react'
import MetaData from './layout/MetaData'
import { useDispatch } from 'react-redux'
import { getProducts } from '../actions/productActions'

export const VistaCliente = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])
  return (
    <Fragment>
      <MetaData title="Ejemplo clase "></MetaData>
      <h1 id="encabezado_productos">Lista de productos cliente </h1>
      <section id="productos" class='container mt-5'>
        <div class='row'>

          <div class='col-sm-12 col-md-6 col-lg-3 my-3'>
            <div class='card1 p-3 rounded'>
              <img class='card-img-top mx-auto'
                src='https://bosico.vteximg.com.br/arquivos/ids/1710772-1500-1500/Calzado-ZMD8CF-CAFE_1.jpg?v=637804258723700000'
                alt="Nutra gold"></img>
              <div class='card-body d-flex flex-column'>
                <h5 id="titulo_producto"><a href='http://localhost:3000'>ZAPATOS CASUALES PARA HOMBRE CELTAS</a></h5>
                <div class='rating mt-auto'>
                  <div class='rating-outer'>
                    <div class='rating-inner'></div>
                  </div>
                  <span id="Stock_Und">Stock 30 Und</span>
                </div>
                <p class='card-text'>$72.000</p><a href='http://localhost:3000' id="view_btn" class='btn btn-block'>
                  Ver detalle
                </a>
              </div>
            </div>
          </div>
          <div class='col-sm-12 col-md-6 col-lg-3 my-3'>
            <div class='card1 p-3 rounded'>
              <img class='card-img-top mx-auto'
                src='https://bosico.vteximg.com.br/arquivos/ids/1710772-1500-1500/Calzado-ZMD8CF-CAFE_1.jpg?v=637804258723700000'
                alt="Nutra gold"></img>
              <div class='card-body d-flex flex-column'>
                <h5 id="titulo_producto"><a href='http://localhost:3000'>ZAPATOS CASUALES PARA HOMBRE CELTAS</a></h5>
                <div class='rating mt-auto'>
                  <div class='rating-outer'>
                    <div class='rating-inner'></div>
                  </div>
                  <span id="Stock_Und">Stock 30 Und</span>
                </div>
                <p class='card-text'>$72.000</p><a href='http://localhost:3000' id="view_btn" class='btn btn-block'>
                  Ver detalle
                </a>
              </div>
            </div>
          </div>
          <div class='col-sm-12 col-md-6 col-lg-3 my-3'>
            <div class='card1 p-3 rounded'>
              <img class='card-img-top mx-auto'
                src='https://bosico.vteximg.com.br/arquivos/ids/1710772-1500-1500/Calzado-ZMD8CF-CAFE_1.jpg?v=637804258723700000'
                alt="Nutra gold"></img>
              <div class='card-body d-flex flex-column'>
                <h5 id="titulo_producto"><a href='http://localhost:3000'>ZAPATOS CASUALES PARA HOMBRE CELTAS</a></h5>
                <div class='rating mt-auto'>
                  <div class='rating-outer'>
                    <div class='rating-inner'></div>
                  </div>
                  <span id="Stock_Und">Stock 30 Und</span>
                </div>
                <p class='card-text'>$72.000</p><a href='http://localhost:3000' id="view_btn" class='btn btn-block'>
                  Ver detalle
                </a>
              </div>
            </div>
          </div>
          <div class='col-sm-12 col-md-6 col-lg-3 my-3'>
            <div class='card1 p-3 rounded'>
              <img class='card-img-top mx-auto'
                src='https://bosico.vteximg.com.br/arquivos/ids/1710772-1500-1500/Calzado-ZMD8CF-CAFE_1.jpg?v=637804258723700000'
                alt="Nutra gold"></img>
              <div class='card-body d-flex flex-column'>
                <h5 id="titulo_producto"><a href='http://localhost:3000'>ZAPATOS CASUALES PARA HOMBRE CELTAS</a></h5>
                <div class='rating mt-auto'>
                  <div class='rating-outer'>
                    <div class='rating-inner'></div>
                  </div>
                  <span id="Stock_Und">Stock 30 Und</span>
                </div>
                <p class='card-text'>$72.000</p><a href='http://localhost:3000' id="view_btn" class='btn btn-block'>
                  Ver detalle
                </a>
              </div>
            </div>
          </div>
          <div class='col-sm-12 col-md-6 col-lg-3 my-3'>
            <div class='card1 p-3 rounded'>
              <img class='card-img-top mx-auto'
                src='https://bosico.vteximg.com.br/arquivos/ids/1710772-1500-1500/Calzado-ZMD8CF-CAFE_1.jpg?v=637804258723700000'
                alt="Nutra gold"></img>
              <div class='card-body d-flex flex-column'>
                <h5 id="titulo_producto"><a href='http://localhost:3000'>ZAPATOS CASUALES PARA HOMBRE CELTAS</a></h5>
                <div class='rating mt-auto'>
                  <div class='rating-outer'>
                    <div class='rating-inner'></div>
                  </div>
                  <span id="Stock_Und">Stock 30 Und</span>
                </div>
                <p class='card-text'>$72.000</p><a href='http://localhost:3000' id="view_btn" class='btn btn-block'>
                  Ver detalle
                </a>
              </div>
            </div>
          </div>
          <div class='col-sm-12 col-md-6 col-lg-3 my-3'>
            <div class='card1 p-3 rounded'>
              <img class='card-img-top mx-auto'
                src='https://bosico.vteximg.com.br/arquivos/ids/1710772-1500-1500/Calzado-ZMD8CF-CAFE_1.jpg?v=637804258723700000'
                alt="Nutra gold"></img>
              <div class='card-body d-flex flex-column'>
                <h5 id="titulo_producto"><a href='http://localhost:3000'>ZAPATOS CASUALES PARA HOMBRE CELTAS</a></h5>
                <div class='rating mt-auto'>
                  <div class='rating-outer'>
                    <div class='rating-inner'></div>
                  </div>
                  <span id="Stock_Und">Stock 30 Und</span>
                </div>
                <p class='card-text'>$72.000</p><a href='http://localhost:3000' id="view_btn" class='btn btn-block'>
                  Ver detalle
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


    </Fragment>
  )
}

export default VistaCliente
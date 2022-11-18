import React, { Fragment, useEffect, useState } from 'react'
import MetaData from './layout/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions'
import { useAlert } from 'react-alert'
import Pagination from 'react-js-pagination'
import {  useParams, Link } from 'react-router-dom'

export const Listaproadmin = () => {
  const params = useParams();
    const keyword = params.keyword;
    const [currentPage, setCurrentPage] = useState(1)
    const { loading, products, error, resPerPage, productsCount } = useSelector(state => state.products)
    const alert = useAlert();

  const dispatch = useDispatch();
  useEffect(() => {
      if (error) {
          return alert.error(error)
      }

      dispatch(getProducts(currentPage, keyword));
  }, [dispatch, alert, error, currentPage, keyword])

  function setCurrentPageNo(pageNumber) {
      setCurrentPage(pageNumber)
  }

  return (
    <Fragment>
      {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (
        <Fragment>
          <MetaData title="Tienda tenis "></MetaData>
          <h1 id="encabezado_productos">Lista de productos administrador </h1>
          <section id="productos" class='container mt-5'>
            <div class='col-sm-12 col-md-6 col-lg-3 my-3'>
            <Link to={`/IngresarProducto`} class='btn btn-success' type='submit'>
                        Ingresar producto
                        </Link>
            </div>
          
            <div class='row'>
              {products && products.map(producto => (
                <div key={producto._id} class='col-sm-12 col-md-6 col-lg-3 my-3'>
                  <div class='card1 p-3 rounded'>
                    <img class='card-img-top mx-auto'
                      src={producto.imagen[0].url}
                      alt={producto.imagen[0].public_id}></img>
                    <div class='card-body d-flex flex-column'>
                      <h5 id="titulo_producto"><Link to={`/ModificarProducto/${producto._id}`}>{producto.nombre}</Link></h5>
                      <div class='rating mt-auto'>
                       
                        <span id="Stock_Und">Stock {producto.inventario} Und</span>
                      </div>
                      <p class='card-text'>${producto.precio}</p><Link to={`/ModificarProducto/${producto._id}`} id="view_btn" class='btn btn-block'>
                        Modificar producto
                        </Link>
                      <button class="btn btn-danger" type="button">Eliminar</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          <div className='d-flex justify-content-center mt-5'>
                        <Pagination
                            activePage={currentPage}
                            itemsCountPerPage={resPerPage}
                            totalItemsCount={productsCount}
                            onChange={setCurrentPageNo}
                            nextPageText={'Siguiente'}
                            prevPageText={'Anterior'}
                            firstPageText={'Primera'}
                            lastPageText={'Ultima'}
                            itemClass='page-item'
                            linkClass='page-link'
                        />
                    </div>
        </Fragment>
      )}
    </Fragment>
  )
}

export default Listaproadmin
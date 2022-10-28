import React, { Fragment, useEffect } from 'react'
import MetaData from './layout/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions'
import { Link } from 'react-router-dom'
import { useAlert } from 'react-alert'

export const VistaCliente = () => {
  const { loading, productos, error } = useSelector(state => state.products)
  const alert = useAlert();
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      return alert.error(error)
    }
    dispatch(getProducts());
    alert.success("OK")
  }, [dispatch])
  return (
    <Fragment>
      {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (
        <Fragment>
          <MetaData title="Ejemplo clase "></MetaData>
          <h1 id="encabezado_productos">Lista de productos cliente </h1>
          <section id="productos" class='container mt-5'>
            <div class='row'>
              {productos && productos.map(producto => (
                <div key={producto._id} class='col-sm-12 col-md-6 col-lg-3 my-3'>
                  <div class='card1 p-3 rounded'>
                    <img class='card-img-top mx-auto'
                      src={producto.imagen[0].url}
                      alt={producto.imagen[0].public_id}>
                    </img>
                    <div class='card-body d-flex flex-column'>
                      <h5 id="titulo_producto"><Link to={`/DetallesProducto/${producto._id}`}>{producto.nombre}</Link></h5>
                      <div class='rating mt-auto'>
                        <div class='rating-outer'>
                          <div class='rating-inner'></div>
                        </div>
                        <span id="Stock_Und">Stock {producto.inventario} Und</span>
                      </div>
                      <p class='card-text'>${producto.precio}</p><Link to={`/DetallesProducto/${producto._id}`} id="view_btn" className='btn btn-block'>
                        Ver detalle
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Fragment>
      )}
    </Fragment>
  )
}

export default VistaCliente
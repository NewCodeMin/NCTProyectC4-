import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MetaData from "../components/layout/MetaData"
import { useParams } from 'react-router-dom'
import { getProductDetails, clearErrors } from '../actions/productActions'
import { useAlert } from 'react-alert'

export const DetallesdeProducto = () => {
  const { loading, product, error } = useSelector(state => state.productDetails)
  const { id } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();
  const [quantity, setQuantity] = useState(1)
  const consumir =  {
    "_id": "635b90b93ee13359fb6c5a78",
    "nombre": "ZAPATO CASUAL JARRET",
    "marca": "Adidas",
    "referencia": "Samba",
    "genero": "Hombre",
    "talla": 39,
    "imagen": [
        {
            "public_id": "productos/dsvbpny402gelwugv2le",
            "url": "./images/productos/Calzado1.jpg",
            "_id": "635b90b93ee13359fb6c5a79"
        }
    ],
    "inventario": 50,
    "precio": 195000,
    "caracteristicas": "color negro, de cuero, y suela eva",
    "__v": 0
};

  useEffect(() => {
    dispatch(getProductDetails(id))
    if (error) {
      alert.error(error);
      dispatch(clearErrors())
    }

  }, [dispatch, alert, error, id])

  const increaseQty = () => {
    const contador = document.querySelector('.count')

    if (contador.valueAsNumber >= product.inventario) return;

    const qty = contador.valueAsNumber + 1;
    setQuantity(qty)
  }

  const decreaseQty = () => {
    const contador = document.querySelector('.count')

    if (contador.valueAsNumber <= 1) return;

    const qty = contador.valueAsNumber - 1;
    setQuantity(qty)
  }
  return (
    <Fragment>
      {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (
        <Fragment>
          <MetaData title={consumir.nombre}></MetaData>
          <section>
            <div class="container py-5">
              <div class="row">
                <div class="col-lg-9 mx-auto">

                  <ul class="list-group shadow">

                    <li class="list-group-item">
                      <h3 class="mt-0 mb-1">{consumir.nombre}</h3>
                      <div class="media align-items-lg-center flex-column flex-lg-row">

                        {consumir.imagen && consumir.imagen.map(img => (
                          <div key={img.public_id}>
                            <img src={"../" + img.url} alt={consumir.nombre} width="250" height="200" class="order-1 order-lg-1"></img>
                          </div>
                        ))}

                        <div class="media-body order-2 order-lg-2 ml-lg-5">



                          <hr class="mb-2 mt-1 " />
                          <div class="d-flex align-items-center justify-content-between mt-1">

                            <ul class="list-inline small">

                              <div class="form-group row">
                                <label for="inputtext" class="col-sm-2 col-form-label">Marca:</label>
                                <div class="col-sm-10">
                                  <label for="inputtext" class="col-sm-2 col-form-label">{consumir.marca}</label>
                                </div>
                              </div>
                              <div class="form-group row">
                                <label for="inputtext" class="col-sm-2 col-form-label">Referencia:</label>
                                <div class="col-sm-10">
                                  <label for="inputtext" class="col-sm-2 col-form-label">{consumir.referencia}</label>
                                </div>
                              </div>
                              <div class="form-group row">
                                <label for="inputtext" class="col-sm-2 col-form-label">Genero:</label>
                                <div class="col-sm-10">
                                  <label for="inputtext" class="col-sm-2 col-form-label">{consumir.genero}</label>
                                </div>
                              </div>
                              <div class="form-group row">
                                <label for="inputtext" class="col-sm-2 col-form-label">Talla:</label>
                                <div class="col-sm-10">
                                  <label for="inputtext" class="col-sm-2 col-form-label">{consumir.talla}</label>
                                </div>
                              </div>
                              <div class="form-group row">
                                <label for="inputPassword3" class="col-sm-3 col-form-label">Descripcion:</label>
                                <div class="col-sm-8">
                                  <p class="col-form-label">{consumir.caracteristicas}</p>
                                </div>
                              </div>
                              <div class="form-group row">
                                <label for="inputtext" class="col-sm-2 col-form-label">Precio:</label>
                                <div class="col-sm-10">
                                  <label for="inputtext" class="col-sm-2 col-form-label">${consumir.precio}</label>
                                </div>
                              </div>
                              <div class="form-group row">
                                <label for="inputPassword3" class="col-sm-3 col-form-label">Unidades:</label>
                                <div class="col-sm-8">
                                  <p class="col-form-label">{consumir.inventario} unidades</p>
                                </div>
                              </div>
                              <div className="stockCounter d-inline">
                                <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>
                                <input type="number" className="countlab count d-inline"  value={quantity} readOnly />
                                <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
                              </div>
                              <button class="btn btn-danger" id="carrito_btn" type="button" disabled={consumir.inventario === 0}>Agregar al Carrito</button>
                              <div class="mt-3"><button class="btn btn-dark mr-2" type="button">ATRAS</button>
                              </div>
                            </ul>



                          </div>
                        </div>

                      </div>
                    </li>

                  </ul>

                </div>
              </div>
            </div>
          </section>
        </Fragment>
      )}
    </Fragment>
  )
}

export default DetallesdeProducto
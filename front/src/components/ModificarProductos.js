import React, { Fragment, useEffect, useState } from 'react'
import MetaData from './layout/MetaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, getProductDetails, updateProduct } from '../actions/productActions'
import { UPDATE_PRODUCT_RESET } from '../constants/productConstants'
import { Link, useNavigate, useParams } from 'react-router-dom'

export const ModificarProducto = () => {

  const navigate = useNavigate()
  const params= useParams();
  const [nombre, setNombre] = useState('')
  const [marca, setMarca] = useState('')
  const [referencia, setReferencia] = useState('')
  const [genero, setGenero] = useState('')
  const [talla, setTalla] = useState(0)
  const [inventario, setInventario] = useState(0)
  const [imagen, setImagen] = useState([])
  const [precio, setPrecio] = useState(0)
  const [caracteristicas, setCaracteristicas] = useState('')
  const [imagenPreview, setImagenPreview] = useState([])
  const [oldImagen, setOldImagen] = useState([])

  const generos = [
    " ",
    "Hombre",
    "Mujer",
  ]

  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, isUpdated, error: updateError } = useSelector(state => state.product)
  const { error, product } = useSelector(state => state.productDetails)
  const productId = params.id;

  useEffect(() => {
    if (product && product._id !== productId) {
      dispatch(getProductDetails(productId));
    } else {
      setNombre(product.nombre);
      setMarca(product.marca);
      setReferencia(product.referencia);
      setGenero(product.genero);
      setTalla(product.talla);
      setInventario(product.inventario);
      setPrecio(product.precio);
      setCaracteristicas(product.caracteristicas);
      setOldImagen(product.imagen)
    }
    if (error) {
      alert.error(error)
      dispatch(clearErrors)
    }
    if (updateError) {
      alert.error(error)
      dispatch(clearErrors)
    }
    if (isUpdated) {
      alert.success("Producto actualizado correctamente");
      navigate("/listaproductoadmin")
      dispatch({ type: UPDATE_PRODUCT_RESET })
    }

  }, [dispatch, alert, error, isUpdated, updateError, product, productId])

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set('nombre', nombre);
    formData.set('marca', marca)
    formData.set('referencia', referencia)
    formData.set('genero', genero)
    formData.set('talla', talla)
    formData.set('inventario', inventario)
    formData.set('precio', precio)
    formData.set('caracteristicas', caracteristicas)

    imagen.forEach(img => {
      formData.append('imagen', img)
    })

    dispatch(updateProduct(product._id, formData))
  }

  const onChange = e => {

    const files = Array.from(e.target.files)

    setImagenPreview([]);
    setImagen([])
    setOldImagen([])

    files.forEach(file => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagenPreview(oldArray => [...oldArray, reader.result])
          setImagen(oldArray => [...oldArray, reader.result])
        }
      }

      reader.readAsDataURL(file)
    })
  }

  return (
    <Fragment>
      <MetaData title={'Modificar Producto'} />
      <section>
        <div class="container py-5">
          <div class="row">
            <div class="col-lg-9 mx-auto">

              <ul class="list-group shadow">

                <li class="list-group-item">
                  <form onSubmit={submitHandler} encType='multipart/form-data'>
                    <h3 class="mt-0 mb-1">Modificar producto</h3>
                    <div class="media align-items-lg-center flex-column flex-lg-row">

                    {oldImagen && oldImagen.map(img => (
                                  <img key={img} src={img.url} alt={img.url} width="250" height="200" class="order-1 order-lg-1" />
                                ))}

                      <div class="media-body order-2 order-lg-2 ml-lg-5">



                        <hr class="mb-2 mt-1 " />
                        <div class="d-flex align-items-center justify-content-between mt-1">

                          <ul class="list-inline small">
                            <div class="form-group row">
                              <label for="inputtext" class="col-sm-2 col-form-label">Nombre:</label>
                              <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputPassword3" value={nombre}
                                  onChange={(e) => setNombre(e.target.value)} />
                              </div>
                            </div>
                            <div class="form-group row">
                              <label for="inputtext" class="col-sm-2 col-form-label">Marca:</label>
                              <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputPassword3" value={marca}
                                  onChange={(e) => setMarca(e.target.value)} />
                              </div>
                            </div>
                            <div class="form-group row">
                              <label for="inputtext" class="col-sm-2 col-form-label">Referencia:</label>
                              <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputPassword3" value={referencia}
                                  onChange={(e) => setReferencia(e.target.value)} />
                              </div>
                            </div>
                            <div class="form-group row">
                              <label for="inputtext" class="col-sm-2 col-form-label">Genero:</label>
                              <div class="col-sm-10">
                                <select className="form-control"
                                  id="genero_field"
                                  value={genero}
                                  onChange={(e) => setGenero(e.target.value)}>
                                  {generos.map(genero => (
                                    <option key={genero} value={genero}>{genero}</option>
                                  ))}
                                </select>
                              </div>
                            </div>
                            <div class="form-group row">
                              <label for="inputtext" class="col-sm-2 col-form-label">Talla:</label>
                              <div class="col-sm-10">
                                <input type="number" class="form-control" id="inputPassword3" value={talla}
                                  onChange={(e) => setTalla(e.target.value)} />
                              </div>
                            </div>
                            <div class="form-group row">
                              <label for="inputtext" class="col-sm-2 col-form-label">Ingresar imagen:</label>
                              <div class="col-sm-10">
                                <div className='custom-file'>
                                  <input
                                    type='file'
                                    name='product_images'
                                    className='custom-file-input'
                                    id='customFile'
                                    onChange={onChange}
                                    multiple
                                  />
                                  <label className='custom-file-label' htmlFor='customFile'>
                                    Escoger Imagen
                                  </label>
                                </div>
                                {oldImagen && oldImagen.map(img => (
                                  <img key={img} src={img.url} alt={img.url} className="mt-3 mr-2" width="55" height="52" />
                                ))}

                                {imagenPreview.map(img => (
                                  <img src={img} key={img} alt="Vista Previa de la imagen"
                                    className='mt-3 mr-2' width="55" height="55" />
                                ))}
                              </div>
                            </div>
                            <div class="form-group row">
                              <label for="inputtext" class="col-sm-2 col-form-label">Inventario:</label>
                              <div class="col-sm-10">
                                <input type="number" class="form-control" id="inputPassword3" value={inventario}
                                  onChange={(e) => setInventario(e.target.value)} />
                              </div>
                            </div>
                            <div class="form-group row">
                              <label for="inputtext" class="col-sm-2 col-form-label">Precio:</label>
                              <div class="col-sm-10">
                                <input type="number" class="form-control" id="inputPassword3" value={precio}
                                  onChange={(e) => setPrecio(e.target.value)} />
                              </div>
                            </div>
                            <div class="form-group row">
                              <label for="inputPassword3" class="col-sm-3 col-form-label">Caracteristicas:</label>
                              <div class="col-sm-8">
                                <textarea name="texto" cols="30" rows="5" placeholder="Escribe aquí el texto..." value={caracteristicas}
                                  onChange={(e) => setCaracteristicas(e.target.value)}>

                                </textarea>
                              </div>
                            </div>
                            <div class="mt-3">
                              <Link to="/listaproductoadmin">
                                <button class="btn btn-dark mr-2" type="button">ATRAS</button>
                              </Link>

                              <button
                                class="btn btn-success" type="submit" disabled={loading ? true : false}>ACTUALIZAR</button></div>
                          </ul>



                        </div>
                      </div>

                    </div>
                  </form>

                </li>

              </ul>

            </div>
          </div>
        </div>
      </section>

    </Fragment>
  )
}

export default ModificarProducto
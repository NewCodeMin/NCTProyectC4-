import React, { Fragment, useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearErrors, newProduct } from '../actions/productActions'
import { NEW_PRODUCT_RESET } from '../constants/productConstants'
import MetaData from './layout/MetaData'

const IngresarProductos = () => {
  const { loading, error, success } = useSelector(state => state.newProduct)
  const [nombre, setNombre] = useState("")
  const [marca, setMarca] = useState("")
  const [referencia, setReferencia] = useState("")
  const [genero, setGenero] = useState("")
  const [talla, setTalla] = useState(0)
  const [inventario, setInventario] = useState(0)
  const [imagen, setImagen] = useState([])
  const [precio, setPrecio] = useState(0)
  const [caracteristicas, setCaracteristicas] = useState("")
  const [imagenPreview, setImagenPreview] = useState([])

  const generos = [
    "Hombre",
    "Mujer",
  ]
  const navigate = useNavigate()
  const alert = useAlert();
  const dispatch = useDispatch();

  useEffect(() => {

    if (error) {
      alert.error(error);
      dispatch(clearErrors)
    }
    if (success) {
      navigate("/IngresarProducto")
      alert.success("Producto registrado con exito")
      dispatch({ type: NEW_PRODUCT_RESET })
    }
  }, [dispatch, alert, error, success])

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("nombre", nombre);
    formData.set("marca", marca)
    formData.set("referencia", referencia)
    formData.set("genero", genero)
    formData.set("talla", talla)
    formData.set("inventario", inventario)
    formData.set("precio", precio)
    formData.set("caracteristicas", caracteristicas)

    imagen.forEach(img => {
      formData.append("imagen", img)
    })

    dispatch(newProduct(formData))
  }

  const onChange = e => {
    const files = Array.from(e.target.files)

    setImagenPreview([])
    setImagen([])

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
      <MetaData title={'Nuevo Producto'} />
      {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (
        <Fragment>
          <section>
        <div class="container py-5">
          <div class="row">
            <div class="col-lg-9 mx-auto">

              <ul class="list-group shadow">

                <li class="list-group-item">
                  <form className="shadow-lg" onSubmit={submitHandler} encType='application/json'>
                    <h3 class="mt-0 mb-1">Ingresar productos</h3>
                    <div class="media align-items-lg-center flex-column flex-lg-row">
                      <img src="./images/zapatos_deportivos.png" alt="logo" id="imgingresarproducto" />

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
                                    accept="images/*"
                                    onChange={onChange}
                                  />
                                  <label className='custom-file-label' htmlFor='customFile'>
                                    Escoger Imagen
                                  </label>
                                </div>
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
                            <div class="mt-3"><button class="btn btn-dark mr-2" type="button">ATRAS</button><button
                              class="btn btn-success" type="submit" disabled={loading ? true : false}>GUARDAR</button></div>
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
      )}
    </Fragment>
  )
}

export default IngresarProductos
import React, { Fragment } from 'react'

export const ModificarProducto = () => {
    return (
        <Fragment>
        <section>
        <div class="container py-5">
          <div class="row">
            <div class="col-lg-9 mx-auto">

              <ul class="list-group shadow">

                <li class="list-group-item">
                  <h3 class="mt-0 mb-1">Modificar producto</h3>
                  <div class="media align-items-lg-center flex-column flex-lg-row">
                    <img src="https://bosico.vteximg.com.br/arquivos/ids/1710772-1500-1500/Calzado-ZMD8CF-CAFE_1.jpg?v=637804258723700000"
                      alt="Generic placeholder " width="250" height="200" class="order-1 order-lg-1" />

                    <div class="media-body order-2 order-lg-2 ml-lg-5">



                      <hr class="mb-2 mt-1 " />
                      <div class="d-flex align-items-center justify-content-between mt-1">

                        <ul class="list-inline small">
                          <div class="form-group row">
                            <label for="inputtext" class="col-sm-2 col-form-label">Nombre:</label>
                            <div class="col-sm-10">
                              <input type="text" class="form-control" id="inputPassword3" />
                            </div>
                          </div>
                          <div class="form-group row">
                            <label for="inputPassword3" class="col-sm-3 col-form-label">Descripcion:</label>
                            <div class="col-sm-8">
                              <textarea name="texto" cols="30" rows="5" placeholder="Escribe aquí el texto...">

                              </textarea>
                            </div>
                          </div>
                          <div class="form-group row">
                            <label for="inputtext" class="col-sm-2 col-form-label">Precio:</label>
                            <div class="col-sm-10">
                              <input type="text" class="form-control" id="inputPassword3" />
                            </div>
                          </div>
                          <div class="form-group row">
                            <label for="inputtext" class="col-sm-2 col-form-label">Stock:</label>
                            <div class="col-sm-10">
                              <input type="text" class="form-control" id="inputPassword3" />
                            </div>
                          </div>
                          <div class="mt-3"><button class="btn btn-dark mr-2" type="button">ATRAS</button><button
                            class="btn btn-success" type="button">GUARDAR</button></div>
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
    )
}

export default  ModificarProducto
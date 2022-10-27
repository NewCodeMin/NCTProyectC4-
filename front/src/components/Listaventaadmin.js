import React, { Fragment } from 'react'

const Listaventaadmin = () => {
    return (
        <Fragment>
        <div id="page" class='container mt-5'>
      <h1 id="encabezado_productos">Lista de ventas</h1>
        <table summary="a summary of recent major volcanic eruptions in the Pacific Northwest">
          
          <thead>
            <tr>
              <th scope="col">Id venta</th>
              <th scope="col">Fecha de venta</th>
              <th scope="col">Producto</th>
              <th scope="col">Cantidad</th>
              <th scope="col" class="last">Valor</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>1/11/2022</td>
              <td>Tennis x</td>
              <td>1</td>
              <td class="last">$ 300.000</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>1/11/2022</td>
              <td>Tennis x</td>
              <td>1</td>
              <td class="last">$ 300.000</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>1/11/2022</td>
              <td>Tennis x</td>
              <td>1</td>
              <td class="last">$ 300.000</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>1/11/2022</td>
              <td>Tennis x</td>
              <td>1</td>
              <td class="last">$ 300.000</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>1/11/2022</td>
              <td>Tennis x</td>
              <td>1</td>
              <td class="last">$ 300.000</td>

            </tr>


          </tbody>


        </table>
        <div class="row">
          <div class="col">
            Total ventas
          </div>
          <div class="col-10">
            $ 1.500.000
          </div>
        </div>

        <button class="btn btn-dark mr-2" id="botones" type="button">ATRAS</button>
        <button class="btn btn-success" id="botones" type="button">GUARDAR</button>
        
      </div>

        </Fragment>
    )
}

export default  Listaventaadmin
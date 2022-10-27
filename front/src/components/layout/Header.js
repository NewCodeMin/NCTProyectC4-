import React, { Fragment } from 'react'

const Header = () => {
    return (
        <Fragment>
            <nav class="navbar navbar-dark bg-white ">
        <div class="container-fluid">
            <img src="./images/bannert.png "  alt="logo" id = "imagenavbar"/>  
          <form class="d-flex " id="buscador" role="search">
            <input class="form-control me-2 id " id= "buscarnav" type="search" placeholder="¿Qué buscas?" aria-label="Search"/>
            <button class="btn btn-success "  id= "buscarbotom" type="submit">Buscar</button>
          </form>
          <div class="navbar-brand  d-md-flex ">
            <div class="final"> 
            <div class="d-flex flex-row-reverse">
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                    <span class="navbar-toggler-icon"></span>
                  </button>
            <a class="nav-link" href=" "> <span class="fa fa-shopping-cart"  id="cart_shopping"></span> <span className="ml-0" id="cart_count">0</span> </a>
           </div>
           </div>
           </div>
          <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Tienda de zapatos deportivos</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                    <div class="navtobbler"> 
                        <div class="d-flex ">
                        <button  type="button" href=" " id="botoningresar"> <span class="fas fa-user pe-2   "></span>Ingresar</button>
                        <button  type="button"  href=" " id="botoningresar"> <span class="fa fa-user-plus "></span> Crear cuenta</button>
                    </div>
                    </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href=" ">Mujer</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href=" ">Hombre</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href=" ">Niñas</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href=" ">Niños</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href=" ">Marcas</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
        </Fragment>
    )               
}

export default Header
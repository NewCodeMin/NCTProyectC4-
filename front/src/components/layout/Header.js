import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import {  useDispatch, useSelector } from "react-redux";
import { useAlert } from 'react-alert'
import { logout} from "../../actions/userActions"

const Header = () => {
  const alert= useAlert();
  const dispatch= useDispatch();

  const { user, loading } = useSelector((state) => state.auth);

  const logoutHandler = () =>{
        dispatch(logout());
        alert.success("LogOut exitoso")
  }
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
            {user ? (
                  <div className="ml-1 dropdown d-inline">
                    <Link
                      to="#!"
                      className="nav-link dropdown-toggle"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <figure className="avatar avatar-nav">
                        <img
                          src={user.avatar && user.avatar.url}
                          alt={user && user.nombre}
                          className="rounded-circle"
                        ></img>
                      </figure>

                      <span id="nombreUsuario"> {user && user.nombre}</span>

                    </Link>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropDownMenu"
                    >
                      {/*Preguntamos el rol de quien esta online*/}
                      {user && user.role === "admin" && (
                        <Link className="dropdown-item" to="/dashboard">
                          Adm. Productos
                        </Link>
                      )}

                      <Link className="dropdown-item" to="/">
                        Pedidos
                      </Link>
                      <Link className="dropdown-item" to="/yo">
                        Mi Perfil
                      </Link>
                      <Link className="dropdown-item" to="/" onClick={logoutHandler}>Cerrar Sesion</Link>
                    </div>
                  </div>
                ) : (
                  !loading && (
                    <div className="d-flex flex-row-reverse">
                      <Link className="nav-link" to="/register">
                        {" "}
                        <span className="fa fa-user-plus "></span> Crear
                        cuenta
                      </Link>
                      <Link className="nav-link" to="/login">
                        {" "}
                        <span className="fas fa-user pe-2   "></span>
                        Ingresar
                      </Link>
                    </div>
                  )
                )}
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
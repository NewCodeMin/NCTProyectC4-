import React, { Fragment } from 'react'

const Header = () => {
    return (
        <Fragment>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynav"
                        aria-controls="mynav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="#">
                        <div class="d-flex">
                            <img src="./images/logo.jpg" alt="" class="logoNav"></img>

                            <div class="ms-3 d-flex flex-column">
                                <div class="h4">Tienda de zapatos</div>
                                <div class="fs-6">New code team</div>
                            </div>
                        </div>
                    </a>
                    <div class="collapse navbar-collapse" id="mynav">
                        <table>
                            <tr>
                                <td><input type="search" id="form1" class="seacrhNav" placeholder='Buscar' /></td>
                                <td><button type="button" class="btn btn-searchNav">
                                <i class="fas fa-search"></i>
                            </button></td>
                            </tr>
                        </table>
                        <ul class="navbar-nav ms-auto mb-3 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <div class="cart bg-purple">
                                        <span class="fas fa-shopping-cart text-white"></span>
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"> <span class="fas fa-user pe-2"></span> Hello Jhon</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Header
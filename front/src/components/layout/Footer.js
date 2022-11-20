import React from 'react'
import "./footr.css";


const Footer = () => {

    const year = new Date().getFullYear();
    console.log(year);

    return (
        <footer>
            <div className="footer_container">
                <div className="footr_details_one">
                    <h3>Conocenos</h3>
                    <p>¿Quienes somos?</p>
                    <p>Nuestra responsabilidad social</p>
                   
                </div>
                <div className="footr_details_one">
                    <h3>Conectate con nosotros</h3>
                    <p>Terminos de uso</p>
                    <p>Trabaja con nosotros</p>
                </div>
                <div className="footr_details_one forres">
                    <h3>Dudas e inquietudes</h3>
                    <p>Seguir mi pedido</p>
                    <p>Preguntas frecuentes</p>
                </div>
                <div className="footr_details_one forres">
                    <h3>Busca nuestras redes sociales</h3>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
            </div>
            <div className="lastdetails">
                <img src="./public/images/zapatos_deportivos.png" alt="logo" />
                <p>Condiciones de uso y venta &nbsp; &nbsp;&nbsp;  Todos los derechos reservados. &nbsp; &nbsp;&nbsp;  Teléfono (571) 4842220. Dirección: Calle 99 #14-49 Piso 9, Bogotá Colombia. E-mail de notificaciones : notificaciones@tiendadezapatos.com  &nbsp; &nbsp;&nbsp;  © 2022-{year}, tiendadezapatos.com, Inc. or its affiliates</p>
            </div>
        </footer>
    )
}

export default Footer
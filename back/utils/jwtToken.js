//Crear y enviar un token guarado en una cookie
const tokenEnviado= (user, statusCode, res) =>{

    //Creamos el token
    const token = user.getJwtToken();

    //Opciones del token
    const Opciones= {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRES_TIME*24*60*60*1000
        ),
        httpOnly: true
    }
    // se realiza para unificar const token y const opciones 
    res.status(statusCode).cookie("token", token, Opciones).json({
        success:true,
        token,
        user
    })
}

module.exports= tokenEnviado;
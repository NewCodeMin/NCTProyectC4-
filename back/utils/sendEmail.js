const nodemailer= require("nodemailer")

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      auth: {
        user: "tiendadezapatosdeportivos@gmail.com",
        pass: "dwidndctbmbrlrih"
        }
      });
    const mensaje={
        from: "Tienda  de zapatos deportivos  <tiendadezapatosdeportivos@gmail.com>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }

    await transport.sendMail(mensaje)
}

module.exports= sendEmail;
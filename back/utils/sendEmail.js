const nodemailer= require("nodemailer")

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      auth: {
        user: "TIENDADEZAPATOSDEPORTIVOS@outlook.com",
        pass: "qlpvxpwiutayzznf"
        }
      });
    const mensaje={
        from: "Tienda  de zapatos deportivos  <TIENDADEZAPATOSDEPORTIVOS@outlook.com>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }

    await transport.sendMail(mensaje)
}

module.exports= sendEmail;
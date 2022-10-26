const mongoose = require("mongoose");

const productosShema = mongoose.Schema({
    marca:{
        type:String,
        required: [true,"Por favor registra la marca del producto."],
        trim:true,
        maxLength:[120,"La marca del producto no debe exceder los 120 caracteres."]
    },
    referencia:{
        type:String,
        required: [true,"Por favor registra la referencia del producto."],
        trim:true,
        maxLength:[120,"La referencia del producto no debe exceder los 120 caracteres."]
    },
    genero:{
        type: String,
        required: [true,"Por favor seleccione para que genero va destinaado el producto."],
        enum:{
            values:[
                "Hombre",
                "Mujer",
            ]
        }
    },
    talla:{
        type: Number,
        default: 0
    },
    imagen:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type: String,
                required:true
            }
        }
    ],
    inventario: {
        type: Number,
        required:[true,"Por favor registre el stock del producto"],
        maxLength:[5,"Cantidad maxima de producto no puede sobrepasar 99999"],
        default:0
    },
    precio:{
        type: Number,
        required: [true, "Por favor registre el precio del producto"],
        maxLength:[8,"El precio del producto no puede estar por encima de 99.999.999"],
        default: 0.0
    },
    caracteristicas:{
        type: String,
        required:[true,"porfavor registre una descripcion para el producto."]
    }
})


module.exports= mongoose.model("productos",productosShema)
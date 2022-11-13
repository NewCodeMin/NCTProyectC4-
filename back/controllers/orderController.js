const Order=require("../models/order");
const catchAsyncErrors= require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");
const producto=require("../models/productos");

//Crear una nueva orden
exports.newOrder= catchAsyncErrors (async (req, res, next)=>{
    const ordersUser= await Order.find({user: req.user._id});
    let idOrder =""
    
    if(ordersUser.length > 0){
        for (i = 0 ; i < ordersUser.length;i++){
            if(ordersUser[i].estado === "Procesando"){
                idOrder = ordersUser[i]._id;
            }
        }
        if (idOrder != ""){
            let orderConsult= await Order.findById(idOrder).populate("user", "nombre email") //restriccion de usuario
            const {
                items,
                descuento = 0.14,
                precioEnvio = 12000,
                precioImpuesto = 0.19,
            } = req.body;
            const idProducts = [];
            const listPrecio = [];
            for (i = 0 ; i < items.length;i++){
                idProducts.push(items[i].producto);
                const product = await producto.findById(items[i].producto);
                listPrecio.push(product.precio * items[i].cantidad);
                items[i].nombre = product.nombre;
                items[i].marca = product.marca;
                items[i].talla = product.talla;
                items[i].precio = product.precio;
                items[i].imagen = product.imagen[0].url;
            }
            let total  = 0;
            listPrecio.forEach(function(a){total += a;});
            let precioItems = total;
            let precioTotal = precioItems + (precioItems * precioImpuesto) + precioEnvio - (precioItems *descuento)
            let itemsPrecio ={
                items,
                precioItems,
                precioTotal
            };
            orderConsult= await Order.findByIdAndUpdate(idOrder, itemsPrecio);
            orderConsult.items = items;
            orderConsult.precioItems = precioItems;
            orderConsult.precioTotal = precioTotal;
            res.status(201).json({
                success: true,
                message: "actualizacion de orden correcta",
                orderConsult
            })

        }else{
            const {
                items,
                envioInfo,
                descuento = 0.14,
                precioEnvio = 12000,
                precioImpuesto = 0.19,
                pagoInfo
            } = req.body;
            const idProducts = [];
            const listPrecio = [];
            for (i = 0 ; i < items.length;i++){
                idProducts.push(items[i].producto);
                const product = await producto.findById(items[i].producto);
                listPrecio.push(product.precio * items[i].cantidad);
                items[i].nombre = product.nombre;
                items[i].marca = product.marca;
                items[i].talla = product.talla;
                items[i].precio = product.precio;
                items[i].imagen = product.imagen[0].url;
            }
            let total  = 0;
            listPrecio.forEach(function(a){total += a;});
            let precioItems = total;
            let precioTotal = precioItems + (precioItems * precioImpuesto) + precioEnvio - (precioItems *descuento)
            const order= await Order.create({
                items,
                envioInfo,
                precioItems,
                descuento,
                precioImpuesto,
                precioEnvio,
                precioTotal,
                pagoInfo,
                fechaPago: Date.now(),
                user: req.user._id
            })

            res.status(201).json({
                success: true,
                message: "creacionde orden correcta",
                order
            })
        }
    }else{
        const {
            items,
            envioInfo,
            descuento = 0.14,
            precioEnvio = 12000,
            precioImpuesto = 0.19,
            pagoInfo
        } = req.body;
        const idProducts = [];
        const listPrecio = [];
        for (i = 0 ; i < items.length;i++){
            idProducts.push(items[i].producto);
            const product = await producto.findById(items[i].producto);
            listPrecio.push(product.precio * items[i].cantidad);
            items[i].nombre = product.nombre;
            items[i].marca = product.marca;
            items[i].talla = product.talla;
            items[i].precio = product.precio;
            items[i].imagen = product.imagen[0].url;
        }
        let total  = 0;
        listPrecio.forEach(function(a){total += a;});
        let precioItems = total;
        let precioTotal = precioItems + (precioItems * precioImpuesto) + precioEnvio - (precioItems *descuento)
        const order= await Order.create({
            items,
            envioInfo,
            precioItems,
            descuento,
            precioImpuesto,
            precioEnvio,
            precioTotal,
            pagoInfo,
            fechaPago: Date.now(),
            user: req.user._id
        })

        res.status(201).json({
            success: true,
            message: "creacion de orden correcta",
            order
        })
    }
})

//Ver una orden
exports.getOneOrder= catchAsyncErrors(async(req, res, next)=>{
    const order= await Order.findById(req.params.id).populate("user", "nombre email") //restriccion de usuario

    if(!order){
        return next(new ErrorHandler("No encontramos una orden con ese Id",404))
    }

    res.status(200).json({
        success:true,
        order
    })
})

//Ver todas mis ordenes (usuario logueado)
exports.myOrders= catchAsyncErrors(async(req,res, next)=>{
    const orders= await Order.find({user: req.user._id});

    res.status(200).json({
        success:true,
        orders
    })
})
//Finalizar orden
exports.finishOrder = catchAsyncErrors(async(req,res,next) => {
    let order= await Order.findById(req.params.id).populate("user", "nombre email") //restriccion de usuario

    if(!order){
        return next(new ErrorHandler("No encontramos una orden con ese Id",404))
    }
   //Si el objeto existe
   order.estado = "Finalizado";
   order = await  Order.findByIdAndUpdate(req.params.id, order);
   order.estado = "Finalizado";
    
    let itemsProd = [];
    itemsProd = order.items;
    let idProducts = [];
    let listCantidad = [];
    for (i = 0 ; i < itemsProd.length;i++){
        idProducts.push(itemsProd[i].producto);
        listCantidad.push(itemsProd[i].cantidad);
    }
    for (i = 0 ; i < idProducts.length;i++){
        let product = await producto.findById(idProducts.slice(i,i+1));
        product.inventario -= listCantidad[i];
        product = await producto.findByIdAndUpdate(idProducts.slice(i,i+1),product);
    }
        res.status(200).json({
        success: true,
        message: "actualizacion correcta", 
        order
    })

})
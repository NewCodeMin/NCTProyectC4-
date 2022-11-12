const Order=require("../models/order");
const catchAsyncErrors= require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");
const producto=require("../models/productos");

//Crear una nueva orden
exports.newOrder= catchAsyncErrors (async (req, res, next)=>{
    const {
        items,
        envioInfo,
        precioItems,
        precioImpuesto,
        precioEnvio,
        precioTotal,
        pagoInfo
    } = req.body;

    const order= await Order.create({
        items,
        envioInfo,
        precioItems,
        precioImpuesto,
        precioEnvio,
        precioTotal,
        pagoInfo,
        fechaPago: Date.now(),
        user: req.user._id
    })

    res.status(201).json({
        success:true,
        order
    })
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
   order = await  Order.findByIdAndUpdate(req.params.id, order)
    
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
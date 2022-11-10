const Order=require("../models/order");
const catchAsyncErrors= require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");

//Crear una nueva orden
exports.newOrder= catchAsyncErrors (async (req, res, next)=>{
    const {
        Items,
        envioInfo,
        precioItems,
        precioImpuesto,
        precioEnvio,
        precioTotal,
        pagoInfo
    } = req.body;

    const order= await Order.create({
        Items,
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

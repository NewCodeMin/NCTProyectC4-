const express=require("express");
const router=express.Router();
const { newOrder,
    getOneOrder,
    myOrders, 
    finishOrder,

} = require("../controllers/orderController");
const { isAuthenticatedUser } = require("../middleware/auth");

router.route("/order/new").post(isAuthenticatedUser, newOrder)
router.route("/order/:id").get(isAuthenticatedUser, getOneOrder)
router.route("/orders/me").get(isAuthenticatedUser, myOrders)
router.route("/orderFinish/:id").put(isAuthenticatedUser, finishOrder)

module.exports=router;

const express=require("express")
const router= express.Router();

const{getProducts,getProductsDisp, newProduct, getProductsById, updateProduct, deleteProduct} = require("../controllers/productsController") //traemos la respuesta json desde el controlador

const { isAuthenticatedUser , authorizeRoles} = require("../middleware/auth");

router.route('/productos').get(getProducts) //Establecemos desde que ruta queremos ver getproducts
router.route('/productosDispo').get(getProductsDisp) //Muestra los productos disponibles
router.route('/producto/nuevo').post(isAuthenticatedUser, authorizeRoles("admin"), newProduct); //Establecemos la ruta
router.route('/producto/:id').get(getProductsById); //Ruta para alcanzar con id
router.route('/producto/:id').put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct); //Creacion de la ruta de actualizacion
router.route('/producto/:id').delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct); //Creacion de la ruta de eliminacion por id

module.exports=router;
const express = require("express");

const productControllers = require("../controllers/productControllers");

const router = express.Router();
// @route - /api/v1/products/
router
  .route("/")
  .get(productControllers.getAllProducts)
  .post(productControllers.createNewProduct);

//@route - /api/v1/products/someid
router
  .route("/:id")
  .put(productControllers.updateProductById)
  .delete(productControllers.deleteProductById);
module.exports = router;

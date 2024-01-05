const {
  getAddProduct,
  getProducts,
  createProduct,
  getIdbyProduct,
  getIdByDeleteProduct,
  getIdByEditProduct,
  IdByEditProduct,
} = require("../controllers/admin.db_product");
const router = require("express").Router();

router.get("/add-product", getAddProduct);
router.get("/products", getProducts);
router.get("/products/:id", getIdbyProduct);
router.get("/products/delete/:id", getIdByDeleteProduct);
router.get("/products/edit/:id", getIdByEditProduct);
router.post("/add-product", createProduct);
router.post("/products/edit/:id", IdByEditProduct);
module.exports = router;

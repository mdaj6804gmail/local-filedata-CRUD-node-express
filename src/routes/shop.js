const {
  homePage,
  products,
  card,
  order,
} = require("../controllers/shop.controller");
const router = require("express").Router();

router.get("/", homePage);
router.get("/products", products);
router.get("/card", card);
router.get("/order", order);

module.exports = router;

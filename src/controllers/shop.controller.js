const homePage = (req, res, next) => {
  try {
    res.status(200).render("shop/index", { pageTitle: "shop" });
  } catch (e) {
    console.log(e.message);
  }
};

const products = (req, res, next) => {
  try {
    res.status(200).render("shop/products", { pageTitle: "Products" });
  } catch (e) {
    console.log(e.message);
  }
};

const card = (req, res, next) => {
  try {
    res.status(200).render("shop/card", { pageTitle: "Card" });
  } catch (e) {
    console.log(e.message);
  }
};

const order = (req, res, next) => {
  try {
    res.status(200).render("shop/order", { pageTitle: "Order" });
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = { homePage, card, order, products };

const { v4: uuidv4 } = require("uuid");
const saveProduct = require("../models/product");
const getAddProduct = (req, res, next) => {
  try {
    res.status(200).render("admin/add-product", { pageTitle: "Add Product" });
  } catch (e) {
    console.log(e.message);
    return res.status(500).render("error/500", {
      pageTitle: "server error",
      errorMessage: e.message,
    });
  }
};
const getProducts = (req, res, next) => {
  try {
    saveProduct.fetchProduct((data) => {
      console.log(`product Langth: ${data.length}`);
      res
        .status(200)
        .render("admin/product", { pageTitle: "Edit Product", data: data });
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).render("error/500", {
      pageTitle: "server error",
      errorMessage: e.message,
    });
  }
};
const createProduct = (req, res, next) => {
  try {
    const { title, imgurl, price, description } = req.body;
    const id = uuidv4();
    const product = new saveProduct(id, title, imgurl, price, description);
    product.save();
    return res.status(200).redirect("/admin/products");
  } catch (e) {
    console.log(e.message);
    return res.status(500).render("error/500", {
      pageTitle: "server error",
      errorMessage: e.message,
    });
  }
};

const getIdbyProduct = (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(id);
    saveProduct.getById(id, (data) => {
      const { id, title, imageurl, description, price } = data;
      res.status(200).render("admin/single-product", {
        pageTitle: title,
        imageurl,
        description,
        price,
      });
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).render("error/500", {
      pageTitle: "server error",
      errorMessage: e.message,
    });
  }
};

const getIdByDeleteProduct = (req, res, next) => {
  try {
    const id = req.params.id;
    saveProduct.getIdByDelete(id, (data) => {
      res.redirect("/admin/products");
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).render("error/500", {
      pageTitle: "server error",
      errorMessage: e.message,
    });
  }
};
const getIdByEditProduct = (req, res, next) => {
  try {
    const id = req.params.id;
    saveProduct.getById(id, (data) => {
      const { id, title, imageurl, price, description } = data;
      res.status(200).render("admin/edit-product", {
        pageTitle: `${title} Edit Product`,
        id,
        title,
        imageurl,
        price,
        description,
      });
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).render("error/500", {
      pageTitle: "server error",
      errorMessage: e.message,
    });
  }
};

const IdByEditProduct = (req, res, next) => {
  try {
    const id = req.params.id;
    const { title, imageurl, price, description } = req.body;
    saveProduct.editePoduct(id, title, imageurl, price, description);
    res.status(200).redirect("/admin/products");
  } catch (e) {
    console.log(e.message);
    return res.status(500).render("error/500", {
      pageTitle: "server error",
      errorMessage: e.message,
    });
  }
};

module.exports = {
  getAddProduct,
  getProducts,
  createProduct,
  getIdbyProduct,
  getIdByDeleteProduct,
  getIdByEditProduct,
  IdByEditProduct,
};

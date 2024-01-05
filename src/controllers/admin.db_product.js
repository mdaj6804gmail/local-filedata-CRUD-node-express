const dbProducts = require("../models/product_database");

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
    dbProducts
      .fetchProduct()
      .then((data) => {
        res.status(200).render("admin/product", {
          pageTitle: "Edit Product",
          data: data[0],
        });
      })
      .catch((err) => console.log(err));
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

    dbProducts
      .save(title, imgurl, price, description)
      .then((data) => {
        console.log(data);
        return res.status(200).redirect("/admin/products");
      })
      .catch((err) => {
        console.log(err);
      });
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
    dbProducts
      .getById(id)
      .then((data) => {
        console.log(data[0][0]);

        const { ID, title, imageurl, description, price } = data[0][0];
        res.status(200).render("admin/single-product", {
          pageTitle: title,
          imageurl,
          description,
          price,
        });
      })
      .catch((err) => {
        console.log(err);
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
    dbProducts
      .getIdByDelete(id)
      .then((data) => {
        res.redirect("/admin/products");
      })
      .catch((err) => {
        console.log(err);
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
    dbProducts
      .getById(id)
      .then((data) => {
        const { ID, title, imageurl, description, price } = data[0][0];
        res.status(200).render("admin/edit-product", {
          pageTitle: `${title} Edit Product`,
          ID,
          title,
          imageurl,
          price,
          description,
        });
      })
      .catch((err) => {
        console.log(err.message);
        return res.status(500).render("error/500", {
          pageTitle: "server error",
          errorMessage: err.message,
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
    console.log(req.body, id);
    dbProducts
      .editePoduct(id, title, imageurl, price, description)
      .then((data) => {
        console.log(data);
        res.status(200).redirect("/admin/products");
      })
      .catch((err) => {
        console.log(err.message);
        return res.status(500).render("error/500", {
          pageTitle: "server error",
          errorMessage: e.message,
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

module.exports = {
  getAddProduct,
  getProducts,
  createProduct,
  getIdbyProduct,
  getIdByDeleteProduct,
  getIdByEditProduct,
  IdByEditProduct,
};

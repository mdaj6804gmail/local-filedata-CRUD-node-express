const notFound404 = (req, res, next) => {
  try {
    res.statusCode = 404;
    res.render("error/404", { pageTitle: "Not Found Page" });
  } catch (e) {
    console.log(e.message);
    res.status(500).render("error/500", { pageTitle: "Server error" });
  }
};
const severError = (err, req, res, next) => {
  try {
    res.statusCode = 404;
    res.render("error/500", { pageTitle: "Server error" });
  } catch (e) {
    console.log(e.message);
    res.status(500).render("error/500", { pageTitle: "Server error" });
  }
};

module.exports = { notFound404, severError };

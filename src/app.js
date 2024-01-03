const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");

// !route imports
const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");
const errorRoute = require("./routes/error.routes");
const { rootPath } = require("./util/rootPath");

// ! App Configuration

const app = express();

app.set("x-powered-by", false);
app.set("view engine", "ejs");
app.set("views", `${rootPath}/views`);
app.use(morgan("dev"));
app.use(express.static(path.join(rootPath, `public`)));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.disable('x-powered-by');

//! route configuration
app.use("/admin", adminRoute);
app.use(shopRoute);
app.use(errorRoute);

app.listen(3000, () => {
  console.log(`server is running http://localhost:3000`);
});

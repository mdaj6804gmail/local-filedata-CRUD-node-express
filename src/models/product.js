const fs = require("fs");
const { rootPath } = require("../util/rootPath");
const f_path = `${rootPath}/data/product.json`;

const comonfun = (cb) => {
  fs.readFile(f_path, "utf-8", (err, data) => {
    if (!err) {
      return cb(JSON.parse(data));
    } else {
      return cb([]);
    }
  });
};

/**
 *@param id
 * @param title
 * @param imageurl
 * @param price
 * @param description
 * */
const product = class product {
  constructor(id, title, imageurl, price, description) {
    this.id = id;
    this.title = title;
    this.imageurl = imageurl;
    this.price = price;
    this.description = description;
  }
  save() {
    comonfun((products) => {
      const { id, title, imageurl, price, description } = this;
      products.push({ id, title, imageurl, price, description });
      fs.writeFile(f_path, JSON.stringify(products), "utf-8", (err) => {
        console.log(err);
      });
    });
  }

  static fetchProduct(cb) {
    comonfun(cb);
  }
  static getById(id, cb) {
    comonfun((data) => {
      const result = data.find((res) => res.id === id);
      cb(result);
    });
  }

  static getIdByDelete(id, cb) {
    comonfun((product) => {
      const findproduct = product.filter((res) => res.id !== id);
      fs.writeFile(f_path, JSON.stringify(findproduct), "utf-8", (err) => {
        if (!err) {
          comonfun(cb);
        } else {
          cb([]);
        }
      });
    });
  }

  static editePoduct(id, title, imageurl, price, description) {
    comonfun((item) => {
      const result = item.find((res) => res.id === id);
      if (result) {
        result.id = id;
        result.title = title;
        result.imageurl = imageurl;
        result.description = description;
        result.price = price;
        const data = item.filter((res) => res.id !== id);
        data.push(result);
        fs.writeFile(f_path, JSON.stringify(data), "utf-8", (err) => {
          if (err){
            console.log(err);
          }
        });
      }
    });
  }
};

module.exports = product;

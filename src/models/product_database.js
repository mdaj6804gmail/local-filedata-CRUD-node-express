const db = require("./db");

/**
 *@param id
 * @param title
 * @param imageurl
 * @param price
 * @param description
 * */
const product = class product {
  static save(title, imageurl, price, description) {
    return db.execute(
      "INSERT INTO product (title, imageurl, price,description) VALUES (?, ?,?,?)",
      [title, imageurl, price, description],
      (err, result) => {
        if (err) {
          return err;
        } else {
          return result;
        }
      },
    );
  }

  static fetchProduct() {
    return db.execute(`SELECT * FROM product`);
  }
  static getById(id) {
    return db.execute(`SELECT * FROM product WHERE ID=${id}`);
  }

  static getIdByDelete(id) {
    return db.execute(`DELETE FROM product WHERE ID=${id}`);
  }

  static editePoduct(id, title, imageurl, price, description) {
    return db.execute(`UPDATE product SET price=${price} WHERE ID=${id}`)
  }
};

module.exports = product;

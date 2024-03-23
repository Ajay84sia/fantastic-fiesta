const db = require("../config/db");

const Womens = {};

Womens.getAll = (callback) => {
    const query = "SELECT * FROM womens";
    db.query(query, callback);
};

module.exports = Womens;
const Sequelize = require("sequelize");
const db = require("../config/sequelize");

const OrderProduct = db.define(
  "OrderProduct",
  {
    id: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    order_id: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
    },
    product_id: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
    },
  },
  {
    timestamps: false,
    tableName: "orders_products",
  }
);
module.exports = OrderProduct;

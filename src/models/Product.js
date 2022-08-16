const Sequelize = require("sequelize");
const db = require("../config/sequelize");
const Order = require("./Order");
const OrderProduct = require("./OrderProduct");

const Product = db.define(
  "Product",
  {
    id: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: Sequelize.DataTypes.STRING(200),
    },
    price: {
      type: Sequelize.DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    quantity: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
      defaultValue: 0,
    },
  },
  {
    timestamps: false,
  }
);

Product.belongsToMany(Order, {
  through: OrderProduct,
  foreignKey: "product_id",
});
Order.belongsToMany(Product, {
  through: OrderProduct,
  foreignKey: "order_id",
});

module.exports = Product;

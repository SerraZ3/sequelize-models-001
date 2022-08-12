const db = require("../config/sequelize");
const { DataTypes } = require("sequelize");

const Order = db.define(
  "Order",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    create_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("processando", "a caminho", "entregue"),
      defaultValue: "processando",
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Order;

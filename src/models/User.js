const db = require("../config/sequelize");
const Sequelize = require("sequelize");
const Order = require("./Order");

const User = db.define(
  "User",
  {
    id: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.DataTypes.STRING(100),
      // Não permite valor nulo
      // Por padrão ele permite nulo
      allowNull: false,
    },
    email: {
      type: Sequelize.DataTypes.STRING(100),
      allowNull: false,
    },
    birthdate: {
      type: Sequelize.DataTypes.DATE,
    },
  },
  {
    // Não criar tabela com os campos created_at e updated_at
    timestamps: false,
  }
);

User.hasMany(Order, {
  foreignKey: "user_id",
});
Order.belongsTo(User, {
  foreignKey: "user_id",
});
module.exports = User;

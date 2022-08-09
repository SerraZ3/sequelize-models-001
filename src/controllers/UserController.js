const Sequelize = require("sequelize");
const configDB = require("../config/database");
const db = new Sequelize(configDB);

const userController = {
  index: async (req, res) => {
    try {
      const users = await db.query("SELECT * FROM users;", {
        type: Sequelize.QueryTypes.SELECT,
      });
      res
        .status(200)
        .json({ data: users, message: "Busca realizada com sucesso" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Erro na busca de usuários" });
    }
  },
  show: async (req, res) => {
    const { id } = req.params;
    try {
      // const users = await db.query(`SELECT * FROM users WHERE id = ${id}`, {
      //   type: Sequelize.QueryTypes.SELECT,
      // });
      const users = await db.query(`SELECT * FROM users WHERE id = :id`, {
        replacements: {
          id,
        },
        type: Sequelize.QueryTypes.SELECT,
      });
      console.log(users);
      if (users.length === 0) {
        //Faz o código parar nessa linha
        //E cai no catch
        throw Error("USER_NOT_FOUND");
      }
      res.status(200).json({ data: users[0] });
    } catch (error) {
      console.log(error);
      if (error.message === "USER_NOT_FOUND") {
        res.status(400).json({ message: "Usuário não encontrado" });
      } else {
        res.status(400).json({ message: "Erro ao encontrar usuário" });
      }
    }
  },
  store: async (req, res) => {},
  update: async (req, res) => {},
  destroy: async (req, res) => {},
};
module.exports = userController;

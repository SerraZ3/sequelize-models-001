const express = require("express");

const router = express.Router();

const userController = require("../controllers/UserController");

router.get("/", userController.index);
router.get("/:id", userController.show);
router.post("/", userController.store);
router.put("/:id", userController.update);
router.patch("/:id", userController.update);
router.delete("/:id", userController.destroy);

module.exports = router;

const express = require("express");
const { response } = require("./app");
const tasksController = require("./controller/tasksController");
const router = express.Router();

router.get("/tasks", tasksController.gettAll);
router.post("/tasks", tasksController.creatTask);

module.exports = router;

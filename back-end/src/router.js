const express = require("express");
const router = express.Router();
const { response } = require("./app");
const tasksController = require("./controller/tasksController");
const tasksMiddleware = require("./middlewares/tasksMiddleware");

router.get("/tasks", tasksController.getAll);
router.post("/tasks", tasksMiddleware.validateBody, tasksController.createTask);
router.delete("/tasks/:id", tasksController.deleteTask);
router.put("/tasks/:id", tasksMiddleware.validateFieldTitle, tasksMiddleware.validateBody,  tasksController.updateTask);

module.exports = router;

const tasksModel = require("../models/tasksModels");
const gettAll = async (_request, response) => {
  const tasks = await tasksModel.getAll();

  return response.status(200).json(tasks);
};

const creatTask = async (request, response) => {
  // const createdTask = await tasksModel.creatTask
  return response.status(201).json({ message: "Ok" });
};

module.exports = {
  gettAll,
  creatTask,
};

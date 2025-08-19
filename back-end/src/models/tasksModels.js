const connection = require("./connection");

const getAll = async () => {
  const [tasks] = await connection.execute("SELECT * FROM tasks");
  return tasks;
};

const creatTask = async (task) => {
  const { title } = task;

  const dateUTC = new Date(date.now()).toUTCString;

  const query = "INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)";

  const [creatdTask] = await connection.execute(query, [title, "pendente", dateUTC,]);

  return creatTask;
};

module.exports = {
  getAll,
  creatTask,
};

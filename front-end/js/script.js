const fetchTasks = async () => {
  const response = await fetch("http://localhost:3333/tasks");
  const tasks = await response.json();
  return tasks;
};

const createElement = (tag, innerText = "") => {
  const element = document.createElement(tag);
  element.innerText = innerText;
  return element;
};

const creatRow = (task) => {
  const { id, title, created_at, status } = task;

  const tr = createElement("tr");
  const tdTitle = createElement("td", "titulo da task");
  tdTitle.innerText = title;
};

// parou no minuto 45:20 do video sobre o front <

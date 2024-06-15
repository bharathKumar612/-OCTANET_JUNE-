const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const taskItem = createTaskItem(taskText);
    taskList.prepend(taskItem);
    taskInput.value = "";
  }
}

function createTaskItem(text) {
  const taskItem = document.createElement("li");
  const taskText = document.createElement("span");
  taskText.textContent = text;

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.classList.add("completeBtn");
  completeBtn.addEventListener("click", () => {
    taskText.style.textDecoration =
      taskText.style.textDecoration === "line-through"
        ? "none"
        : "line-through";
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(taskText);
  taskItem.appendChild(completeBtn);
  taskItem.appendChild(deleteBtn);

  return taskItem;
}

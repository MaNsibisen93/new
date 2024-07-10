const addTaskBtn = document.querySelector("#addTaskBtn");
const newTaskInput = document.querySelector("#newTask");
const todoList = document.querySelector("#todolist");

function createTaskElement(taskText) {
  let taskElement2 = document.createElement("div");
  taskElement2.innerHTML = `
    <span>${taskText}</span>
    <button id="editTask"> Edit</button>
    <button id="deleteTask"> delete</button>`;

  let deleteBtn = taskElement2.querySelector("#deleteTask");
  deleteBtn.addEventListener("click", () => {
    taskElement2.remove();
  });

  let editBtn = taskElement2.querySelector("#editTask");
  editBtn.addEventListener("click", () => {
    let newTaskText = prompt("edit the task", taskText);
    if (newTaskText !== "") {
      taskElement2.querySelector("span").innerText = newTaskText;
    }
  });

  return taskElement2;
}
addTaskBtn.addEventListener("click", () => {
  let taskText = newTaskInput.value;
  if (taskText != "") {
    let taskElement1 = createTaskElement(taskText);
    todoList.appendChild(taskElement1);
    newTaskInput.value = "";
  }
});

// Select elements
const taskInput = document.getElementById("taskInput");
const deadlineInput = document.getElementById("deadlineInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Array to store tasks
let tasks = [];

// Add a task
function addTask() {
  const taskText = taskInput.value.trim();
  const deadline = deadlineInput.value;

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a new task object with ID, text, completion status, and deadline
  const task = {
    id: Date.now(),
    text: taskText,
    completed: false,
    deadline: deadline || "No deadline",
  };
  tasks.push(task);

  taskInput.value = "";
  deadlineInput.value = "";

  renderTasks();
}

// Edit a task
function editTask(id) {
  tasks = tasks.map((task) => {
    if (task.id === id) {
      const newTaskText = prompt("Edit your task:", task.text);
      if (newTaskText && newTaskText.trim() !== "") {
        return { ...task, text: newTaskText };
      }
    }
    return task;
  });

  renderTasks();
}

// Mark a task as done
function markAsDone(id) {
  tasks = tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  renderTasks();
}

// Delete a task
function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  renderTasks();
}

// Render tasks
function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    // Check if the task is overdue
    const isOverdue =
      task.deadline !== "No deadline" && new Date(task.deadline) < new Date();

    const taskItem = document.createElement("div");
    taskItem.className = `task ${task.completed ? "completed" : ""} ${
      isOverdue ? "overdue" : ""
    }`;

    taskItem.innerHTML = `
      <span>${task.text}</span>
      <small>Deadline: ${task.deadline}</small>
      <div>
        <button class="edit-btn" onclick="editTask(${task.id})">Edit</button>
        <button class="done-btn" onclick="markAsDone(${task.id})">
          ${task.completed ? "Undo" : "Done"}
        </button>
        <button class="delete-btn" onclick="deleteTask(${
          task.id
        })">Delete</button>
      </div>
    `;

    taskList.appendChild(taskItem);
  });
}

// Event listener for Add Task button
addTaskBtn.addEventListener("click", addTask);

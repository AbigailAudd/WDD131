// Global tasks array
let tasks = [];

// Function to render tasks
function renderTasks() {
  const todoList = document.getElementById('todoList');
  todoList.innerHTML = '';

  tasks.forEach((task) => {
    const taskElement = document.createElement('li');
    taskElement.className = task.completed ? 'strike' : '';

    taskElement.innerHTML = `
      <p>${task.detail}</p>
      <div>
        <span data-function="delete">❎</span>
        <span data-function="complete">✅</span>
      </div>
    `;

    todoList.appendChild(taskElement);
  });
}

// Function to add a new task
function newTask() {
  const taskInput = document.getElementById('todo').value.trim();
  if (taskInput === '') return; // Prevent adding empty tasks

  tasks.push({ detail: taskInput, completed: false });
  document.getElementById('todo').value = ''; // Clear input
  renderTasks();
}

// Function to manage task actions (delete/complete)
function manageTasks(event) {
  const action = event.target.dataset.function;
  const taskElement = event.target.closest('li');

  if (action === 'delete') {
    tasks = tasks.filter((task) => task.detail !== taskElement.querySelector('p').innerText);
    taskElement.remove();
  }

  if (action === 'complete') {
    const taskIndex = tasks.findIndex(
      (task) => task.detail === taskElement.querySelector('p').innerText
    );
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    renderTasks();
  }
}

// Add event listeners
document.getElementById('submitTask').addEventListener('click', newTask);
document.getElementById('todoList').addEventListener('click', manageTasks);

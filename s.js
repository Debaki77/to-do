
const taskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const searchBox = document.querySelector('.search-box');
const filterButtons = document.querySelectorAll('.filter button');

let tasks = [];

// Add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  tasks.push({ id: Date.now(), text: taskText, completed: false });
  taskInput.value = ''; // Clear input
  renderTasks(tasks);
}

// Render tasks
function renderTasks(taskArray) {
  taskList.innerHTML = taskArray.map(task => `
    <li data-id="${task.id}" class="${task.completed ? 'completed' : ''}">
      <span>${task.text}</span>
      <button class="complete-btn">${task.completed ? 'Undo' : 'Complete'}</button>
      <button class="delete-btn">Delete</button>
    </li>
  `).join('');
}

// Task completion and delete
taskList.addEventListener('click', (e) => {
  const id = Number(e.target.parentElement.dataset.id);
  if (e.target.classList.contains('complete-btn')) {
    tasks = tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
  } else if (e.target.classList.contains('delete-btn')) {
    tasks = tasks.filter(task => task.id !== id);
  }
  renderTasks(tasks);
});

// Search tasks
searchBox.addEventListener('input', () => {
  const filteredTasks = tasks.filter(task => task.text.toLowerCase().includes(searchBox.value.toLowerCase()));
  renderTasks(filteredTasks);
});

// Filter tasks
filterButtons.forEach(button => button.addEventListener('click', () => {
  const filter = button.id.split('-')[1];
  const filteredTasks = filter === 'all' ? tasks: filter === 'completed' ? tasks.filter(task => task.completed)
 : tasks.filter(task => !task.completed);
  renderTasks(filteredTasks);
}));

// Add task button
addTaskButton.addEventListener('click', addTask);

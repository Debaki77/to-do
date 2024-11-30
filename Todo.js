// Getting form elements
const inputField = document.getElementById("inputfield");
const addButton = document.getElementById("addToDo");
const tableBody = document.getElementById("tableBody");
const errorMessage = document.getElementById("error-Message"); // Error message element

// Initialize the table body
tableBody.innerHTML = "";

// Array to store submitted data
let tasks = [];
let editIndex = null; // Index of the task being edited

// Add event listener for button click
addButton.addEventListener("click", function () {
  const taskValue = inputField.value.trim();
  
  // Clear previous error message
  errorMessage.textContent = '';

  // Validation: Ensure task is not empty
  if (taskValue === '') {
    errorMessage.textContent = "Task is required";
    inputName.classList.add("error-border");
    return;
  } else {
    inputField.classList.remove("error-border");
  }

  if (editIndex === null) {
    // Add new task
    tasks.push(taskValue);
  } else {
    // Edit existing task
    tasks[editIndex] = taskValue;
    editIndex = null; // Reset editIndex after editing
    addButton.innerText = 'Add Task'; // Change button text back to "Add Task"
  }

  inputfield.value = ''; // Clear input field
  displayTasks(); // Update the table
});

// Function to display tasks in the table
function displayTasks() {
  tableBody.innerHTML = ''; // Clear the table before displaying

  tasks.forEach((task, index) => {
    tableBody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${task}</td>
        <td>
          <button class="btn btn-sm btn-primary" onclick="editTask(${index})">
            <i class="fas fa-edit"></i>
          </button>
          <button class="btn btn-sm btn-danger" onclick="deleteTask(${index})">
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    `;
  });
}

// Edit task
function editTask(index) {
  inputField.value = tasks[index]; 
  editIndex = index; 
  addButton.innerText = 'Edit'; // Change button text to "Edit"
}

// Delete task
function deleteTask(index) {
  tasks.splice(index, 1); // Remove task from the array
  displayTasks(); // Update the task list
  addButton.innerText = 'Add Task'; // Reset button text after deletion
  inputField.value = ''; // Clear input field after deletion
}

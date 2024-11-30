
  // Get references to elements
  const inputName = document.getElementById('input-name');
  const addButton = document.querySelector('.add-btn');
  const userList = document.getElementById('user-list');

  let users = [];
  let editIndex = null;

  // Add or Edit user
  addButton.addEventListener('click', function () {
    const enteredName = inputName.value.trim();
    
    if (enteredName === '') {
      alert('Please enter a valid name.');
      return;
    }

    if (editIndex === null) {
      // Add a new user
      users.push(enteredName);
    } else {
      // Edit an existing user
      users[editIndex] = enteredName;
      editIndex = null;
      addButton.innerText = 'Add User';
    }

    inputName.value = ''; // Clear the input field
    displayUsers(); // Update the table with the new list
  });

  // Function to display the user list in the table
  function displayUsers() {
    userList.innerHTML = ''; // Clear the current list

    users.forEach((user, index) => {
      const row = `<tr>
          <td>${index + 1}</td>
          <td>${user}</td>
          <td>
            <button class="edit-btn" onclick="editUser(${index})"><i class="fas fa-edit"></i></button>
            <button class="delete-btn" onclick="deleteUser(${index})"><i class="fas fa-trash-alt"></i></button>
          </td>
        </tr>`;
      userList.innerHTML += row;
    });
  }

  // Edit a user
  function editUser(index) {
    inputName.value = users[index]; // Set the input field to the selected user's name
    editIndex = index;
    addButton.innerText = 'Save User';
  }

  // Delete a user
  function deleteUser(index) {
    users.splice(index, 1); // Remove the user from the array
    displayUsers(); // Update the table
  }


const inputBox= document.getElementById('inputBox');
const addBtn= document.getElementById('addBtn');
const todoList= document.getElementById('todoList');

const addTodo=()=>{
    const inputText= inputBox.ariaValueMax.trim();
    if(inputText.length<= 0){
        alert("You must write something in your to do");
    }

    const li= document.createElement("li");
    const p= document.createElement("p");
    p.innerHTML= inputText;
    li.appendChild(p);

    todoList.appendChild(li);
}
addBtn.addEventListener('click', addTodo);
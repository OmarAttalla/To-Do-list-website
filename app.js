//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//EventListeners
todoButton.addEventListener("click", addTodo);

//Functions
function addTodo(event){
    event.preventDefault(); //prevents form from submitting
    
    //To-do item div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //add checkmark button
    const checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fas fa-check"></i>';
    checkButton.classList.add("check-btn");
    todoDiv.appendChild(checkButton);

    //add trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //append todo div to todolist
    todoList.appendChild(todoDiv);

    //Clear input from
    todoInput.value=" ";
}
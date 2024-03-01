function showCat(select) {
    if (select.value == 1) {
        document.getElementById('add-category').style.display = "block";
    } else {
        document.getElementById('add-category').style.display = "none";
    }
}

function addToDo(){
    const todoInput = document.getElementById('task-name');
    const todoList = document.getElementById('todo-list');
    const completedList = document.getElementById('completed-list');


    if(todoInput.value.trim() !== ''){
        const newTodoItem = document.createElement('li');
        newTodoItem.className = 'todo-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const todoText = document.createElement('span');
        todoText.textContent = todoInput.value;

        checkbox.onclick = function () {
            if (newTodoItem.parentNode === todoList) {
                completedList.appendChild(newTodoItem);
            } else {
                todoList.appendChild(newTodoItem);
            }
        };

        newTodoItem.appendChild(checkbox);
        newTodoItem.appendChild(todoText);

        todoList.appendChild(newTodoItem);
        
        todoInput.value = '';
    }
}

function deleteCompleted(){
    const completedList = document.getElementById('completed-list');
    completedList.innerHTML = '';
}

function addCategory(){
    const categoriesList = document.getElementById("categories");
    const newCategory = document.createElement("option");
    const newCategoryText = document.getElementById('newCategory')
    newCategory.text = newCategoryText.value.trim();
    categoriesList.add(newCategory);
    document.getElementById('add-category').style.display = "none";


    
}
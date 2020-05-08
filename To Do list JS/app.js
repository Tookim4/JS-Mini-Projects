//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterList = document.querySelector('.filter-todo');

//Event listners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodo);
filterList.addEventListener('click', filterTodo);


//functions
function addTodo(Event) {
    //prevent form reload
    event.preventDefault();
    //Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //todo li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //todo mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML ='<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-button');
    todoDiv.appendChild(completedButton);
    //todo trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-button');
    todoDiv.appendChild(trashButton); 
    //append  to div
    todoList.appendChild(todoDiv);
    //clear todo input value
    todoInput.value = '';
}

function deleteTodo(e) {
    const item = e.target;
    //delete todo
    if (item.classList[0] === 'trash-button'){
        const todo = item.parentElement;
        //delete animation
        todo.classList.add('fall');
        //wait for animation then delete
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
        
    }
    //check mark
    if (item.classList[0] === 'complete-button'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case 'all':
                todo.style.display = 'flex';
                break;
                //completed todos right here
            case 'completed':
                if (todo.classList.contains('completed')){
                    todo.style.display = 'flex';    
                }else {
                    todo.style.display = 'none';
                }
                break;
                //display the uncompleted todos
            case 'uncompleted':
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else {
                    todo.style.display = 'none';
                }
                break;
        }
    });
}
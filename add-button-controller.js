const addTodoButtonQuery = document.querySelector('.add-todo')
addTodoButtonQuery.addEventListener('click', function(todo) {
    let todoInputQuery = document.querySelector('.todo-input')
    const newTodosObj = {};
    newTodosObj.text = todoInputQuery.value;
    newTodosObj.id = todos[todos.length - 1].id + 1
    newTodosObj.complete = false;
    newTodosObj.priority = Number(document.querySelector('.priority').value);
    addTodo(newTodosObj);
    printTodo(newTodosObj);
});

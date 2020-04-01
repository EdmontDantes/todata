const printTodo = function(todo) {
  // Use `document.createElement` to make an <li>
  const li = document.createElement('li');
  li.innerText = todo.text;

  // Query the ul and put it in a variable.
  const ul = document.querySelector('.todo-list');

  // Append the li we made to the ul as the last child.
  ul.appendChild(li);


  // Give the name <p> a complete class if it was complete already (as in dummy data, or loaded data if we had a back end.
  if (todo.complete) {
    li.classList.add('complete')
  }

  // Give the <li> a layout class and an id so we can find it later (for instance in the ).
  li.classList.add('todo-item');
  li.id = todo.id.toString();

  // Give the name <p> an event listener to toggle its completeness.
  li.addEventListener('click', function(event) {
    event.target.classList.toggle('complete')
    todos.
    // TODO: find the correct todo in your data to toggle the completeness of!
    
  })
}


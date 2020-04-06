

/********************
 * HELPER FUNCTIONS *
 ********************/

const getTodoName = function(todo) {
  return todo.text
}

const getCompleteness = function (todo) {
  return todo.complete
}

const getPriority = function (todo) {
  return todo.priority
}

const isComplete = function(todo) {
  return todo.complete
}

const isNotComplete = function(todo) {
  return !isComplete(todo);
}

const isHighPriority = function(todo) {
  return todo.priority === 2
}

const isLowPriority = function(todo) {
  return todo.priority === 1
}

const helperCompleteFirst = function (todo1, todo2) {
  todo1 = todo1.complete;
  todo2 = todo2.complete;
  return todo1 - todo2;
}

const helperPriority2First = function (todo1, todo2) {
  todo1 = todo1.priority;
  todo2 = todo2.priority;
  return todo2 - todo1;
}


/***********************
 * ITERATION FUNCTIONS *
 ***********************/

const names = function (todos) {
  return todos.map(getTodoName)
}

const namesAndPriorities = (todos) => todos.map((todo) => {
  const priority = todo.priority === 2 ? 'High' : 'Low';
  todo.text = `${todo.text} - ${priority}`
  return todo
})

const justNotComplete = function (todos) {
  return todos.filter(isNotComplete)
}

const justComplete = function (todos) {
  return todos.filter(isComplete)
}

const priority2Only = function (todos) {
  return todos.filter(isHighPriority)
}

const priority1Only = function (todos) {
  return todos.filter(isLowPriority)
}

const CompleteFirst = function (todos) {
  return [...todos].sort(helperCompleteFirst);
}

const priority2First = function (todos) {
  return [...todos].sort(helperPriority2First);
}


const togglePrioritiesSliceToOriginal = (todos) => todos.map((todo) => {
  todo.text = todo.text.slice(0,todo.text.indexOf('-'))
    return todo
})

module.exports = {
  getTodoName,
  getCompleteness,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  namesAndPriorities,
  justNotComplete,
  justComplete,
  priority2Only,
  priority1Only,
  notCompleteFirst,
  priority2First,
}

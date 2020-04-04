document.querySelector('.toggle-priorities').addEventListener(
    'click', function(event) {
    const pressButtonToggle = document.querySelector('.toggle-priorities');
    if (pressButtonToggle.innerText === 'Show Priorities') {
        pressButtonToggle.innerText = 'Hide Priorities';
        currentTodos = namesAndPriorities(currentTodos);
        } else if (pressButtonToggle.innerText === 'Hide Priorities') {
        pressButtonToggle.innerText = 'Show Priorities';
        // currentTodos = togglePrioritiesSliceToOriginal(currentTodos);
        }
        refreshTodos();
    });
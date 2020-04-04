document.querySelector('.toggle-priorities').addEventListener(
    'click', function(event) {
        let pressButton = document.querySelector('.toggle-priorities');

        if (pressButton.innerText === 'Show Priorities') {
            pressButton.innerText = 'Hide Priorities';
            currentTodos = namesAndPriorities(currentTodos);
            
        } else if (pressButton.innerText === 'Hide Priorities') {
            pressButton.innerText = 'Show Priorities';
            // currentTodos = togglePrioritiesSliceToOriginal(currentTodos);
        }
        refreshTodos();
    }
)
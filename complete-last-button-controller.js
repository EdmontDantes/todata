document.querySelector('.complete-last').addEventListener('click', function() {
    const pressButttonCompleteLast = document.querySelector('.complete-last');
    if (pressButttonCompleteLast.innerText === 'Complete Last') {
        pressButttonCompleteLast.innerText = 'Original Order';
        currentTodos = notCompleteFirst(todos);
    } else if (pressButttonCompleteLast.innerText === 'Original Order') {
        pressButttonCompleteLast.innerText = 'Complete Last';
        currentTodos = [...todos];
    }
    refreshTodos();
    });
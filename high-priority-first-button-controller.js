document.querySelector('.high-priority-first').addEventListener('click', function() {
    let pressButttonHighPriority = document.querySelector('.high-priority-first');
    if (pressButttonHighPriority.innerText === 'High Priority First') {
        pressButttonHighPriority.innerText = 'Original Order';
        currentTodos = priority2First(todos);
    } else if (pressButttonHighPriority.innerText === 'Original Order') {
        pressButttonHighPriority.innerText = 'High Priority First';
        currentTodos = [...todos];
    }
    refreshTodos();
    })
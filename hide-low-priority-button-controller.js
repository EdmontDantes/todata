document.querySelector('.hide-low-priority').addEventListener('click', function() {
    const pressButtonHideLowPriority = document.querySelector('.hide-low-priority');
    if (pressButtonHideLowPriority.innerText === 'Hide Low Priority') {
        currentTodos = priority2Only(currentTodos);
        pressButtonHideLowPriority.innerText = 'Original Order';
    } else if (pressButtonHideLowPriority.innerText === 'Original Order') {
        currentTodos = [...todos]
        pressButtonHideLowPriority.innerText = 'Hide Low Priority';
    }
    refreshTodos();
    });
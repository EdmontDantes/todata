document.querySelector('.hide-complete').addEventListener('click', function() {
    const pressButtonHideComplete = document.querySelector('.hide-complete')
    if (pressButtonHideComplete.innerText === 'Hide Complete') {
        pressButtonHideComplete.innerText = 'Original Order';
        currentTodos = justNotComplete(currentTodos);
    } else if (pressButtonHideComplete.innerText === 'Original Order') {
        pressButtonHideComplete.innerText = 'Hide Complete';
        currentTodos = [...todos];
    }
    refreshTodos();
    });
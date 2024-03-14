

sessionAddTaskBtn.addEventListener('click', () => {
    // Get existing session storage's content, if any. Otherwise, return an empty array:
    const currentTodoArray =
      JSON.parse(sessionStorage.getItem('codesweetlyStore')) || [];
  
    // Merge currentTodoArray with the user's new input:
    const newTodoArray = [
      ...currentTodoArray,
      { checked: false, text: sessionInputEle.value },
    ];
  
    // Add newTodoArray to the session storage object:
    sessionStorage.setItem('codesweetlyStore', JSON.stringify(newTodoArray));
  
    const todoLiElements = createTodoLiElements(newTodoArray);
    sessionTodosContainer.replaceChildren(...todoLiElements);
    sessionInputEle.value = '';
  });

window.addEventListener('load', () => {
    // Get existing local storage's content, if any. Otherwise, return an empty array:
    const localTodoArray =
      JSON.parse(localStorage.getItem('codesweetlyStore')) || [];
  
    // Use the retrieved localTodoArray to create <li> elements:
    const todoLiElements = createTodoLiElements(localTodoArray);
  
    // Populate the tasks display space with the todoLiElements:
    localTodosContainer.replaceChildren(...todoLiElements);
  });
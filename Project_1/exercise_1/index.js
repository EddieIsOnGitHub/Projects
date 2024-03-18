
const localTodoTasksArray = localStorage.getItem("toDolist") ? JSON.parse(localStorage.getItem("toDolist")) : [];
const localTodosContainer = document.getElementById(
  'local-storage-todos-container'
);

const localInputEle = document.getElementById('localText');
const localAddTaskBtn = document.getElementById('local-storage-add-task-btn');

const input1 = document.querySelector("input"),
input = document.querySelector("input");
input.innerHTML = localStorage.getItem("value");
input.addEventListener("keyup", display);

function display() {
  localStorage.setItem("value", input1.value);
  input1.innerHTML = localStorage.getItem("value")
}



const sessionTodoTasksArray = [];
const sessionTodosContainer = document.getElementById(
  'session-storage-todos-container'
);
const sessionInputEle = document.getElementById(
  'session-storage-todo-input-ele'
);
const sessionAddTaskBtn = document.getElementById(
  'session-storage-add-task-btn'
);

if (localTodoTasksArray.length > 0) {

}

function createTodoLiElements(todoArray, sectionType) {
  // Return an array of <li> elements
  // Example:
  // [
  //   <li>
  //     <input type="checkbox" id="local-chbx-0" />
  //     <label for="local-chbx-0">Dance</label>
  //   </li>,
  //   <li>
  //     <input type="checkbox" id="local-chbx-1" />
  //     <label for="local-chbx-1">Sing</label>
  //   </li>
  // ]
  return todoArray.map((i, index) => {
    // Create 3 elements:
    const liElement = document.createElement('li');
    const checkboxEle = document.createElement('input');
    const labelEle = document.createElement('label');

    // Add 2 attributes to the <input> element:
    checkboxEle.setAttribute('type', 'checkbox');
    checkboxEle.setAttribute('id', `${sectionType}-chbx-${index}`);

    // Add 1 attribute to the <label> element:
    labelEle.setAttribute('for', `${sectionType}-chbx-${index}`);

    // Add a click event to the <input> element:
    checkboxEle.addEventListener('click', (e) => {
      todoArray[e.target.getAttribute('id').split('-')[2]].checked =
        !todoArray[e.target.getAttribute('id').split('-')[2]].checked;
      labelEle.classList.toggle('todo-task-done');
    });

    labelEle.textContent = i.text; // Add text to the <label> element
    liElement.append(checkboxEle, labelEle); // Put <input> and <label> inside the <li>
    return liElement;
  });

}
function save (){
  
}

// Add a click event to the Local section's button:
localAddTaskBtn.addEventListener('click', () => {
  const newTodoInfo = { checked: false, text: localInputEle.value };
  localTodoTasksArray.push(newTodoInfo);

  localStorage.setItem("toDoList", JSON.stringify(localTodoTasksArray));

  const todoLiElements = createTodoLiElements(localTodoTasksArray, 'local');
  localTodosContainer.replaceChildren(...todoLiElements);
  localInputEle.value = '';
});

// Add a click event to the Session section's button:
sessionAddTaskBtn.addEventListener('click', () => {
  const newTodoInfo = { checked: false, text: sessionInputEle.value };
  sessionTodoTasksArray.push(newTodoInfo);

  const todoLiElements = createTodoLiElements(sessionTodoTasksArray, 'session');
  sessionTodosContainer.replaceChildren(...todoLiElements);
  sessionInputEle.value = '';
});

console.log(localTodoTasksArray)
function reDisplay() {
  let array = "";
  localTodoTasksArray.forEach(element => {
    array += element;

  });
  localTodosContainer.innerHTML = array
  console.log("hi")
};
// window.onload = reDisplay
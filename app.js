let inputTask = document.querySelector('#task');
let addBtn = document.querySelector('.btn-add');
let todo = document.querySelector('.list');

let todoList = [];

if (localStorage.getItem('todo')) {
  todoList = JSON.parse(localStorage.getItem('todo'));
  displayTodoList();
}

addBtn.addEventListener('click', function () {
  let newTodo = {
    todo: inputTask.value,
    checked: false,
    important: false,
  };

  todoList.push(newTodo);
  displayTodoList();

  localStorage.setItem('todo', JSON.stringify(todoList));
});

function displayTodoList() {
  let displayTodo = '';
  todoList.forEach(function (item, i) {
    displayTodo += `
    <li>
      <input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
      <label for='item_${i}'>${item.todo}</label>
    </li>
    `;
    todo.innerHTML = displayTodo;
  });
}

todo.addEventListener('change', function (event) {
  let idInput = event.target.getAttribute('id');
  let valueLabel = todo.querySelector('[for=' + idInput + ']').innerHTML;

  todoList.forEach(function (item) {
    if (item.todo === valueLabel) {
      item.checked = !item.checked;
      localStorage.setItem('todo', JSON.stringify(todoList));
    }
  });
});

// document.addEventListener('DOMContentLoaded', function () {
//   addBtn.addEventListener('click', addTask);
// });

// function addTask() {
//   if (inputTask.trim() !== '') {
//     let taskList = document.querySelector('list');
//     let addLi = document.createElement('li');
//     addLi.innerHTML = inputTask;
//     taskList.appendChild(addLi);
//     inputTask = '';
//   }
// }
// console.log(addTask());

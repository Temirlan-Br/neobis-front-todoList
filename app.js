let inputTask = document.querySelector('#task');
let addBtn = document.querySelector('.btn-add');
let todo = document.querySelector('.list');

let todoList = [];

// if (localStorage.getItem('todo')) {
//   todoList = JSON.parse(localStorage.getItem('todo'));
//   displayTodoList();
// }

addBtn.addEventListener('click', function () {
  let newTodo = {
    todo: inputTask.value,
    checked: false,
    important: false,
  };
  if (inputTask.value.trim() === '') {
    inputTask.value = '';
  } else {
    todoList.push(newTodo);
    displayTodoList();
  }

  // localStorage.setItem('todo', JSON.stringify(todoList));
});

function displayTodoList() {
  let displayTodo = '';
  todoList.forEach(function (item, i) {
    displayTodo += `
    <li class='list__item'>
      <div class='textInList'>
        <input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
        <label class='item' for='item_${i}'>${item.todo}</label>
      </div>
      <div class='btnInList'>
        <button class="btnInList edit">Edit</button>
        <button class="btnInList delete">Delete</button>
      </div>
    </li>
    `;
    todo.innerHTML = displayTodo;
  });
  inputTask.value = '';

  editBtn();
  deleteBtn();
}

todo.addEventListener('change', function (event) {
  let idInput = event.target.getAttribute('id');
  let valueLabel = todo.querySelector('[for=' + idInput + ']').innerHTML;

  todoList.forEach(function (item) {
    if (item.todo === valueLabel) {
      item.checked = !item.checked;
      // localStorage.setItem('todo', JSON.stringify(todoList));
    }
  });
});

function editBtn() {
  const editBtn = document.querySelectorAll('.edit');
  const task = document.querySelectorAll('.item');
  for (let i = 0; i < editBtn.length; i++) {
    editBtn[i].addEventListener('click', () => {
      task[i].contentEditable = true;
      task[i].focus();
    });
  }
}
function deleteBtn() {
  const deleteBtn = document.querySelectorAll('.delete');
  const itemList = document.querySelectorAll('.list__item');
  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener('click', () => {
      itemList[i].remove();
    });
  }
}

const todoApp = document.getElementById('todoApp');
const todoForm = document.getElementById('todoForm');
const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('inputTaskField');

todoForm.addEventListener('submit', onAddItem);

function onAddItem(e) {
  e.preventDefault();
  if (!taskInput.value.trim()) {
    alert("Enter task");
    return;
  }
  const li = document.createElement('li');
  li.innerHTML = `
    ${taskInput.value}
    <button onclick="removeItem(this)">X</button>
  `
  taskList.appendChild(li)
  taskInput.value = ""
}

function removeItem(btn) {
  if (btn) {
    btn.parentElement.remove();
  }
}

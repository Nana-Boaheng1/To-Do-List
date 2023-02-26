function createTodoElement(todo) {
  const todoItem = document.createElement("li");
  todoItem.classList.add("todo-item");

  const todoText = document.createElement("span");
  todoText.classList.add("todo-text");
  todoText.textContent = todo.text;

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
  deleteBtn.addEventListener("click", () => {
    deleteTodoItem(todoItem);
  });

  todoItem.appendChild(todoText);
  todoItem.appendChild(deleteBtn);

  return todoItem;
}

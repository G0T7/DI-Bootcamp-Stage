// app.js
const TodoList = require("./todo.js");

// Create an instance of the TodoList class
const todoList = new TodoList();

// Add tasks
todoList.addTask("Complete exercise 1");
todoList.addTask("Study for exam");
todoList.addTask("Buy groceries");

// Mark task at index 0 as complete
todoList.markTaskAsComplete(0);

// List all tasks
console.log("All tasks:");
todoList.listAllTasks();

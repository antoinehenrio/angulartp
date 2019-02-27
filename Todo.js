angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [
      {text:'learn AngularJS'},
      {text:'build an AngularJS app'}];
 
    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText});
      todoList.todoText = '';
	  todoList.todos.push({text:todoList.todoSector});
      todoList.todoSector = '';
	  todoList.todos.push({text:todoList.todoLeader});
      todoList.todoLeader = '';
    };
 
    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  });
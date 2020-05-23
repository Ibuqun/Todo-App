class Task {
  constructor(title){
      this.title = title;
  }
}

//UI CLASS
class UI {
  static displayTasks () {
 
     const tasks = Store.getTasks(); 

     tasks.forEach((task) => UI.addTaskToList(task));
  }
  static addTaskToList(task) {
      const list = document.querySelector('#task-list');
      const row = document.createElement('tr');

      row.innerHTML = `
          <td>${task.title}</td>
          <td><a href = "#" class = "btn btn-danger btn-sm delete">X</a></a></td>
      `;
      list.appendChild(row);
  }

  static deleteTask (el) {
      if (el.classList.contains('delete')) {
          el.parentElement.parentElement.remove();
      }
  }

  static showAlert(message, className) {
      const div = document.createElement('div');
      div.className = `alert alert-${className}`;
      div.appendChild(document.createTextNode(message));
      const container = document.querySelector(".container"); //Grabbed the parent element
      const form = document.querySelector("#book-form");
      container.insertBefore(div, form) //insert the div before the form inside the container

      //Vanish in 3 secs
      setTimeout(() => {
          document.querySelector('.alert').remove();
      }, 3000);
  }

  static clearFields () {
      document.querySelector('#title').value = '';
  }
}

//STORE CLASS (Handles storage withing the browser)
class Store {
  static getTasks () {
      let tasks;
      if (localStorage.getItem('tasks') === null ) {
        tasks = [];
      } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
      }
      return tasks;
  }

  static addTask(task) {
      const tasks = Store.getTasks();

      tasks.push(task);

      localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static removeTask (task) {
      const tasks = Store.getTasks(); 

      tasks.forEach((task, index) => {
          if (task.title === title) {
            tasks.splice(index, 1);
          }
      });

      localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

//Event: Display books
document.addEventListener('DOMContentLoaded', UI.displayTasks);
//Event: Add a book
document.querySelector('#todo-form').addEventListener('submit', (e) => {
  //Prevent default action
  e.preventDefault();
  //Get form values
  const title = document.querySelector('#title').value;

  //Validate
  if (title === ''){
      UI.showAlert('Please fill in all fields', 'danger');
  } else {
      //Instantiate a book
  const task = new Task(title);

  //Add book1 to UI
  UI.addTaskToList(task);

  //Add book to store
  Store.addTask(task);

  //Show success message
  UI.showAlert('Task Added', 'success');

  //Clear fields
  UI.clearFields();
  }
  
})

//Event: Remove book
document.querySelector('#task-list').addEventListener('click', (e) => {
  //Remove book from UI
  UI.deleteTask(e.target);

  //Remove book from Store
  Store.removeTask(e.target.parentElement.previousElementSibling.textContent);

  //Show success message
  UI.showAlert('Book Removed', 'success');
})
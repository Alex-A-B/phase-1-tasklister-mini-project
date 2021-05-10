document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // classes to be included 

  class TaskList {
    constructor() {
      this.tasks = [];
    }
    createNewTask(description) {
      const newTask = new Task(description);
      this.tasks.push(newTask);
    }
    setNewTaskPriority(priority) {
      const newTaskPriority = new Task(priority);
      this.tasks.style.color = priorityColor();
    }
    showTasks() {
      return this.tasks.map((task) => task.show()).join("");
    };
  };

  class Task {
    constructor(description) {
      this.description = description;
      this.priority = priority;
    }
    show() {
      return `<li> ${this.description} </li>`;
    }
  };

  // initialise the tasklist within DOM - had to be after classes load in (?)

  const taskList = new TaskList();

  // Variables for items in the DOM 
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");

  // Display the task list items. 
  const taskUnorderedList = document.getElementById("tasks"); 

  const showTasksApp = () => (taskUnorderedList.innerHTML = taskList.showTasks());

  // submit form event listener
  newTaskForm.addEventListener("submit", (event) =>  {
    event.preventDefault();
    taskList.createNewTask(newTaskDescription.value);
    taskList.setNewTaskPriority(newTaskPriority.value);
    event.target.reset(); // resets the text input box (is this a feature.png)
    showTasksApp();
  });
});

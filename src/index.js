document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // plan to build list maker
  // 1. create DOM variables from HTML ID's
  // 2. create functions/variables to collect and store the listDescription string.
  // 3. display listDescription in the list DOM
  // 4. stretch challenges/features 
  // feat 1 - reset form after pressing submit - implemented within submit eventListener
  // feat 2 - dropdown box HTML element - to affect CSS of list WIP
  // feat 3 - complete items marker (checkbox?) - Plan stage
 
  // Variables for items/places in the DOM 
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority"); // new feature expression WIP

  // Expressions/functions to display the task list items. 
  
  // Create array for taskList to be stored in.
  const taskList = [];
  
  // Variable to get list from 
  const taskUnorderedList = document.getElementById("tasks"); 

  // Expression function to format the task list HTML.
  const displayList = (input) => {
    return input.map( inputObj => {
      const taskObjHolder = inputObj;
        return `<li id="task"> ${taskObjHolder.taskName} </li>`; 
    });
  };

  // Expression function to return the taskList array to the TODO list HTML element via DOM. 
  const displayApp = () => {
    return  taskUnorderedList.innerHTML = displayList(taskList).join("");
  };

  // This function expression creates an object which is pushed to the taskList array.
  // it takes two params, ideally the task description and the task priority from the inputs from the HTML form.
  // it checks if the taskName is a repeat task with an if/else statement
  // if repeated it should change priority to new priority [NYI - WIP]
  // else it returns an object which is pushed into the array when the submit eventListener is triggered.
  
    const taskObject = (description, priority) => {
      // let repeatTask = taskList.find(task => task.taskName === description)
      // if(!!repeatTask){
      //   repeatTask.taskPriority.pop(); // throws error here and won't continue
      //   repeatTask.taskPriority.push(priority)
      // } else{
      taskList.push({taskName: description, taskPriority: priority});
      // }
      return taskList
  };

    // new features code 

    // colors priority list thought process
    // create dropdown in HTML file (not sure if needs to be injected via JS or not)
    // create object to pair the priorityValue to a Color
    // attach to each priorityValue string in main taskList array 
    // use priority flag to affect CSS color via li.style.color = priorityValue or something like that

    const colorsForPriority = {
      Highest: "red",
      High: "orange",
      Medium: "green",
      Low: "blue",
      Lowest: "violet",
    };  

    const priorityColors = (input) => {
      return input.map( inputObj => {
        const taskObjHolder = inputObj;
         return document.getElementById("task").style.color = colorsForPriority[taskObjHolder.taskPriority];
      })
    };
    
    const displayColors = () => {
      return  priorityColors(taskList);
    };

   // Event Listeners

   // submit form event listener function. 
   // the eventListener will be the 'workhorse' function for the list builder
   // it will preventDefault action of submit button
   // it will push() the newTaskDescriptions to the taskList array
   // it does this via the taskObject function
   // it will reset the form after submission - additional feature element
   // it will trigger the taskList to be populated and displayed on webpage

  newTaskForm.addEventListener("submit", (event) =>  {
    event.preventDefault();
    taskObject(newTaskDescription.value, newTaskPriority.value);
    event.target.reset(); // QOL feature update to remove inputs into text box
    displayApp(); 
    displayColors();
    console.log(priorityColors(taskList));
    console.table(taskList);
    console.log(document.getElementById("task"));
    });
});



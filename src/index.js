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
 
  // Variables for items in the DOM 
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  // const newTaskPriority = document.getElementById("new-task-priority"); // new feature expression WIP

  // Expressions/functions to display the task list items. 
  
  // create array for list to be stored in
  const taskList = [];

  // Variable to get list from 
  const taskUnorderedList = document.getElementById("tasks"); 

  // Expression function to format the task list HTML.
  const displayList = (input) => {
    return input.map( taskElement => {
      return "<li>" + taskElement + "</li>"
    })
  };
  // Expression function to return the taskList array to the TODO list HTML element via DOM. 
  const displayApp = () => {
    return  taskUnorderedList.innerHTML = displayList(taskList).join("");
  };

   // submit form event listener function. 
   // the eventListener will be the 'workhorse' function for the list builder
   // it will preventDefault action of submit button
   // it will push() the newTaskDescriptions to the taskList array
   // it will reset the form after submission - additional feature element
   // it will trigger the taskList to be populated and displayed on webpage

  newTaskForm.addEventListener("submit", (event) =>  {
   event.preventDefault();
   taskList.push(newTaskDescription.value);
   event.target.reset(); // QOL feature update to remove inputs into text box
   displayApp(); 
   });
});

// new features code 

 // const colorsForPriority = {
  //     Highest: "red",
  //     High: "orange",
  //     Medium: "yellow",
  //     Low: "blue",
  //     Lowest: "violet",
  //   };  //new feature expression WIP
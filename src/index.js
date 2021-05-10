document.addEventListener("DOMContentLoaded", () => {
  // your code here

   //define task list variable

  const taskList = [];

  const displayList = (input) => {
      return input.map( taskElement => {
        return "<li>" + taskElement + "</li>"
      })
  }
  
     
  
  
  // const colorsForPriority = {
  //     Highest: "red",
  //     High: "orange",
  //     Medium: "yellow",
  //     Low: "blue",
  //     Lowest: "violet",
  //   };
  
  // Variables for items in the DOM 
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  // const newTaskPriority = document.getElementById("new-task-priority");

  // Display the task list items. 
  const taskUnorderedList = document.getElementById("tasks"); 

   // submit form event listener

  newTaskForm.addEventListener("submit", (event) =>  {
   event.preventDefault();
   taskList.push(newTaskDescription.value);
   console.log("submit button event no longer does default action");
   console.log(taskList);
   taskUnorderedList.innerHTML = displayList(taskList).join(""); // **** Clean this bit to produce a UL format ****
   });
});

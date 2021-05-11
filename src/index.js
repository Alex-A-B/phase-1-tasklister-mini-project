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
  const newTaskPriority = document.getElementById("new-task-priority"); // new feature expression WIP

  // Expressions/functions to display the task list items. 
  
  // create array for taskList to be stored in
  const taskList = [];
  // const taskList2 = [];
  // const newTaskVal = [] ;
  // const newTaskPrio = [] ;
  // const taskObject = {taskName: newTaskVal.value, taskPriority: newTaskPrio.value,}
 
  // Variable to get list from 
  const taskUnorderedList = document.getElementById("tasks"); 

  // Expression function to format the task list HTML.
  const displayList = (input) => {
    return input.map( inputObj => {
      const taskObjHolder = inputObj;
      const colorPriority = `document.getElementById("task").style.color = colorsForPriority.${taskObjHolder.taskPriority}`;
      // need to call colorPriority as it should be able to make the color change for me. That's a problem for tomorrows Alex
        return `<li id="task"> ${taskObjHolder.taskName} </li>`; 
    });
  };

  // Expression function to return the taskList array to the TODO list HTML element via DOM. 
  const displayApp = () => {
    return  taskUnorderedList.innerHTML = displayList(taskList).join("");
  };

  // This function creates an object - using the constructor function method
  // it takes two params, the task description and the task priority, from the inputs from the HTML form.
  // it should return an object which is then pushed into an array when the submit event is triggered.
  // it is effectively using pseudo-CLASS structure so is not subject to Hoisting,
  // meaning it needs to be in the code before it is called. #diva
  const taskObject = function taskObjectCreator(description, priority) {
    this.taskDesc = `${description}` ;
    this.taskPrio = `${priority}` ;
    return {taskName: taskDesc, taskPriority: taskPrio};
  };

 

   // submit form event listener function. 
   // the eventListener will be the 'workhorse' function for the list builder
   // it will preventDefault action of submit button
   // it will push() the newTaskDescriptions to the taskList array
   // it will reset the form after submission - additional feature element
   // it will trigger the taskList to be populated and displayed on webpage

  newTaskForm.addEventListener("submit", (event) =>  {
    event.preventDefault();
    // taskList.push(newTaskDescription.value);
    // newTaskVal.push(newTaskDescription.value);
    // console.log(newTaskVal)
    // newTaskPrio.push(newTaskPriority.value);
    // console.log(newTaskPrio)
    // taskObject.assign(newTaskVal.value, newTaskPrio.value)
    // console.log(taskObject)
    taskList.push(taskObject(newTaskDescription.value, newTaskPriority.value));
    console.log(taskList);
    // console.log(taskList[taskName]);
    event.target.reset(); // QOL feature update to remove inputs into text box
    displayApp(); 
   });
});

// new features code 

// colors priority list thought process
// create dropdown in HTML file (not sure if needs to be injected via JS or not)
// create object for to pair priorityValue to Color String
// attach to string in array - (object permenance?)
// use priority flag to affect CSS color via li.style.color = priorityValue or something like that

 const colorsForPriority = {
      Highest: "red",
      High: "orange",
      Medium: "yellow",
      Low: "blue",
      Lowest: "violet",
    };  //new feature expression WIP

    const {Highest, High, Medium, Low, Lowest} = colorsForPriority

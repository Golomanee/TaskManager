const taskForm = document.getElementById("task-form");
const monday = document.getElementById("monday");
const tuesday = document.getElementById("tuesday");
const wednesday = document.getElementById("wednesday");
const thursday = document.getElementById("thursday");
const friday = document.getElementById("friday");
const saturday = document.getElementById("saturday");
const sunday = document.getElementById("sunday");
const deleteButton = document.getElementById("delete-button");


let deleteIndex = 0;

//function to add a task
taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value;
    const dayRaw = document.getElementById("day");
    const day = dayRaw.value;

    if (taskText !== "") {

        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");
        taskItem.textContent = `${taskText}`;

        //option to complete a task
        taskItem.addEventListener("click", () => {
            if (deleteIndex == 1) {
                taskItem.remove();
            }
            taskItem.classList.toggle("completed");
        });
        
        //add the task to the specific day
        switch (day) {
            case "monday":
                monday.appendChild(taskItem);
                break;
            case "tuesday":
                tuesday.appendChild(taskItem);
                break;
            case "wednesday":
                wednesday.appendChild(taskItem);
                break;
            case "thursday":
                thursday.appendChild(taskItem);
                break;
            case "friday":
                friday.appendChild(taskItem);
                break;
            case "saturday":
                saturday.appendChild(taskItem);
                break;
            case "sunday":
                sunday.appendChild(taskItem);
                break;

        }
    }
    console.log(day);
})

//toggle the delete option
deleteButton.addEventListener("click", () => {
    if (deleteIndex == 0) {
        deleteIndex = 1;
    } else if (deleteIndex == 1) {
        deleteIndex = 0;
    }
    deleteButton.classList.toggle("delete-button-active");
})
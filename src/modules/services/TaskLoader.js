import Date from './Date'
const date = new Date();
function loadAllTasks(project){
    const contentContainer = document.getElementById("all-task-content");
    contentContainer.innerHTML = '';
    if(contentContainer){
        project.tasks.forEach(task => {
            const htmlText =
                `<div class="task-container"> 
                    <span class="task-title">${task.title} </span>
                    <span class="task-description">${task.description}</span>
                    <span class="task-priority">${task.priority}</span>
                    <span>
                        ${task.getDay(task.dueDate)}/${task.getMonth(task.dueDate)}/${task.getYear(task.dueDate)}   
                    </span>
                </div>
                `
            //contentContainer.innerText += task.title + "\n";
            contentContainer.innerHTML += htmlText;

        })
    }



}

export {loadAllTasks}

function isSameDay(timestamp1, timestamp2){
    const day1 = timestamp1.getDay(timestamp1);
    const month1 = timestamp1.getMonth(timestamp1);
    const year1 = timestamp1.getYear(timestamp1);

    const day2 = timestamp1.getDay(timestamp1);
    const month2 = timestamp1.getMonth(timestamp1);
    const year2 = timestamp1.getYear(timestamp1);
}
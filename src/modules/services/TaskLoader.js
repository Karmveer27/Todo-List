import Date from './Date'
import Task from '../entities/Task'
import Project from '../entities/Project'

const date = new Date();
const allTasksProject = new Project("AllTasks"); // Project that keeps track of all tasks
function loadAllTasks(){
    loadTaskContent(allTasksProject,"all-task-content")
}
function loadTodayTasks(){
    const todayProject = new Project("TodayProject");
    const currentTimeStamp = date.getCurrentTime();
    allTasksProject.tasks.forEach(task => {
        if(isSameDay(currentTimeStamp,task.dueDate)){
            todayProject.addTask(task)
        }
    })
    console.log(todayProject)
    loadTaskContent(todayProject,"today-content")
}
function loadSevenDaysTask(){
    const sevenDayProject = new Project("SevenDays");
    const currentTimeStamp = date.getCurrentTime();
    const nextSevenDayStamp = date.addDays(currentTimeStamp,7);

    allTasksProject.tasks.forEach(task => {
        if(date.compareDates(nextSevenDayStamp,task.dueDate) === 1){
            sevenDayProject.addTask(task)
        }
    })
    loadTaskContent(sevenDayProject,"seven-days-content")


}

function loadTaskContent(project,containerID){
    const contentContainer = document.getElementById(containerID);
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
            contentContainer.innerHTML += htmlText;
        })
    }
}

function isSameDay(timestamp1, timestamp2){
    const day1 = date.getDay(timestamp1);
    const month1 = date.getMonth(timestamp1);
    const year1 = date.getYear(timestamp1);

    const day2 = date.getDay(timestamp2);
    const month2 = date.getMonth(timestamp2);
    const year2 = date.getYear(timestamp2);

    return(
        day1 === day2 && month1 === month2 && year1 === year2
    )
}


//Testing
const task1 = new Task("Learn react","Next project needs to be with the MERN stack","20-12-2023","Important");
const task2 = new Task("Finish this Project","Complete CheckMate","09-12-2023","Important");
const task3 = new Task("Sleep More","Focus on 8 hours a sleep within the next week","14-12-2023","Medium");

allTasksProject.addTask(task1);
allTasksProject.addTask(task2);
allTasksProject.addTask(task3);
console.log(allTasksProject)


export {loadAllTasks,loadTodayTasks,loadSevenDaysTask}

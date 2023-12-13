import Date from './Date'
import Task from '../entities/Task'
import Project from '../entities/Project'
import {getAllProjects, getProject} from "./ProjectLoader";
import {showCustom} from "./ContentHandler";
import circle from '/src/assets/circle.png'


const date = new Date();
const allTasksProject = new Project("AllTasks"); // Project that keeps track of all tasks
function loadAllTasks(){
    loadTaskContent(allTasksProject,"all-task-content")

    const tomorrowDate = date.addDays(date.getCurrentTime(),1);
    document.getElementById("formDate").value = date.getFormattedDate(tomorrowDate);

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
function loadImportantTasks(){
    const importantTasks = new Project("ImportantTasks");
    allTasksProject.tasks.forEach(task => {
         if(task.priority === "important"){
             importantTasks.addTask(task)
         }
    })
    loadTaskContent(importantTasks,"important-content");

}

function loadTaskContent(project,containerID){
    const contentContainer = document.getElementById(containerID);
    if(contentContainer && project.tasks !== undefined){
        contentContainer.innerHTML = '';
        project.tasks.forEach(task => {
            const htmlText =
                `<div class="task-container"> 
                    <img class="unchecked-circle" id="circle-${task.title}" src=${circle}/>
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
function loadCustomProjectTasks(projectName){

    const htmlDiv = `<div id=${projectName} ></div>`;
    const customContainer = document.getElementById("custom-content");
    customContainer.innerHTML = '';
    customContainer.innerHTML += htmlDiv;

    const allProjects = getAllProjects()
    let project1;
    allProjects.forEach(project => {
        if(project.name === projectName){
            project1 = project;
            console.log(project1)
        }
    })
    if(project1){
        loadTaskContent(project1,"custom-content")
        showCustom(projectName);
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

function addTask(task){
    if(task instanceof Task){
        allTasksProject.addTask(task);
    }
}

//Testing
const task1 = new Task("Learn react","Next project needs to be with the MERN stack","2023-12-19","important");
const task2 = new Task("Finish this Project","Complete CheckMate","2023-12-09","important");
const task3 = new Task("Sleep More","Focus on 8 hours a sleep within the next week","2023-12-14","medium");

allTasksProject.addTask(task1);
allTasksProject.addTask(task2);
allTasksProject.addTask(task3);
console.log(allTasksProject)


export {loadAllTasks,loadTodayTasks,loadSevenDaysTask,loadImportantTasks,addTask,loadCustomProjectTasks}

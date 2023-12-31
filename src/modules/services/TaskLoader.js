import Date from './Date'
import Task from '../entities/Task'
import Project from '../entities/Project'
import {getAllProjects, getProject} from "./ProjectLoader";
import {showCustom} from "./ContentHandler";
import circle from '/src/assets/circle.png'
import task from "../entities/Task";
import whiteDots from '/src/assets/white-dots.png'
import blackDots from '/src/assets/black-dots.png'
import {checkTaskValid} from "./InputValidator";
import {checkDueDate} from "./TaskStatusHandler";


const date = new Date();
const allTasksProject = new Project("AllTasks"); // Project that keeps track of all tasks

function setFormDate(){

    const tomorrowDate = date.addDays(date.getCurrentTime(),1);
    document.getElementById("formDate").value = date.getFormattedDate(tomorrowDate);
}
function loadAllTasks(){
    loadTaskContent(allTasksProject,"all-task-content")
    checkDueDate(allTasksProject)

}
function loadTodayTasks(){
    const todayProject = new Project("TodayProject");
    const currentTimeStamp = date.getCurrentTime();
    allTasksProject.tasks.forEach(task => {
        if(isSameDay(currentTimeStamp,task.dueDate)){
            todayProject.addTask(task)
        }
    })
    //console.log(todayProject)
    loadTaskContent(todayProject,"today-content")
    checkDueDate(todayProject)
}
function loadSevenDaysTask(){
    const sevenDayProject = new Project("SevenDays");
    const currentTimeStamp = date.getCurrentTime();
    const nextSevenDayStamp = date.addDays(currentTimeStamp,8);
    //console.log(date.getFormattedDate(currentTimeStamp))
    //console.log(date.getFormattedDate(nextSevenDayStamp))

    allTasksProject.tasks.forEach(task => {
        const checker1 = date.compareDates(currentTimeStamp,task.dueDate)
        const checker2 = date.compareDates(nextSevenDayStamp,task.dueDate)
        //console.log(task.title)
        //console.log(checker1,checker2)
        if(checker1 === -1 && checker2 === 1){
            sevenDayProject.addTask(task)
        }
    })
    loadTaskContent(sevenDayProject,"seven-days-content")
    checkDueDate(sevenDayProject)
}
function loadImportantTasks(){
    const importantTasks = new Project("ImportantTasks");
    allTasksProject.tasks.forEach(task => {
         if(task.priority === "important"){
             //console.log(task)
             importantTasks.addTask(task)
         }
    })
    loadTaskContent(importantTasks,"important-content");
    checkDueDate(importantTasks)


}

function loadTaskContent(project,containerID){
    const contentContainer = document.getElementById(containerID);
    const customContainer = document.getElementById("custom-content");

    if(contentContainer && project.tasks !== undefined){
        contentContainer.innerHTML = '';
        customContainer.innerHTML = '';
        const reversedTasks = [...project.tasks].reverse();
        //console.trace()
        reversedTasks.forEach(task => {
            const strippedTitle = task.title.replace(/\s/g, '');
            const htmlText =
                `<div class="task-container"> 
                    <div class="task-img-div">
                        <img class="white-dots" id="DotID-ProjectTitle:${project.name}-TaskTitle:${task.title}" src=${whiteDots}/>
                        <img class="unchecked-circle" id="circle-${task.title}" src=${circle}/>
                    </div>
                    <span class="task-title">${task.title} </span>
                    <span class="task-description">${task.description}</span>
                    <span class="task-priority">${task.priority}</span>
                    <span id="DateID:${project.name}${task.title}">
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
        checkDueDate(project1)
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
    if(!checkTaskValid(task.title)){
        console.log("invalid task")
        return;
    }
    if(task instanceof Task){
        allTasksProject.addTask(task);
        document.getElementById('add-task').reset(); // reset form
    }
}
function getTask(taskTitle){
    let taskToFind;
    allTasksProject.tasks.forEach(task => {
        if(task.title === taskTitle){
            taskToFind = task;
        }
    })
    return taskToFind;


}
function getAllTasks(){
    return allTasksProject;
}

function removeTask(taskTitle){
    let taskToRemove;
    allTasksProject.tasks.forEach(task => {
        if(task.title === taskTitle){
            taskToRemove = task;
        }

    })
    taskToRemove.parentProjects.forEach(project => {
        project.removeTask(taskToRemove)
        taskToRemove.removeParentProject(project)
    })

}


//Testing
const task1 = new Task("Learn react","Next project needs to be with the MERN stack","2024-02-28","important");
const task2 = new Task("Finish this Project","Complete CheckMate","2023-12-31","important");
const task3 = new Task("Sleep More","Focus on 8 hours a sleep within the next week","2025-12-14","medium");
const task4 = new Task("Exercise","Start jump roping 15 minutes a day",date.getFormattedDate(date.addDays(date.getCurrentTime(),5)),"minor");

allTasksProject.addTask(task1);
allTasksProject.addTask(task2);
allTasksProject.addTask(task3);
allTasksProject.addTask(task4)
//console.log(allTasksProject)


export {loadAllTasks,loadTodayTasks,loadSevenDaysTask,loadImportantTasks,addTask,loadCustomProjectTasks,removeTask,setFormDate,getTask,getAllTasks}

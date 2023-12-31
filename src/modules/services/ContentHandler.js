import {
    loadAllTasks,
    loadTodayTasks,
    loadSevenDaysTask,
    loadImportantTasks,
    addTask,
    loadCustomProjectTasks,
    removeTask, setFormDate
} from './TaskLoader'
import Task from "../entities/Task";
import {addProject, getAllProjects} from './ProjectLoader'
import check from '/src/assets/check.png'
import uncheckedCircle from '/src/assets/circle.png'
import {checkDueDate, checkedCircle, uncheckedCircles} from "./TaskStatusHandler";
import {dotEventListener} from "./TaskEditor";
import whiteDots from "../../assets/white-dots.png";
import circle from "../../assets/circle.png";

let currentPage;
function showAllTasks(){
    document.getElementById("current-title").innerText = "All Tasks";
    document.getElementById("all-task-content").style.display = "flex";
    document.getElementById("today-content").style.display = "none";
    document.getElementById("seven-days-content").style.display = "none";
    document.getElementById("important-content").style.display = "none";
    loadAllTasks();
    uncheckedCircles();
    setFormDate();
    dotEventListener()
    updateImages();
    //checkDueDate();
    currentPage = "AllTasks"
}

function showToday(){
    document.getElementById("current-title").innerText = "Today";
    document.getElementById("all-task-content").style.display = "none";
    document.getElementById("today-content").style.display = "flex";
    document.getElementById("seven-days-content").style.display = "none";
    document.getElementById("important-content").style.display = "none";
    loadTodayTasks();
    uncheckedCircles();
    dotEventListener();
    updateImages();
    //checkDueDate();
    currentPage = "Today"
}

function showSevenDays(){
    document.getElementById("current-title").innerText = "Next Seven Days";
    document.getElementById("all-task-content").style.display = "none";
    document.getElementById("today-content").style.display = "none";
    document.getElementById("seven-days-content").style.display = "flex";
    document.getElementById("important-content").style.display = "none";
    loadSevenDaysTask()
    uncheckedCircles();
    dotEventListener();
    updateImages();
    //checkDueDate();
    currentPage = "SevenDays"
}

function showImportant(){
    document.getElementById("current-title").innerText = "Important";
    document.getElementById("all-task-content").style.display = "none";
    document.getElementById("today-content").style.display = "none";
    document.getElementById("seven-days-content").style.display = "none";
    document.getElementById("important-content").style.display = "flex";
    loadImportantTasks();
    uncheckedCircles();
    dotEventListener();
    updateImages();
    //checkDueDate();
    currentPage = "Important"
}
function showCustom(name){
    document.getElementById("current-title").innerText = name;
    document.getElementById("all-task-content").style.display = "none";
    document.getElementById("today-content").style.display = "none";
    document.getElementById("seven-days-content").style.display = "none";
    document.getElementById("important-content").style.display = "none";
    document.getElementById("custom-content").style.display = "flex";
    uncheckedCircles();
    dotEventListener();
    updateImages();
    //checkDueDate();
    currentPage = "Custom"
}

let navState = true;
function toggleOptions(){

    document.getElementById("sidebar").style.display = navState ? "none" : "block";
    document.getElementById("home-onclose").style.visibility = navState ? "visible" : "hidden";


    navState = !navState
}

document.getElementById("formButton").addEventListener('click',function(e){
    e.preventDefault()
    const formTitle = document.querySelector("#formTitle").value;
    const formDescription = document.querySelector("#formDescription").value;
    const formDate = document.querySelector("#formDate").value;
    const formPriority = document.querySelector("#formPriority").value;
    const formProject = document.querySelector("#formProject").value;
    const task1 = new Task(formTitle,formDescription,formDate,formPriority);
    //console.log("Getting Project")
    //console.log(formProject)
    const allProjects =  getAllProjects();
    allProjects.forEach(project => {
        if(project.name === formProject){
            project.addTask(task1)
            console.log(project)
        }
    })

    addTask(task1);
    reload(formProject);
    //document.getElementById('add-task').reset();
    //setFormDate();


})

let projectPromptOpened = false;
let addTaskPromptOpened = false;

function addTaskOnClick(){
    addTaskPromptOpened ? document.getElementById("add-task").style.visibility = 'hidden' : document.getElementById("add-task").style.visibility = 'visible';
    addTaskPromptOpened = !addTaskPromptOpened
}
function setaddTaskPromptOpened(ifOpened){
    addTaskPromptOpened = ifOpened;
}
function projectOnClick(){
    projectPromptOpened ? document.getElementById("new-project").style.display = 'none' : document.getElementById("new-project").style.display = 'flex';
    projectPromptOpened = !projectPromptOpened
}
function setprojectPromptOpened(ifOpened){
    projectPromptOpened = ifOpened;
}
document.getElementById("projectButton").addEventListener('click', (e) => {

    e.preventDefault();
    const projectTitle = document.querySelector("#projectName").value;
    const colour = document.querySelector("#colorSelect").value.toLowerCase();
    //console.log(projectTitle, colour)
    addProject(projectTitle,colour);
    customProjectButtons()

});
function customProjectButtons(){
    const projects = document.querySelectorAll(".customProjects");
    projects.forEach(project => {
        project.addEventListener('click',(e) =>{
            if(!project){
                return;
            }
            //console.log(e.target.id);
            loadCustomProjectTasks(e.target.id)
            uncheckedCircles()

        })
    })
}



function reload(formProject){
    setFormDate(); // set form date
    switch (currentPage){
        case "AllTasks":
            loadAllTasks()
            break;
        case "Today":
            loadTodayTasks()
            break;
        case "SevenDays":
            loadSevenDaysTask()
            break;
        case "Important":
            loadImportantTasks();
            break;
        case "Custom":
            loadCustomProjectTasks(formProject)
            break;
    }

    uncheckedCircles()
    dotEventListener();
    updateImages();
}
function updateImages(){
    document.querySelectorAll(".white-dots").forEach(dot => {
        //console.log("Getting to white dots in content handler")
        let src = whiteDots;
        //console.log(src + " : Old src")
        if(src.endsWith('/')){
            src = src.slice(0,-1)
        }
        //console.log(src + " : new src")
        dot.src = src;
    })
    document.querySelectorAll(".unchecked-circle").forEach(c => {
        let src = circle;
        if(src.endsWith('/')){
            src = src.slice(0,-1)
        }
        c.src = src;
    })
}


export {showImportant,showToday,showAllTasks,showSevenDays,toggleOptions, projectOnClick,showCustom,reload,setprojectPromptOpened,addTaskOnClick,setaddTaskPromptOpened}


//getAllProjects()[0].addTask(new Task("Learn react","Next project needs to be with the MERN stack","2023-12-19","important"))
import {
    loadAllTasks,
    loadTodayTasks,
    loadSevenDaysTask,
    loadImportantTasks,
    addTask,
    loadCustomProjectTasks,
    removeTask
} from './TaskLoader'
import Task from "../entities/Task";
import {addProject, getAllProjects} from './ProjectLoader'
import check from '/src/assets/check.png'
import uncheckedCircle from '/src/assets/circle.png'

let currentPage;
function showAllTasks(){
    document.getElementById("current-title").innerText = "All Tasks";
    document.getElementById("all-task-content").style.display = "flex";
    document.getElementById("today-content").style.display = "none";
    document.getElementById("seven-days-content").style.display = "none";
    document.getElementById("important-content").style.display = "none";
    loadAllTasks();
    uncheckedCircles();
    currentPage = "AllTasks"
}

function showToday(){
    document.getElementById("current-title").innerText = "Today";
    document.getElementById("all-task-content").style.display = "none";
    document.getElementById("today-content").style.display = "flex";
    document.getElementById("seven-days-content").style.display = "none";
    document.getElementById("important-content").style.display = "none";
    loadTodayTasks();
    currentPage = "Today"
}

function showSevenDays(){
    document.getElementById("current-title").innerText = "Next Seven Days";
    document.getElementById("all-task-content").style.display = "none";
    document.getElementById("today-content").style.display = "none";
    document.getElementById("seven-days-content").style.display = "flex";
    document.getElementById("important-content").style.display = "none";
    loadSevenDaysTask()
    currentPage = "SevenDays"
}

function showImportant(){
    document.getElementById("current-title").innerText = "Important";
    document.getElementById("all-task-content").style.display = "none";
    document.getElementById("today-content").style.display = "none";
    document.getElementById("seven-days-content").style.display = "none";
    document.getElementById("important-content").style.display = "flex";
    loadImportantTasks();
    currentPage = "Important"
}
function showCustom(name){
    document.getElementById("current-title").innerText = name;
    document.getElementById("all-task-content").style.display = "none";
    document.getElementById("today-content").style.display = "none";
    document.getElementById("seven-days-content").style.display = "none";
    document.getElementById("important-content").style.display = "none";
    document.getElementById("custom-content").style.display = "flex";
    currentPage = "Custom"
}

let navState = true;
function toggleOptions(){

    document.getElementById("sidebar").style.display = navState ? "none" : "block";
    document.getElementById("home-onclose").style.visibility = navState ? "visible" : "hidden";


    navState = !navState
}

document.getElementById("formButton").addEventListener('click',function(e){
    const formTitle = document.querySelector("#formTitle").value;
    const formDescription = document.querySelector("#formDescription").value;
    const formDate = document.querySelector("#formDate").value;
    const formPriority = document.querySelector("#formPriority").value;
    const formProject = document.querySelector("#formProject").value;
    const task1 = new Task(formTitle,formDescription,formDate,formPriority);
    console.log("Getting Project")
    console.log(formProject)
    const allProjects =  getAllProjects();
    allProjects.forEach(project => {
        if(project.name === formProject){
            project.addTask(task1)
            console.log(project)
        }
    })

    addTask(task1);

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


})

let projectPromptOpened = false;
function projectOnClick(){
    projectPromptOpened ? document.getElementById("new-project").style.display = 'none' : document.getElementById("new-project").style.display = 'flex';
    projectPromptOpened = !projectPromptOpened
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

function uncheckedCircles(){
    function handleEnter(e){
        //console.log(e.srcElement.id)
        const circle = document.getElementById(e.srcElement.id);
        circle.setAttribute('src',check)
    }
    function handleExit(e){
        const circle = document.getElementById(e.srcElement.id);
        circle.setAttribute('src',uncheckedCircle)
    }
    function handleClick(e){
        const circle = document.getElementById(e.srcElement.id)
        circle.setAttribute('src',check)
        circle.removeEventListener('mouseleave',handleExit)
        checkedCircle(e.srcElement.id)
    }

    const circles = document.querySelectorAll(".unchecked-circle");
    circles.forEach(circle => {
        circle.addEventListener('mouseenter', handleEnter);
        circle.addEventListener('mouseleave', handleExit);
        circle.addEventListener('click', handleClick);
    })
}

function checkedCircle(id){
    console.log(id)
    const taskTitle = id.substring(id.indexOf('-')+1);
    console.log(taskTitle)
    removeTask(taskTitle)
}


export {showImportant,showToday,showAllTasks,showSevenDays,toggleOptions, projectOnClick,showCustom}


//getAllProjects()[0].addTask(new Task("Learn react","Next project needs to be with the MERN stack","2023-12-19","important"))
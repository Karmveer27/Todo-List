import {
    showToday,
    showAllTasks,
    showSevenDays,
    showImportant,
    toggleOptions,
    projectOnClick, addTaskOnClick
} from "./modules/services/ContentHandler"
import {
    loadProjects
} from "./modules/services/ProjectLoader";

import './styles/index.scss'

//Images below
import inbox from './assets/inbox.png'
import sevenDays from './assets/7days.png'
import today from './assets/today.png'
import check from './assets/tick.png'
import add from './assets/add.png'
import important from './assets/flag.png'
import menuEntry from './assets/menu-entry.png'
import gtihub from './assets/github.png'
import linkedin from './assets/linkedin.png'
import plus from './assets/plus.png'
import whiteDots from './assets/white-dots.png'
import circle from './assets/circle.png'

//Classes
import Task from './modules/entities/Task'
import Project from './modules/entities/Project'
//Methods
import { loadAllTasks,isSameDay } from './modules/services/TaskLoader';
import {loadExitImages} from "./modules/services/exitContent";
import {checkProjectValid} from "./modules/services/InputValidator";
import {checkDueDate} from "./modules/services/TaskStatusHandler";


window.onload = () => {
    showAllTasks();
    loadProjects();
    checkDueDate();

}


document.getElementById('inbox').src = inbox;
document.getElementById('7days').src = sevenDays;
document.getElementById('today').src = today;
document.getElementById('logo').src = check;
document.getElementById('add-project').src = add;
document.getElementById('important').src = important;
document.getElementById('home').src = menuEntry;
document.getElementById('home-onclose').src = menuEntry;
document.getElementById('github').src = gtihub;
document.getElementById('linkedin').src = linkedin;
document.getElementById('plus').src = plus;
document.querySelectorAll(".white-dots").forEach(dot => {
    let src = whiteDots;
    if(src.endsWith('/')){
        src = src.slice(0,-1)
    }
    dot.src = src;
})
document.querySelectorAll(".unchecked-circle").forEach(c => {
    let src = circle;
    if(src.endsWith('/')){
        src = src.slice(0,-1)
    }
    c.src = src;
})

document.getElementById("all-tasks-button").addEventListener('click',showAllTasks);
document.getElementById("today-button").addEventListener('click',showToday);
document.getElementById("7days-button").addEventListener('click',showSevenDays);
document.getElementById("important-button").addEventListener('click',showImportant);
document.getElementById("home").addEventListener('click',toggleOptions);
document.getElementById("home-onclose").addEventListener('click',toggleOptions);
document.getElementById("add-project-button").addEventListener('click',projectOnClick);
document.getElementById("add-task-button").addEventListener('click',addTaskOnClick)

loadExitImages();











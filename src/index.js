import {showToday, showAllTasks, showSevenDays, showImportant, toggleOptions} from "./modules/services/ContentHandler"
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
//Classes
import Task from './modules/entities/Task'
import Project from './modules/entities/Project'
//Methods
import { loadAllTasks } from './modules/services/TaskLoader';


window.onload = showAllTasks;
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

document.getElementById("all-tasks-button").addEventListener('click',showAllTasks);
document.getElementById("today-button").addEventListener('click',showToday);
document.getElementById("7days-button").addEventListener('click',showSevenDays);
document.getElementById("important-button").addEventListener('click',showImportant);
document.getElementById("home").addEventListener('click',toggleOptions);
document.getElementById("home-onclose").addEventListener('click',toggleOptions);


// Testing for Task


const task1 = new Task("Learn react","Next project needs to be with the MERN stack","20-12-2023","Important");
const task2 = new Task("Finish this Project","Complete CheckMate","19-12-2023","Important");
console.log(task1)
console.log(task1.getDay(task1.dueDate))
const project1 = new Project("AllTasks");
project1.addTask(task1);
project1.addTask(task2);
console.log(project1)
loadAllTasks(project1)












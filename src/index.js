import name from "./modules/testing"
import DateClass from "./modules/services/Date"
import {showToday, showAllTasks,showSevenDays,showImportant} from "./modules/services/contentHandler"
import './styles/index.scss'

//Images below
import inbox from './assets/inbox.png'
import sevenDays from './assets/7days.png'
import today from './assets/today.png'
import checkmate from './assets/checkmate1.png'
import add from './assets/add.png'
import important from './assets/flag.png'
import menuEntry from './assets/menu-entry.png'

document.getElementById('inbox').src = inbox;
document.getElementById('7days').src = sevenDays;
document.getElementById('today').src = today;
document.getElementById('logo').src = checkmate;
document.getElementById('add-project').src = add;
document.getElementById('important').src = important;
document.getElementById('home').src = menuEntry;

document.getElementById("all-tasks-button").addEventListener('click',showAllTasks);
document.getElementById("today-button").addEventListener('click',showToday);
document.getElementById("7days-button").addEventListener('click',showSevenDays);
document.getElementById("important-button").addEventListener('click',showImportant);











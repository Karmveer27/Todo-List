import {showToday, showAllTasks, showSevenDays, showImportant, toggleOptions} from "./modules/services/contentHandler"
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











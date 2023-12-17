import whiteDots from '../../assets/white-dots.png'
import blackDots from '../../assets/black-dots.png'
import {getTask} from "./TaskLoader";
import {reload} from "./ContentHandler";
import Date from './Date'

const date = new Date();
function dotEventListener(){

    function handleMouseEnter(e){
        //console.log("Mouse enter")
        setToBlackDots(e.target.id)
    }
    function handleMouseLeave(e){
        //console.log("Mouse Leave")
        setToWhiteDots(e.target.id)
    }
    function handleMouseClick(e){
        //console.log("Mouse Clcik")
        e.target.removeEventListener('mouseleave',handleMouseLeave)
        enterEditMenu(e.target.id)

    }
    const whiteDots = document.querySelectorAll(".white-dots");
    whiteDots.forEach(dot => {
        dot.addEventListener('mouseenter',handleMouseEnter);
        dot.addEventListener('mouseleave',handleMouseLeave);
        dot.addEventListener('click',handleMouseClick)
    })

}
function setToBlackDots(id){
    document.getElementById(id).setAttribute('src',blackDots)
}
function setToWhiteDots(id){
    document.getElementById(id).setAttribute('src',whiteDots)
}
function enterEditMenu(id){
    //console.log(id)
    const taskTitle = id.substring(id.indexOf('-')+1)
    const task = getTask(taskTitle);
    document.getElementById("edit-task").style.visibility = 'visible'
    document.getElementById("setTitle").value = task.title
    document.getElementById("setDescription").value = task.description
    document.getElementById("setDate").value = date.getFormattedDate(task.dueDate)
    document.getElementById("setPriority").value = task.priority
    const editTaskButton = document.getElementById('editTaskButton');
    editTaskButton.removeEventListener('click', handleEditButtonClick);
    editTaskButton.addEventListener('click', handleEditButtonClick);

}
function handleEditButtonClick(e) {
    e.preventDefault();
    const taskTitle = document.getElementById("setTitle").value;
    const task = getTask(taskTitle);
    changeTaskInfo(task);
}
function exitEditMenu(id){
    setToWhiteDots(id);
    //remove buttone event listener??

}

function changeTaskInfo(task){
    console.log(task.title)
    //console.log(task)
    const title = document.getElementById("setTitle").value
    const description = document.getElementById("setDescription").value
    const date = document.getElementById("setDate").value
    const priority = document.getElementById("setPriority").value
    task.setTitle(title)
    task.setDescription(description)
    task.setDate(date)
    task.setPriority(priority)
    reload()
    document.getElementById("edit-task").style.visibility = 'hidden'


}
export {dotEventListener}


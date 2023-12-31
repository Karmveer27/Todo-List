import check from "../../assets/check.png";
import uncheckedCircle from "../../assets/circle.png";
import {getAllTasks, removeTask} from "./TaskLoader";
import {reload} from "./ContentHandler"
import Date from "./Date"

const date = new Date();

function uncheckedCircles(){
    //Use e.target instead of src.element
    function handleEnter(e){
        //console.log(e.srcElement.id)
        const circle = e.target;
        circle.setAttribute('src',check)
    }
    function handleExit(e){
        const circle = e.target;
        circle.setAttribute('src',uncheckedCircle)
    }
    function handleClick(e){
        const circle = e.target
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
    //console.log(id)
    const taskTitle = id.substring(id.indexOf('-')+1);
    //console.log(taskTitle)
    removeTask(taskTitle)
    reload();
}

function checkDueDate(project){
    //console.log("Checking due date")
    getAllTasks().tasks.forEach(task => {
        //console.log(task)
        const dueChecker = date.compareDates(task.dueDate,date.getCurrentTime())
        //console.log(dueChecker)
        //console.trace()
        if(project !== undefined){
            const dueDateSpan = document.getElementById(`DateID:${project.name}${task.title}`)
            if(dueDateSpan && dueChecker === -1){
                //console.log(dueDateSpan)
                dueDateSpan.classList.add("dueDatePassed")

            }
        }


    })
}

export {uncheckedCircles,checkedCircle,checkDueDate}
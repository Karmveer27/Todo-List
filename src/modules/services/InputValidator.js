//Input validator for adding task, if title is empty!
//Input validator to make sure no projects with the same name


import {getAllProjects, getProject} from "./ProjectLoader";
import task from "../entities/Task";
import {getTask} from "./TaskLoader";

function checkProjectValid(projectName){
    const projectChecker = getProject(projectName)
    if(projectChecker.length===0 && projectName !== undefined && projectName !== null){
        removeErrorProject();
        return true;
    }
    else{
       // console.trace()
       //console.log(projectName)
        addErrorProject()
        return false;
    }
}
function checkTaskValid(taskName){
    //console.log("Getting here")
    //console.log(taskName)
   const task = getTask(taskName);
   if(task === undefined && taskName !== undefined && taskName !== null){
       removeErrorTask();
       return true;
   }else{
       addErrorTask();
       return false;
   }

}
function checkEditTaskValid(taskName,oldTaskTitle){
    const task = getTask(taskName);
    if(oldTaskTitle === taskName && taskName !== null){
        removeErrorEditTask();
        return true;
    }
    else if(task === undefined && taskName !== undefined && taskName !== null){
        removeErrorEditTask();
        return true;
    }else{
        addErrorEditTask();
        return false;
    }

}


function addErrorProject(){
    console.log("getting here")
    //document.getElementById("projectError").style.visibility = 'visible';
    document.getElementById("projectError").style.display = 'flex';
    document.getElementById("projectName").classList.add("errorBox")
}
function removeErrorProject(){
    //document.getElementById("projectError").style.visibility = 'hidden';
    document.getElementById("projectError").style.display = 'none';
    document.getElementById("projectName").classList.remove("errorBox")
}
function addErrorTask(){
    //document.getElementById("taskError").style.visibility = 'visible';
    document.getElementById("taskError").style.display = 'flex';
    document.getElementById("formTitle").classList.add("errorBox")
}
function removeErrorTask(){
    //document.getElementById("taskError").style.visibility = 'hidden';
    document.getElementById("taskError").style.display = 'none';
    document.getElementById("formTitle").classList.remove("errorBox")
}
function addErrorEditTask(){
    //document.getElementById("taskError").style.visibility = 'visible';
    document.getElementById("taskEditError").style.display = 'flex';
    document.getElementById("setTitle").classList.add("errorBox")
}
function removeErrorEditTask(){
    //document.getElementById("taskError").style.visibility = 'hidden';
    document.getElementById("taskEditError").style.display = 'none';
    document.getElementById("setTitle").classList.remove("errorBox")
}

export {checkProjectValid,checkTaskValid,checkEditTaskValid,removeErrorEditTask,removeErrorProject,removeErrorTask}
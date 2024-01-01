//Input validator for adding task, if title is empty!
//Input validator to make sure no projects with the same name


import {getAllProjects, getProject} from "./ProjectLoader";
import task from "../entities/Task";
import {getTask} from "./TaskLoader";

function checkProjectValid(projectName){
    const projectChecker = getProject(projectName)
    if(projectChecker.length===0 && projectName !== undefined){
        removeErrorProject();
        return true;
    }
    else{
        console.trace()
        console.log(projectName)
        addErrorProject()
        return false;
    }
}
function checkTaskValid(taskName){
   const task = getTask(taskName);
   if(task === undefined && taskName !== undefined){
       removeErrorTask();
       return true;
   }else{
       addErrorTask();
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

export {checkProjectValid,checkTaskValid}
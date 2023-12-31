//Input validator for adding task, if title is empty!
//Input validator to make sure no projects with the same name


import {getAllProjects, getProject} from "./ProjectLoader";
import task from "../entities/Task";
import {getTask} from "./TaskLoader";

function checkProjectValid(projectName){
    const projectChecker = getProject(projectName)
    return projectChecker.length === 0;
}
function checkTaskValid(taskName){
   const task = getTask(taskName);
   return task === undefined;

}

export {checkProjectValid,checkTaskValid}
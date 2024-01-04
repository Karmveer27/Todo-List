import Project from "../entities/Project";
import {checkProjectValid} from "./InputValidator";

const allProjects = [];


function addProject(name,colour){
    console.log("getting hewre")
    if(!checkProjectValid(name)){
        console.log("Not valid project ")
        return;
    }
    const newProject = Project.constructorWithColour(name,colour);
    allProjects.push(newProject);
    loadProjects()

    const htmlDiv = `<option value=${name} class="inputText">${name}</option>`;
    document.getElementById("formProject").innerHTML += htmlDiv;
}
function loadProjects(){
    const projectContainer = document.getElementById("projectContainer");
    projectContainer.innerHTML = '';
    allProjects.forEach(project => {
        const htmlText = `<span class="customProjects options"><h2 id=${project.name} style="color:${project.colour}">${project.name}</h2></span>`;
        projectContainer.innerHTML += htmlText;
    })

}
function getAllProjects(){
    return allProjects;
}
function getProject(projectName){
    return allProjects.filter(project => project.name === projectName)
}


export {loadProjects,addProject,getProject,getAllProjects}


import Project from "../entities/Project";

const allProjects = [];
function addProject(name,colour){
    const newProject = Project.constructorWithColour(name,colour);
    allProjects.push(newProject);
    loadProjects()
}
function loadProjects(){
    const projectContainer = document.getElementById("projectContainer");
    projectContainer.innerHTML = '';
    allProjects.forEach(project => {
        const htmlText = `<span class="customProjects options"><h1 id=${project.name} style="color:${project.colour}">${project.name}</h1></span>`;
        projectContainer.innerHTML += htmlText;
    })

}

function getProject(projectName){
    return allProjects.filter(project => project.name === projectName)
}
export {loadProjects,addProject,getProject}


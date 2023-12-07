
function loadTasks(project){
    const contentContainer = document.getElementById("all-task-content");
    if(contentContainer){
        project.tasks.forEach(task => {
            contentContainer.innerText += task.title + "\n";
        })
    }



}

export {loadTasks}
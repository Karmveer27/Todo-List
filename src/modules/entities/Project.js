import Task from "./Task";

class Project{
    name;
    tasks;
    constructor(name) {
        this.name=name;
        this.tasks = [];
    }
    addTask(task){
        if(task instanceof Task){
            this.tasks.push(task);
            task.setParentProject(this);
        }
    }
    removeTask(taskToRemove){
        if(taskToRemove instanceof Task){
            this.tasks = this.tasks.filter(task => task !== taskToRemove )
        }
    }

}

export default Project;
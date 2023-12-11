import Task from "./Task";

class Project{
    name;
    tasks;
    colour;
    constructor(name) {
        this.name=name;
        this.tasks = [];
        this.colour = 'black'
    }
    static constructorWithColour(name,colour) {
        const projectTemp = new Project(name);
        projectTemp.tasks = [];
        projectTemp.colour = colour;
        return projectTemp;
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
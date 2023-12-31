import DateClass from '../services/Date' // check import source thingy
class Task{
    dateInstance = new DateClass();
    title;
    description;
    intialDate;
    dueDate;
    priority;
    parentProjects;
    completed = false;

    constructor(title, description, dueDate, priority ) {
        this.title = title;
        this.description = description;
        this.dueDate = this.formatDueDate(dueDate); // Might need to add method in Date class to format this to a date object like we did for getTime
        this.priority = priority;
        this.intialDate = this.dateInstance.getCurrentTime()
        this.parentProjects = [];

    }

    formatDueDate(dueDate){
        const [year, month, day] = dueDate.split('-');
        const parsedDate = new Date(`${year}-${month}-${day}`);
        return parsedDate.getTime();
    }

    getDay(timestamp){
        return this.dateInstance.getDay(timestamp)
    }
    getMonth(timestamp){
        return this.dateInstance.getMonth(timestamp)
    }
    getYear(timestamp){
        return this.dateInstance.getYear(timestamp)
    }

    checkDueDate(){
        //Loop through arrays of all tasks to check for every single one upon load?
        const currentTime = this.dateInstance.getCurrentTime();
        // Compare with this.dueDate

    }

    setParentProject(project){
        this.parentProjects.push(project)
    }

    removeParentProject(project){
        const indexToRemove = this.parentProjects.indexOf(project);

        if (indexToRemove !== -1) {
            this.parentProjects.splice(indexToRemove, 1);
        }
    }

    setTitle(title){
        this.title = title;
    }
    setDescription(description){
        this.description = description;
    }
    setPriority(priority){
        this.priority = priority;
    }
    setDate(date){
        this.dueDate = date;
    }

}


export default Task;


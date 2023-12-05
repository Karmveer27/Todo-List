import DateClass from './Date' // check import source thingy
class Task{
    dateInstance = new DateClass();
    title;
    description;
    intialDate;
    dueDate;
    priority;

    constructor(title, description, dueDate, priority ) {
        this.title = title;
        this.description = title;
        this.dueDate = dueDate; // Might need to add method in Date class to format this to a date object like we did for getTime
        this.priority = priority;

        this.intialDate = this.dateInstance.getCurrentTime()

    }

    formatDateObject(dueDate){

    }

    checkDueDate(){
        //Loop through arrays of all tasks to check for every single one upon load?
        const currentTime = this.dateInstance.getCurrentTime();
        // Compare with this.dueDate

    }

}


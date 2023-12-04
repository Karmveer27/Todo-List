import { getDate } from 'date-fns';
import Task from "./Task";
class CustomDate{

    constructor() {

    }

     getCurrentDay(){
        const currentDay = getDate(new Date());
        console.log(currentDay)
        console.log("In get date")
    }




}
export default CustomDate;
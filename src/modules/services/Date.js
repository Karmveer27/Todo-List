import {getTime,getYear,getMonth,getDate,compareAsc,addDays} from 'date-fns';

class CustomDate{

    constructor() {

    }

     getCurrentTime(){
        const date = new Date();
        return getTime(date);
    }

    getYear(timestamp){
        const date = new Date(timestamp);
        return date.getFullYear()
    }

    getMonth(timestamp){
        const date = new Date(timestamp);
        return date.getMonth() + 1
    }

    getDay(timestamp){
        const date = new Date(timestamp);
        return date.getDate();
    }
    addDays(timestamp,days){
        const date = new Date(timestamp);
        return addDays(date,days)
    }

    compareDates(timestamp1,timestamp2){
        return compareAsc(new Date(timestamp1),new Date(timestamp2))
    }




}
export default CustomDate;
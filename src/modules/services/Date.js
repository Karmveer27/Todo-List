import {getTime,getYear,getMonth,getDate} from 'date-fns';

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




}
export default CustomDate;
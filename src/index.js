import name from "./modules/testing"
import DateClass from "./modules/Date"
import './styles/index.scss'
import {ca} from "date-fns/locale";
const nameStatement = name();
//console.log(nameStatement);

const DateInstance = new DateClass();
DateInstance.getCurrentTime()
//console.log(DateInstance.getMonth(1701768545258))

const calender = document.getElementById("myDate");
const button = document.getElementById("dateButton");
button.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("getting here");
    console.log(calender.value);
    console.log(typeof(calender.value));
})






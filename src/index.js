import name from "./modules/testing"
import DateClass from "./modules/Date"
import './styles/index.scss'
const nameStatement = name();
console.log(nameStatement);

const DateInstance = new DateClass();
DateInstance.getCurrentDate()

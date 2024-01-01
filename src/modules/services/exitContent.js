import crossIcon from '../../assets/cross.png'
import whiteDots from '../../assets/white-dots.png'
import {setaddTaskPromptOpened, setprojectPromptOpened} from "./ContentHandler";
import {removeErrorEditTask, removeErrorProject, removeErrorTask} from "./InputValidator";

function loadExitImages(){
    const crosses = document.querySelectorAll(".cross");
    crosses.forEach(cross => {
        cross.setAttribute('src',crossIcon)

        cross.addEventListener('click',(e) => {
           if(e.target.closest("#new-project")){
               document.getElementById("new-project").style.display = 'none';
               setprojectPromptOpened(false)
               removeErrorProject();
           }
           else if(e.target.closest("#edit-task")){
                document.getElementById("edit-task").style.visibility = 'hidden';
                document.querySelectorAll(".white-dots").forEach(dot =>{
                    dot.setAttribute('src',whiteDots)
                })
               removeErrorEditTask();
           }
           else if(e.target.closest("#add-task")){
               document.getElementById("add-task").style.visibility = 'hidden';
               setaddTaskPromptOpened(false)
               removeErrorTask();
           }
        })
    })
}

export {loadExitImages}
import crossIcon from '../../assets/cross.png'
import whiteDots from '../../assets/white-dots.png'
import {setprojectPromptOpened} from "./ContentHandler";

function loadExitImages(){
    const crosses = document.querySelectorAll(".cross");
    crosses.forEach(cross => {
        cross.setAttribute('src',crossIcon)

        cross.addEventListener('click',(e) => {
           if(e.target.closest("#new-project")){
               document.getElementById("new-project").style.display = 'none';
               setprojectPromptOpened(false)
           }
           else if(e.target.closest("#edit-task")){
                document.getElementById("edit-task").style.visibility = 'hidden';
                document.querySelectorAll(".white-dots").forEach(dot =>{
                    dot.setAttribute('src',whiteDots)
                })
           }
        })
    })
}

export {loadExitImages}
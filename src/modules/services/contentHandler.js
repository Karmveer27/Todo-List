function showAllTasks(){
    document.getElementById("current-title").innerText = "All Tasks";
    document.getElementById("all-task-content").style.display = "flex";
    document.getElementById("today-content").style.display = "none";
    document.getElementById("7days-content").style.display = "none";
    document.getElementById("important-content").style.display = "none";
}

function showToday(){
    document.getElementById("current-title").innerText = "Today";
    document.getElementById("all-task-content").style.display = "none";
    document.getElementById("today-content").style.display = "flex";
    document.getElementById("7days-content").style.display = "none";
    document.getElementById("important-content").style.display = "none";
}

function showSevenDays(){
    document.getElementById("current-title").innerText = "Next Seven Days";
    document.getElementById("all-task-content").style.display = "none";
    document.getElementById("today-content").style.display = "none";
    document.getElementById("7days-content").style.display = "flex";
    document.getElementById("important-content").style.display = "none";
}

function showImportant(){
    document.getElementById("current-title").innerText = "Important";
    document.getElementById("all-task-content").style.display = "none";
    document.getElementById("today-content").style.display = "none";
    document.getElementById("7days-content").style.display = "none";
    document.getElementById("important-content").style.display = "flex";
}
let navState = true;
function toggleOptions(){

    document.getElementById("sidebar").style.display = navState ? "none" : "flex";
    document.getElementById("home-onclose").style.display = navState ? "flex" : "none ";


    navState = !navState
}

export {showImportant,showToday,showAllTasks,showSevenDays,toggleOptions}
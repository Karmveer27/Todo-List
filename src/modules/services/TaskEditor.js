import whiteDots from '../../assets/white-dots.png'
import blackDots from '../../assets/black-dots.png'

function dotEventListener(){
    function handleMouseEnter(e){
        console.log("Mouse enter")
        setToBlackDots(e.target.id)
    }
    function handleMouseLeave(e){
        console.log("Mouse Leave")
        setToWhiteDots(e.target.id)
    }
    function handleMouseClick(e){
        console.log("Mouse Clcik")
        e.target.removeEventListener('mouseleave',handleMouseLeave)
        enterEditMenu(e.target.id)

    }
    const whiteDots = document.querySelectorAll(".white-dots");
    whiteDots.forEach(dot => {
        dot.addEventListener('mouseenter',handleMouseEnter);
        dot.addEventListener('mouseleave',handleMouseLeave);
        dot.addEventListener('click',handleMouseClick)
    })

}
function setToBlackDots(id){
    document.getElementById(id).setAttribute('src',blackDots)
}
function setToWhiteDots(id){
    document.getElementById(id).setAttribute('src',whiteDots)
}
function enterEditMenu(id){
    //console.log(id)
    const taskTitle = id.substring(id.indexOf('-')+1)

}
function exitEditMenu(id){
    setToWhiteDots(id);

}
export {dotEventListener}


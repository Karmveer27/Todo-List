function dotEventListener(){
    function handleMouseEnter(){
        console.log("Mouse enter")
    }
    function handleMouseLeave(){
        console.log("Mouse Leave")
    }
    function handleMouseClick(){
        console.log("Mouse Clcik")
    }
    const whiteDots = document.querySelectorAll(".white-dots");
    whiteDots.forEach(dot => {
        dot.addEventListener('mouseenter',handleMouseEnter);
        dot.addEventListener('mouseleave',handleMouseLeave);
        dot.addEventListener('click',handleMouseClick)
    })

}

export {dotEventListener}


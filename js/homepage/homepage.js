var topuhead = document.getElementById("topuhead");

// on click function that switches between light/dark modes
topuhead.onclick = function(){
    document.documentElement.classList.toggle("glorp-mode");
    
    // replaces icon with glorpu for dark and topu for light
    if(document.documentElement.classList.contains("glorp-mode"))
    {
        topuhead.src = "../../assets/media/glorp/glorpuhead.PNG";
    }
    else
    {
        topuhead.src = "../../assets/media/angel/topuhead.PNG";
    }
}

var activateMenu = document.getElementById("active-menu");
var menuDynamic = document.getElementById("menu-dynamic");

function showOrHiddeMenu(){
    if(!menuDynamic.classList.contains("show")){
        menuDynamic.classList.add("show");
    }else{
        menuDynamic.classList.remove("show");
    }
}

function showOrHiddeElement(elementClicked){
    
    var element = elementClicked.getAttribute("data-content-item");
    var items = document.getElementsByClassName("content-item");

    console.log(items);
    for(var i = 0; i < items.length; i++){
        
        items[i].classList.remove("show");
    }
    console.log(element);
    document.getElementById(element).classList.add("show");

    
}
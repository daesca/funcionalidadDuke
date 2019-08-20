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
    var item = document.getElementById(element);

    console.log(item);
    var coordinates = item.offsetTop;
    console.log(coordinates);

    document.querySelector(".container-content-items").scrollTo(0, coordinates);
}
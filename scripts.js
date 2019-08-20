var activateMenu = document.getElementById("active-menu");
var menuDynamic = document.getElementById("menu-dynamic");

var container = document.querySelector(".container-content-items");
var containerElements = document.getElementsByClassName("content-item");
var cantNegative = 32; //Cantidad de padding inicial

function showOrHiddeMenu(){
    if(!menuDynamic.classList.contains("show")){
        menuDynamic.classList.add("show");
    }else{
        menuDynamic.classList.remove("show");
    }
}

function showElement(elementClicked){
    
    var element = elementClicked.getAttribute("data-content-item");
    var item = document.getElementById(element);
    var cantNegative = 32; //Cantidad de padding inicial
    var i = 0;

    while(containerElements[i] != item){
        cantNegative = cantNegative + containerElements[i].offsetHeight;
        console.log(cantNegative);
        i++;
    }

    container.setAttribute('style', 'top: -' + cantNegative +'px');

}

// window.addEventListener("scroll", function(){
//     cantNegative = cantNegative - 1;
//     container.setAttribute('style', 'top: -' + cantNegative +'px');
    
// });

// Script para detectar si el scroll sube o baja, tomado de internet

var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
        cantNegative = cantNegative - 1;
        container.setAttribute('style', 'top: -' + cantNegative +'px');
   } else {
        cantNegative = cantNegative + 1;
        container.setAttribute('style', 'top: -' + cantNegative +'px');
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);
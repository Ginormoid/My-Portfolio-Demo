const navbar = document.querySelector(".navbar");
const navitem = document.querySelector(".navitem");

const skill = document.querySelector("#skill");
const about = document.querySelector("#about");
const project = document.querySelector("#project");
const contact = document.querySelector("#contact") 

const menusk = document.querySelector(".menusk");
const menuab = document.querySelector(".menuab");
const menupr = document.querySelector(".menupr");
const menuco = document.querySelector(".menuco");

const menu = document.querySelector(".menu");
const display = document.querySelector(".display");

window.addEventListener("scroll", function(){
    if(window.scrollY > skill.offsetTop - navbar.offsetHeight && window.scrollY < about.offsetTop - navbar.offsetHeight){
        navbar.classList.add("active");
        menusk.classList.add("col");
    }else if(window.scrollY > about.offsetTop - navbar.offsetHeight && window.scrollY < project.offsetTop - navbar.offsetHeight){
        navbar.classList.add("ctive");
        menuab.classList.add("col");
    }else if(window.scrollY > project.offsetTop - navbar.offsetHeight && window.scrollY < contact.offsetTop - navbar.offsetHeight){
        navbar.classList.add("tive");
        menupr.classList.add("col");
    }else if(window.scrollY > contact.offsetTop - navbar.offsetHeight && window.scrollY < 2200){
        navbar.classList.add("ive");
        menuco.classList.add("col");
    }else{
        navbar.classList.remove("active");
        menusk.classList.remove("col");
        navbar.classList.remove("ctive");
        menuab.classList.remove("col");
        navbar.classList.remove("tive");
        menupr.classList.remove("col");
        navbar.classList.remove("ive"); 
        menuco.classList.remove("col"); 
    }
} , 1000)


window.addEventListener("resize", function (){
    if(window.innerWidth < 600){
        menu.classList.add("hide");
        display.classList.add("show");
    }else{
        menu.classList.remove("hide");
        display.classList.remove("show");
    }
})



const web = document.querySelector(".web");
const des = document.querySelector(".des");
const vid = document.querySelector(".vid");
const write = document.querySelector(".write");
const art = document.querySelector(".art");
const eee = document.querySelector(".eee");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slide = document.querySelector(".slide")
const skills = document.querySelector(".skills");
const imgel = document.querySelectorAll(".skills");


let currentimg = 1;


let timeOut;
console.log(imgel)

next.addEventListener("click", function(){
    currentimg++;
    clearTimeout(timeOut);
    updateimg();
})


prev.addEventListener("click", function(){
   currentimg--;
   clearTimeout(timeOut);
   updateimg();
})

updateimg();

function updateimg(){
    if(currentimg > imgel.length){
        currentimg = 1;
    }else if(currentimg < 1){
        currentimg = imgel.length;
    }
    slide.style.transform = `translateX(-${(currentimg - 1)* 68}vw)`;
    timeOut = setTimeout( function(){
        currentimg++;
        updateimg();
    }, 3000)
}



const toggle = document.querySelector(".main");
const input = document.querySelector(".input");
const label = document.querySelector(".label");
const circle = document.querySelector(".circle");
const bod = document.querySelector("body");
const form = document.querySelector("form");
const h1 = document.querySelector("h1");


input.checked = true;

updatebody();

function updatebody(){
    if(input.checked){
       background(); 
    }else{
        changebackground();
    }
}




function background(){
        bod.style.backgroundColor = "rgba(0, 0, 0, 0.74)";
        bod.style.color = "grey";
        h1.style.color = "white";
        about.style.color = "grey";
        menu.style.backgroundColor = "rgb(0, 0, 0)";
        display.style.backgroundColor = "rgb(0, 0, 0)";
        contact.style.backgroundColor = "black";
        project.style.backgroundColor = "black";
        about.style.backgroundColor = "black";
        skill.style.backgroundColor = "black";
        form.style.backgroundColor = "black";  
}
function changebackground(){
        bod.style.backgroundColor = "lightslategray";
        bod.style.color = "black";
        h1.style.color = "grey";
        about.style.color = "black";
        menu.style.backgroundColor = "white";
        display.style.backgroundColor = "white";
        contact.style.backgroundColor = "white";
        project.style.backgroundColor = "white";
        about.style.backgroundColor = "white";
        skill.style.backgroundColor = "white";
        form.style.backgroundColor = "white";  
}

input.addEventListener("input", function(){
    updatebody(); 
})


window.onbeforeunload = function(){
    window.scrollTo(0, 0);  
}
const toggle = document.querySelector(".main");
const sub = document.querySelector(".sub");
const image = document.querySelector(".image");
const bod = document.querySelector("body");;
const h1 = document.querySelector("h1");
const box = document.querySelector(".box");


const skills = ["Frontend Developer", "Video Editor", "Writer", "Yotuber", "Visual Artist", "fashion Designer", "n Elec/Elect Engineer"];

var skillsIndex = 0;

let skillchar = 0

careers();

function careers(){
    skillchar++;
    box.innerHTML = '<h2>I am a ' + skills[skillsIndex].slice(0, skillchar)  +'</h2>';
    if(skillchar === skills[skillsIndex].length){
        skillsIndex++
        skillchar = 0
    }
    if(skillsIndex === skills.length){
        skillsIndex = 0;
    }
    setTimeout(careers, 400);
}



const input = document.querySelector(".input");
const label = document.querySelector(".label");
const circle = document.querySelector(".circle");
const form = document.querySelector("form");



input.checked = true;

updatebody();

function updatebody(){
    if(input.checked){
       background(); 
    }else{
        changebackground();
    }
}

function background (color){
        bod.style.color = "white";
        h1.style.color = "white";
        image.style.color = "white";
        image.style.backgroundImage = " url(img/mac.jpg)";
    }


function changebackground(){
    bod.style.color = "black";
        h1.style.color = "grey";
        image.style.color = "lightslategray";
        image.style.backgroundImage = " url(img/bedroom.jpg)";
}
        
 input.addEventListener("input", function(){
    updatebody(); 
})
 



window.onbeforeunload = function(){
    window.scrollTo(0, 0);
}
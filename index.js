for(var i=0;i<document.querySelectorAll("button.drum").length;i++){
document.querySelectorAll("button.drum")[i].addEventListener("click",handleClick);
function handleClick(){
    var buttonIn = this.innerHTML;  //change var... = new Audio("audio file")
    sound(buttonIn);
    buttonAnime(buttonIn);
}}
document.addEventListener("keydown",function(e){
    sound(e.key);
    buttonAnime(e.key);
})

function sound(key){
    switch (key) { 
        case "w": 
        var crash = new Audio("./sounds/crash.mp3");  
        crash.play();
        break;
        case "a": 
        var snare = new Audio("./sounds/snare.mp3");  
        snare.play();
        break;
        case "s": 
        var kickBass = new Audio("./sounds/kick-bass.mp3");  
        kickBass.play();
        break;
        case "d": 
        var tom1 = new Audio("./sounds/tom-1.mp3");  
        tom1.play();
        break;
        case "j": 
        var tom2 = new Audio("./sounds/tom-2.mp3");  
        tom2.play();
        break;
        case "k": 
        var tom3 = new Audio("./sounds/tom-3.mp3");  
        tom3.play();
        break;
        case "l": 
        var tom4 = new Audio("./sounds/tom-4.mp3");  
        tom4.play();
        break;
        default: console.log("buttonIn");
    }
}

function buttonAnime(currentKey){
    var activebtn = document.querySelector("."+currentKey);
    activebtn.classList.add("pressed");
    setTimeout(function(){ activebtn.classList.remove("pressed");},100); //setTimeout(function_name,delay time);
}
/*document.querySelectorAll("button").addEventListener("click",function(){
    alert("click!");
} anonymous function technique. debugger tool
this - specific id of the button that was triggered.
constructor function- name is capitalized to know the diff. syntax
function HouseKeeper(name,age,experience,workplaces){
    this.name = name;
    this.age = age;
    this.experience = experience;
    this.workPlaces = workplaces;}
TO ADD IN THIS OBJECT WE USE..var houseKeeper1= new HouseKeeper("timmy",34,10,["taj","hyatt"]);
Method: A function associated with an object(it's task to do).
Syntax: function HouseKeeper(name,age,experience,workplaces){
    this.name = name;
    this.age = age;
    this.experience = experience;
    this.workPlaces = workplaces;
    this.moveSuitcase = function(){alert("Can I take ur suitcase");
    pichUpSuitcase();
    move();    }
TO CALL THIS WE USE: houseKeeper1.moveSuitcase();
}*/
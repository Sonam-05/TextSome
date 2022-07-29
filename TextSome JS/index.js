let upperCase = document.getElementById("upperCase");
let lowerCase = document.getElementById("lowerCase");
let italic = document.getElementById("italic");
let normal = document.getElementById("normal");
let smallCaps = document.getElementById("smallCaps");
let textBtn = document.getElementById("textBtn");
let clearText = document.getElementById("clearText");
let clear = document.getElementById("clear");
let p = document.querySelector("p");
let h5 = document.querySelector("h5");
let h3 = document.querySelector("h3");
let h4 = document.querySelector("h4");
let count = document.getElementById("count");
let hello = document.getElementById("hello");

// Uppercase

upperCase.addEventListener("click", function(){
    hello.style.fontVariant = "none";
    hello.value = hello.value.toUpperCase();
    }
);

// Lowercase

lowerCase.addEventListener("click", function(){
    hello.style.fontVariant = "none";
    hello.value = hello.value.toLowerCase();
});

// Italic

italic.addEventListener("click", function(){
    hello.style.fontVariant = "none";
    hello.style.fontStyle = "italic";
});

// Normal

normal.addEventListener("click", function(){
    hello.style.fontStyle = "normal";
});

// Smallcaps

smallCaps.addEventListener("click", function() {
    hello.style.fontVariant = "small-caps";
});

// Text

textBtn.addEventListener("click", function() {
    p.innerText = hello.value;
});

// Clear-text

clearText.addEventListener("click", function(){
    p.innerText = "Text" ;
});

// Clearbox

clear.addEventListener("click", function(){
    hello.style.fontVariant = "none";
    hello.value = null;
});

// Count Functionality

count.addEventListener("click", function(){
    let total = 0;
    for (let i = 0; i < hello.value.length; i++) {
        total += 1;
    }
    h4.innerText = total ;
});

// Time Functionality

setInterval(() => {
    let date = new Date();
    let hrs = date.getHours();
    if(hrs>12){
        hrs = hrs - 12;
    }
    if(hrs<10){
        hrs = "0" + hrs;
    }
    let mins = date.getMinutes();
    if(mins<10){
        mins = "0" + mins;
    }
    let secs = date.getSeconds();
    if(secs<10){
        secs = "0" + secs;
    }
    h5.innerText = `${hrs}:${mins}:${secs}`;
});






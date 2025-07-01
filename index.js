// const clock = document.getElementsByClassName('time') 
const clock = document.querySelector(".time")


setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)
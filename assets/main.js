/*$(document).ready(function() {}*/

let scheduleTime = {
    '9':'',
    '10':'',
    '11':'',
    '12':'',
    '13':'',
    '14':'',
    '15':'',
    '16':'',
    '17':'',
}

// .ready function to update all times as soon as the page is rendered

    let today = function timeStamp (){
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    };
    today();
    //setInterval function to update every second so the today function keeps updating
    setInterval(today, 1000);
    // setting fx to link html time and actual time and color coding

    const currentHour = moment().hour()

    $(".content").each(function(){
        let textArea = $(this)
        const hour=textArea.attr("text-value")
        console.log(hour)
        if (hour<currentHour){
            textArea.addClass('past')
        } else if (hour>currentHour){
            textArea.addClass('future')
        } else {
            textArea.addClass('present')
        };
    })

    /* setting up local storage for each button (prev class method did not work doing everything by ID)*/

const btn1El = document.getElementById("btn1");
const btn2El = document.getElementById("btn2");
const btn3El = document.getElementById("btn3");
const btn4El = document.getElementById("btn4");
const btn5El = document.getElementById("btn5");
const btn6El = document.getElementById("btn6");
const btn7El = document.getElementById("btn7");
const btn8El = document.getElementById("btn8");
const btn9El = document.getElementById("btn9");





btn1El.addEventListener('click', myFunction)
btn2El.addEventListener('click', myFunction)
btn3El.addEventListener('click', myFunction)
btn4El.addEventListener('click', myFunction)
btn5El.addEventListener('click', myFunction)
btn6El.addEventListener('click', myFunction)
btn7El.addEventListener('click', myFunction)
btn8El.addEventListener('click', myFunction)
btn9El.addEventListener('click', myFunction)



const text1El = document.getElementById("text1");
const text2El = document.getElementById("text2");
const text3El = document.getElementById("text3");
const text4El = document.getElementById("text4");
const text5El = document.getElementById("text5");
const text6El = document.getElementById("text6");
const text7El = document.getElementById("text7");
const text8El = document.getElementById("text8");
const text9El = document.getElementById("text9");



text1El.addEventListener('keyup', ()=>{
    btn1El.disabled = !text1El.value;   
});
text2El.addEventListener('keyup', ()=>{
    btn2El.disabled = !text2El.value;   
});
text3El.addEventListener('keyup', ()=>{
    btn3El.disabled = !text3El.value;   
});
text4El.addEventListener('keyup', ()=>{
    btn4El.disabled = !text4El.value;   
});
text5El.addEventListener('keyup', ()=>{
    btn5El.disabled = !text5El.value;   
});
text6El.addEventListener('keyup', ()=>{
    btn6El.disabled = !text6El.value;   
});
text7El.addEventListener('keyup', ()=>{
    btn7El.disabled = !text7El.value;   
});
text8El.addEventListener('keyup', ()=>{
    btn8El.disabled = !text8El.value;   
});
text9El.addEventListener('keyup', ()=>{
    btn9El.disabled = !text9El.value;   
});

let todos=[];

function myFunction (event) {
    event.preventDefault();
    let todoInput= $(".inpValue").val();
    localStorage.setItem("todos", JSON.stringify(todoInput));
    renderTodos();
}

function renderTodos() {
    
    inpValue.innerHTML = todoInput;
    todoInput.push(todos);
    
}



let inputValue = document.getElementsByClassName("inpValue");
let todoInput= JSON.parse(localStorage.getItem('todos'));

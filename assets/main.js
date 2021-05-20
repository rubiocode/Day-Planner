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

    // setting up local storage and render todo list
  
    //create an object - make a key for each hour, set their value to empty string, will be saved in the local storage
  
  //change the scheduleObj to the item saved in the local storage

    /*function init() {
    let storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos !== null) {
        scheduleTime = storedTodos;
    }
    //change the text inside the textarea to the local storage item
    let todosValue = Array.from($('inpValue'));
    todosValue.forEach(element => {
        let timeValue = element.getAttribute('text-value');
        element.textContent(scheduleTime[timeValue]);
    });
}
init();*/


const saveBtn = document.querySelectorAll("myClass");
const todoList = document.querySelector(".container");
const todoInput = document.querySelectorAll(".inpValue");
let todos=[];


function init(){
    let saveTodos= JSON.parse(local.getItem("todos"));
    if (saveTodos !==null) {
        todos = saveTodos;
    }
}

init();


function saveTodos () {

    localStorage.setItem('todos', JSON.stringify(todos));

}

saveBtn.addEventListener ('click', function(event){
    event.preventDefault();
    
        todoInput= todos.values.trim();

    if (todoInput ==="") {
        return;
    }
    todos.push(todoInput);
    todos.value="";


    saveTodos();
});

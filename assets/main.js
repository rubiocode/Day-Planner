
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

function renderTodoList() {
    let todos= localStorage.getItem("todos");
    if (!todos) {
    return;
    };
    $("textarea").text(todos);
}


    
    let btnEl= document.getElementsByClassName("far fa-save")
    
    btnEl.addEventListener("click", function(event) {
        event.preventDefault();
        if (todos==="") {
                alert("Please type a todo in a time slot");
            return;
        } else {
            alert("Todo saved to planner");
            todos;
            localStorage.setItem("todos".todos);
            renderTodoList();
        }
    });
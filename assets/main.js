$(document).ready(function(){

    //loading local storage as soon as page loads

    $("#9am .inpValue").val(localStorage.getItem("9am"));
    $("#10am .inpValue").val(localStorage.getItem("10am"));
    $("#11am .inpValue").val(localStorage.getItem("11am"));
    $("#12pm .inpValue").val(localStorage.getItem("12pm"));
    $("#1pm .inpValue").val(localStorage.getItem("1pm"));
    $("#2pm .inpValue").val(localStorage.getItem("2pm"));
    $("#3pm .inpValue").val(localStorage.getItem("3pm"));
    $("#4pm .inpValue").val(localStorage.getItem("4pm"));
    $("#5pm .inpValue").val(localStorage.getItem("5pm"));
    

// getting time on header set up using moments.js
    
    let today = function timeStamp (){
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    };
    today();
    //setInterval function to update every second so the today function keeps updating
    setInterval(today, 1000);
    
    // setting function to link html time and actual time and color coding

    const currentHour = moment().hour()

    $(".content").each(function(){
        let textArea = $(this)
        const hour=parseInt(textArea.attr("text-value"));


        if (hour<currentHour){
            textArea.addClass('past')
        } else if (hour>currentHour){
            textArea.addClass('future')
        } else {
            textArea.addClass('present')
        };
    })


    /* setting up local storage when save button clicked.
    setting up so no empty input can be saved by alerting user*/
    $(".myClass").on('click', function (event){
        event.preventDefault();

        let todoInput = $(this).siblings(".inpValue").val();
        let timeEl=$(this).parent(".row").attr("id");

        localStorage.setItem(todoInput, JSON.stringify(timeEl));
        

        if (!todoInput || todoInput === "") {
            alert("You must make an entry before saving")
        }
        
    });

}) 

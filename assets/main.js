
// .ready function to update all times as soon as the page is rendered
$(document).ready(function dayPlanner(){
    let today = function timeStamp (){
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    };
    today();
    //setInterval function to update every second so the today function keeps updating
    setInterval(today, 1000);
    // setting fx to link html time and actual time and color coding
    let textarea = $('textarea').attr('timeValue');
    if (textarea < moment().hour()) {
        textarea.addClass('future').css("background-color", "#bebdbd","color", "white");
    } else if (textarea > moment().hour()){
        textarea.addClass('past').css("background-color", "#bebdbd","color", "white");;
    } else {
        textarea.addClass('present').css("background-color", "#bebdbd","color", "white");;
    };
    console.log("textarea", textarea);
})




/*
DONE 1. I need the rows to be populated upon loading the browser window 
DONE 2. each row needs to have a set time of the day 
3. each row has a color class that changes when is past, present, or future time
4. when text is entered in each row, the information entered persist in the row after refreshing the browser window
5. each row has a save button which saves the info to local storage







*/
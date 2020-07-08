// Moment script
var m = moment();

// variables for on save button click 
var eventText;
var eventTime;

// Day, date, time
$("#currentDay").text(moment().format('LLLL'));

// Change date
var datepicker = new ej.calendars.DatePicker({ width: "255px" });

datepicker.appendTo('#datepicker');

$(document).ready( function() {
    colorChange ();
    renderText ();
});

function colorChange () {
    
    var currentTime = moment().hours();
       
// How the slots know if they are past, present or future
    $(".input").each(function () {
        var scheduledTime = parseInt($(this).attr("id"));
               
        if (currentTime > scheduledTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (currentTime < scheduledTime) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    });
}

// var saveWords = JSON.parse(localStorage.getItem("9 am"));
// $("#nineAm").val("");
// $("#nineAm").val(saveWords);
// dummy function that then is called by the first dummy function 
// and prints the localStorage
// informaiton to the page

// function that listen for clicks, knows which row the button is connected
// to, and then runs the dummy function to save the information
// dummy function that allows us to save that row to localStorag
// happens on click of any .saveBtn
$(".completeBtn").click(function() {
    eventText = $(this).siblings(".input").val();
    console.log(eventText);
    eventTime = $(this).siblings(".hour").text();
    console.log(eventTime);
    localStorage.setItem(eventTime, JSON.stringify(eventText));

$(".saveBtn").click(function() {
    eventText = $(this).siblings(".input").val();
    console.log(eventText);
    eventTime = $(this).siblings(".hour").text();
    console.log(eventTime);
    localStorage.setItem(eventTime, JSON.stringify(eventText));

    $(".deleteBtn").click(function() {
        $( ".input" ).remove();
      });
    
    colorChange ();
    renderText ();
})

function renderText () {
    var saveEvent9 = JSON.parse(localStorage.getItem("9:00 am"));
    $("#9").val("");
    $("#9").val(saveEvent9);
    
    var saveEvent10 = JSON.parse(localStorage.getItem("10:00 am"));
    $("#10").val("");
    $("#10").val(saveEvent10);
    
    var saveEvent11 = JSON.parse(localStorage.getItem("11:00 am"));
    $("#11").val("");
    $("#11").val(saveEvent11);
    
    var saveEvent12 = JSON.parse(localStorage.getItem("12:00 pm"));
    $("#12").val("");
    $("#12").val(saveEvent12);
    
    var saveEvent1 = JSON.parse(localStorage.getItem("1:00 pm"));
    $("#13").val("");
    $("#13").val(saveEvent1);

    var saveEvent2 = JSON.parse(localStorage.getItem("2:00 pm"));
    $("#14").val("");
    $("#14").val(saveEvent2);

    var saveEvent3 = JSON.parse(localStorage.getItem("3:00 pm"));
    $("#15").val("");
    $("#15").val(saveEvent3);

    var saveEvent4 = JSON.parse(localStorage.getItem("4:00 pm"));
    $("#16").val("");
    $("#16").val(saveEvent4);

    var saveEvent5 = JSON.parse(localStorage.getItem("5:00 pm"));
    $("#17").val("");
    $("#17").val(saveEvent5);
}});
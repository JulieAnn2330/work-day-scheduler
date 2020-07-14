// Moment script
var m = moment();

// 

// Day, date, time
$("#currentDay").text(moment().format('LLLL'));


$(document).ready( function() {
    colorChange ();
    renderText();
});

function colorChange () {
    
    var currentTime = moment().hours();
    console.log("Current Time" + currentTime);
       
// How the blocks know if they are past, present or future
    $(".input").each(function () {
        var scheduledTime = parseInt($(this).attr("id"));
        console.log(scheduledTime);

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
// Button functionality, variables for on save button click, .val() is where the text goes
var eventText;
var eventTime;

$(".saveBtn").click(function() {
    eventText = $(this).siblings(".input").val();
    console.log(eventText);
    eventTime = $(this).siblings(".hour").text();
    console.log(eventTime);
    localStorage.setItem(eventTime, JSON.stringify(eventText));

    colorChange ();
    renderText ();
    
});

  $(".deleteBtn").click(function() {
        eventText = $(this).siblings(".input").val("");
        eventText = $(this).siblings(".input").val();
        eventTime = $(this).siblings(".hour").text();
        localStorage.setItem(eventTime, JSON.stringify(eventText));
  
    colorChange ();
    renderText ();

});

    // Enter and Display Events
function renderText () {   
    var saveEventText8 = JSON.parse(localStorage.getItem("8:00 am"));
    $("#8").val("");
    $("#8").val(saveEventText8);

    var saveEventText9 = JSON.parse(localStorage.getItem("9:00 am"));
    $("#9").val("");
    $("#9").val(saveEventText9);
    
    var saveEventText10 = JSON.parse(localStorage.getItem("10:00 am"));
    $("#10").val("");
    $("#10").val(saveEventText10);
    
    var saveEventText11 = JSON.parse(localStorage.getItem("11:00 am"));
    $("#11").val("");
    $("#11").val(saveEventText11);
    
    var saveEventText12 = JSON.parse(localStorage.getItem("12:00 pm"));
    $("#12").val("");
    $("#12").val(saveEventText12);
    
    var saveEventText1 = JSON.parse(localStorage.getItem("1:00 pm"));
    $("#13").val("");
    $("#13").val(saveEventText1);

    var saveEventText2 = JSON.parse(localStorage.getItem("2:00 pm"));
    $("#14").val("");
    $("#14").val(saveEventText2);

    var saveEventText3 = JSON.parse(localStorage.getItem("3:00 pm"));
    $("#15").val("");
    $("#15").val(saveEventText3);

    var saveEventText4 = JSON.parse(localStorage.getItem("4:00 pm"));
    $("#16").val("");
    $("#16").val(saveEventText4);

    var saveEventText5 = JSON.parse(localStorage.getItem("5:00 pm"));
    $("#17").val("");
    $("#17").val(saveEventText5);

    var saveEventText6 = JSON.parse(localStorage.getItem("6:00 pm"));
    $("#18").val("");
    $("#18").val(saveEventText6);

    var saveEventText7 = JSON.parse(localStorage.getItem("7:00 pm"));
    $("#19").val("");
    $("#19").val(saveEventText7);

    var saveEventText8P = JSON.parse(localStorage.getItem("8:00 pm"));
    $("#20").val("");
    $("#20").val(saveEventText8P);

};

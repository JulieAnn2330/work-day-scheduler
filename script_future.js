// Moment script
var m = moment();

// variables for on save button click 
var eventWords;
var eventHours;

// Day, date, time
$("#currentDayPlusOne").text(moment().add(24, "hours").format('dddd, MMMM Do, YYYY'));



$(document).ready( function() {
    changeColor ();
    textRender();
});

function changeColor () {
    
    var futureHour = moment().add(24, "hours");
    console.log("Current Time" + futureHour);
       
// How the blocks know if they are past, present or future
    $(".input").each(function () {
        var scheduledEvent = parseInt($(this).attr("id"));
        console.log(scheduledEvent);

        if (futureHour > futureHour) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        } else if (futureHour == futureHour) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
    });
}
// Button functionality, .val() is where the text goes
$(".completeBtn").click(function() {
    eventWords = $(this).siblings(".input").val($(this).css("text-decoration", "line-through"));
    console.log(eventText);
    eventHours = $(this).siblings(".hour").text();
    console.log(eventHours);
    localStorage.setItem(eventHours, JSON.stringify(eventWords));

    // colorChange ();
    // renderText ();

   });

$(".saveBtn").click(function() {
    eventWords = $(this).siblings(".input").val();
    console.log(eventWords);
    eventHours = $(this).siblings(".hour").text();
    console.log(eventHours);
    localStorage.setItem(eventHours, JSON.stringify(eventWords));

    // colorChange ();
    // renderText ();
    
});

    $(".deleteBtn").click(function() {
        eventWords = $(this).siblings(".input").val("");
        eventWords = $(this).siblings(".input").val();
        eventHours = $(this).siblings(".hour").text();
        localStorage.setItem(eventHours, JSON.stringify(eventWords));
  
    changeColor ();
    textRender ();

});

    // Enter and Display Events
function textRender () {   
    var saveEventText8AM = JSON.parse(localStorage.getItem("8:00am"));
    $("#8AM").val("");
    $("#8AM").val(saveEventText8AM);

    var saveEventText9AM = JSON.parse(localStorage.getItem("9:00am"));
    $("#9AM").val("");
    $("#9AM").val(saveEventText9AM);
    
    var saveEventText10AM = JSON.parse(localStorage.getItem("10:00am"));
    $("#10AM").val("");
    $("#10AM").val(saveEventText10AM);
    
    var saveEventText11AM = JSON.parse(localStorage.getItem("11:00am"));
    $("#11AM").val("");
    $("#11AM").val(saveEventText11AM);
    
    var saveEventText12PM = JSON.parse(localStorage.getItem("12:00pm"));
    $("#12PM").val("");
    $("#12PM").val(saveEventText12PM);
    
    var saveEventText1PM = JSON.parse(localStorage.getItem("1:00pm"));
    $("#13PM").val("");
    $("#13PM").val(saveEventText1PM);

    var saveEventText2PM = JSON.parse(localStorage.getItem("2:00pm"));
    $("#14PM").val("");
    $("#14PM").val(saveEventText2PM);

    var saveEventText3PM = JSON.parse(localStorage.getItem("3:00pm"));
    $("#15PM").val("");
    $("#15PM").val(saveEventText3PM);

    var saveEventText4PM = JSON.parse(localStorage.getItem("4:00pm"));
    $("#16PM").val("");
    $("#16PM").val(saveEventText4PM);

    var saveEventText5PM = JSON.parse(localStorage.getItem("5:00pm"));
    $("#17PM").val("");
    $("#17PM").val(saveEventText5PM);

    var saveEventText6PM = JSON.parse(localStorage.getItem("6:00pm"));
    $("#18PM").val("");
    $("#18PM").val(saveEventText6PM);

    var saveEventText7PM = JSON.parse(localStorage.getItem("7:00pm"));
    $("#19PM").val("");
    $("#19PM").val(saveEventText7PM);

    var saveEventText8PM = JSON.parse(localStorage.getItem("8:00pm"));
    $("#20PM").val("");
    $("#20PM").val(saveEventText8PM);

};
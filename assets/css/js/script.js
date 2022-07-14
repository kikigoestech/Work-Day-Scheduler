$(document).ready(function(){
    $("#currentDay").html(moment().format("dddd, MMMM Do"));
});

// once the user log into the website the document will run 

$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        var hour = $(this).parent().attr("id");
        var txt = $(this).siblings(".description").val();

        localStorage.setItem(hour,txt);
    });

    function checkTime(){

        var now = moment().hour();
        console.log(now);

        
        $(".time-block").each(function(){
            
            var timeFrame = parseInt($(this).attr("id").split('hour')[2]);
            console.log("timeFrame check" + timeFrame);

            //color will change depending on time  

            if(timeFrame < now){
                $(this).removeClass("present");
                $(this).removeClass("future");
                $(this).addClass("past");
            }
            else if(timeFrame === now) {
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            };
        });
    }; // end checkTime

     // adding the id and the user input into the local storage
     $("#hour-9 .description").val(localStorage.getItem("hour-9"));
     $("#hour-10 .description").val(localStorage.getItem("hour-10"));
     $("#hour-11 .description").val(localStorage.getItem("hour-11"));
     $("#hour-12 .description").val(localStorage.getItem("hour-12"));
     $("#hour-13 .description").val(localStorage.getItem("hour-13"));
     $("#hour-14 .description").val(localStorage.getItem("hour-14"));
     $("#hour-15 .description").val(localStorage.getItem("hour-15"));
     $("#hour-16 .description").val(localStorage.getItem("hour-16"));
     $("#hour-17 .description").val(localStorage.getItem("hour-17"));
 
     checkTime();
 
 }); // end of document 

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

            //time the color will be change/remove 

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

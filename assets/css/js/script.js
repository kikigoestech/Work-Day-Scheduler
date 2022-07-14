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


$(".toggleButton").hover(function(){
    $(this).addClass("highlight");
},function(){
    $(this).removeClass("highlight");
})


$(".toggleButton").click(function(){
    $(this).toggleClass("active");
})


// for textArea

$(".panel").height($(window).height() -100)

$(".panel").width(($(window).width() / 3) - 35)
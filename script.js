// for javascript editor

function outputPanel(){
    $("iframe").contents().find("html").html("<html><head><style>" + $("#cssPanel").val() +"</style></head><body>" + $("#htmlPanel").val() +"</body></html>");
    document.getElementById("outputPanel").contentWindow.eval($("#jsPanel").val());
}

$(".toggleButton").hover(function(){
    $(this).addClass("highlight");
},function(){
    $(this).removeClass("highlight");
})


$(".toggleButton").click(function(){
    $(this).toggleClass("active");
    $(this).removeClass("highlight");
    var panelID = $(this).attr("id") + "Panel";
    $("#" + panelID).toggleClass("hidden");

    var activePanels = 4 - $(".hidden").length;
    $(".panel").width(($(window).width() / activePanels) - 35)
    
})


// for textArea

$(".panel").height($(window).height() -100)

outputPanel();

$("textarea").on("change keyup paste", function(){
    outputPanel();
})
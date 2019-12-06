$(document).ready(function(){
    $("#hide").click(function(){
        $("img[src*='post']").hide();
    });

    $("#show").click(function(){
        $("img[src*='post']").show();
    });
});


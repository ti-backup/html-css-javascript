$(document).ready(function(){
    $("#hide").click(function(){
        $("img[src*='post1']").hide(1500);
    });

    $("#show").click(function(){
        $("img[src*='post1']").show("slow");
    });

    $("#slideup").click(function(){
        $("img[src*='post2']").slideUp(2000);
    });

    $("#slidedown").click(function(){
        $("img[src*='post2']").slideDown();
    });

    $("#fadeout").click(function(){
        $("img[src*='post3']").fadeOut(2000);
    });

    $("#fadein").click(function(){
        $("img[src*='post3']").fadeIn();
    });

    $("#toggle").click(function(){
        $("img[src*='post4']").toggle(2000);
    });

    $("#slideToggle").click(function(){
        $("img[src*='post5']").slideToggle(2000);
    });

    $("#fadeToggle").click(function(){
        $("img[src*='post6']").fadeToggle(2000);
    });

    $("p button").click(function(){
        $("img[src*='post']").toggleClass("col-12");
    });
});


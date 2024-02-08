
$(document).on('ready', function () {
    
    //to auto change date in footer
    var date = new Date();
    var year = date.getFullYear();
    document.getElementById("year").innerHTML = year;
});

//for side nav
$(document).on('ready', function () {

    if($(window).width() < 1024){
        $("#contact-container > #nav-link").attr('href','https://share.hsforms.com/1gkFtNzjGTiazX19liGrYUgqr4pd');
        $("#contact-container > #nav-link").attr('target','_blank');

    }

    $(".sidenav").on("click", function () {

        if($(window).width() >= 1024){
            if ($(".side").css("width") == "100px") {
                $(".side").css("width", "600px");
                $(".side").css("display", "block");
            }
            else {
                $(".side").css("width", "100px");
                $(".side").css("display", "none");
            }
        }
        
    });

    $("#contact-container").on("click", function () {

        if($(window).width() >= 1024){
            if ($(".side").css("width") == "100px") {
                $(".side").css("width", "600px");
                $(".side").css("display", "block");
            }
            else {
                $(".side").css("width", "100px");
                $(".side").css("display", "none");
            }
        }

    });


    $(".close-button").on("click", function () {
        $(".side").css("width", "0px");
        $(".side").css("display", "none");
    });
});


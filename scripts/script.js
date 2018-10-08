var expanded = false;
var name, email, phoneNum, message;
var contactInfo = new Array();
var sections = new Array();

$(function () {
    sections.push($(".about-us"), $(".menuDiv"), $(".contactDiv"));
});

/*
 * Handle trnasitions
 */

$(function () {
    $windowBottom = $(window).scrollTop() + $(window).height(); //get the position of the bottom of client's window
    $(window).scroll(function () {
        for (var i = 0; i < sections.length; i++) {
            //if the bottom of the window is lower of equal to the top of a section
            if ($(window).scrollTop() + $(window).height() >= sections[i].position().top + 50) {

                //float section into view
                sections[i].css({
                    transitionDuration: "1s",
                    transform: "translate(0, 0)",
                    opacity: "1"
                });
            }
        }
    });
});

/*
 * if window is resized reset the nav menu display
 */

function expand() {
    !expanded ? $("#mainNav").css({ "opacity": "1", "transform": "translateX(0%)" })
        : $("#mainNav").css({ "opacity": "0", "transform": "translateX(-100%)" });

    expanded = !expanded;
}

/*
 * expand phone navigation
 */

function displayNavMenu() {
    if (window.innerWidth > 480) {
        document.getElementById("mainNav").style.display = "block";
    }
}

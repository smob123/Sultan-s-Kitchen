var expanded = false;

/*
 * display side nav when phone div is clicked
 */

function expand() {
    !expanded ? $("#mainNav").css({ "opacity": "1", "transform": "translateX(0%)" })
        : $("#mainNav").css({ "opacity": "0", "transform": "translateX(-100%)" });

    expanded = !expanded;
}

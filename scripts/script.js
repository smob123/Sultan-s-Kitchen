//phone nav sandwich menu bars
const bar1 = document.querySelector('#bar1');
const bar2 = document.querySelector('#bar2');
const bar3 = document.querySelector('#bar3');
const nav = document.querySelector('#mainNav');
let expanded = false; //checks if the phone nav is expanded

//meal types IDs
const menuTypes = ['#breakfast', '#lunch', '#dinner'];
const menuTypesButtons = ['#breakfast-button', '#lunch-button', '#dinner-button'];

/*
 * display side nav when phone div is clicked
 */

function expand() {
    if (!expanded) {
        bar1.style['transform'] = 'translate(100vw)';
        bar2.style['transform'] = 'rotate(60deg)';
        bar3.style['transform'] = 'rotate(-60deg)';
        bar3.style['bottom'] = '30%';
        nav.style['opacity'] = '1';
        nav.style['transform'] = 'translateX(0%)';
    } else {
        bar1.style['transform'] = 'translate(0)';
        bar2.style['transform'] = 'rotate(0)';
        bar3.style['transform'] = 'rotate(0)';
        bar3.style['bottom'] = '0';
        nav.style['opacity'] = '0';
        nav.style['transform'] = 'translateX(200%)';
    }

    expanded = !expanded;
}

function showMealType(type, button) {
    button.classList.add('menu-types-active');
    menuTypes.forEach((item, index) => {
        if (type !== item) {
            document.querySelector(item).style['display'] = 'none';
            document.querySelector(menuTypesButtons[index]).classList.remove('menu-types-active');
            document.querySelector(menuTypesButtons[index]).classList.add('menu-types-default');
        }
    });

    document.querySelector(type).style['display'] = 'grid';
}

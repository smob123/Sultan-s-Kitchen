//navigation bar style handeling
const stickyNav = document.querySelector('.title-bar');
const navElems = document.querySelectorAll('.title-bar p');
const titleElem = document.querySelector('.title-bar span');
let backgroundColor = '';
let txtColor = '';

//if the screen size is at least 600px
if (window.innerWidth >= 600) {

    //change the header's background color, and the text color
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 0) {
            backgroundColor = '#fff';
            txtColor = '#787878';
        }
        else {
            backgroundColor = 'rgba(0, 0, 0, 0)';
            txtColor = '#fff';
        }

        stickyNav.style['background-color'] = backgroundColor;
        titleElem.style['color'] = txtColor;
        for (const elem of navElems) {
            elem.style['color'] = txtColor;
        }
    });
}

//shows the reservation container
function showReservation() {
    const container = document.querySelector('.reservation-container');

    container.style['opacity'] = 1;
    container.style['pointer-events'] = 'initial';

    //display the dates for the next three days on the dates selection
    const dates = document.querySelector('.reservation-date select');
    const d = new Date();
    for (let i = 0; i < 3; i++) {
        d.setDate(d.getDate() + 1);
        dates.innerHTML += `<option>${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}</option>`;
    }
}

function hideReservation() {
    const container = document.querySelector('.reservation-container');

    container.style['opacity'] = 0;
    container.style['pointer-events'] = 'none';
}

//phone nav sandwich menu bars
const bar1 = document.querySelector('#bar1');
const bar2 = document.querySelector('#bar2');
const bar3 = document.querySelector('#bar3');
const nav = document.querySelector('#main-nav');
let expanded = false; //checks if the phone nav is expanded

//meal types IDs
const menuTypes = ['#breakfast-menu-container', '#lunch-menu-container', '#dinner-menu-container'];

//displays side nav when phone div is clicked
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

//handles showing different menus
function showMenu(menuId) {
    menuTypes.forEach((item, index) => {
        if (`#${menuId}` !== item) {
            document.querySelector(item).style['display'] = 'none';
        }
    });

    document.querySelector(`#${menuId}`).style['display'] = 'grid';
}


//handles page navigation
function scrollToSection(secName) {
    const elem = document.getElementById(secName);
    console.log(elem);
    window.scroll({
        top: elem.offsetTop - 50,
        behavior: 'smooth'
    });

    if (window.innerWidth < 600) {
        expand();
    }
}

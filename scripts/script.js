//navigation bar style handeling
const stickyNav = document.querySelector('.title-bar');
const navElems = document.querySelectorAll('.title-bar p');
const titleElem = document.querySelector('.title-bar span');
let backgroundColor = '';
let txtColor = '', oldTxtColor = '';

//if the screen size is at least 600px
if (window.innerWidth >= 600) {

    //change the header's background color, and the text color
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 0) {
            backgroundColor = '#fff';
            txtColor = 'dark-txt';
            oldTxtColor = 'white-txt'
        }
        else {
            backgroundColor = 'rgba(0, 0, 0, 0)';
            txtColor = 'white-txt';
            oldTxtColor = 'dark-txt';
        }

        stickyNav.style['background-color'] = backgroundColor;
        titleElem.classList.remove(oldTxtColor);
        titleElem.classList.add(txtColor);
        for (const elem of navElems) {
            elem.classList.remove(oldTxtColor);
            elem.classList.add(txtColor);
        }
    });
}

//shows the reservation container
function showReservation() {
    const container = document.querySelector('.reservation-container');
    const body = document.querySelector('body');

    container.style['opacity'] = 1;
    container.style['pointer-events'] = 'initial';

    //hide the scroller for the body element
    body.style['overflow-y'] = 'hidden';

    //display the dates for the next three days on the dates selection
    const dates = document.querySelector('.reservation-date select');
    const dateElems = dates.childElementCount; //the number of elements in the drop down menu

    //if there are no dates in the drop down menu
    if (dateElems === 0) {
        //add three dates starting from today
        const d = new Date();
        for (let i = 0; i < 3; i++) {
            d.setDate(d.getDate() + 1);
            dates.innerHTML += `<option>${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}</option>`;
        }
    }
}

function validateReservation() {
    const inputs = document.querySelectorAll('.reservation-form input');
    let valid = true; //assume that the inputs are valid

    for (input of inputs) {
        //if any of the inputs is empty, or dosen't match its specified type
        if (input.value.trim() === '' || input.validity.typeMismatch) {
            valid = false;
        }
    }

    if (valid) {
        window.event.preventDefault();
        alert('Your reservation has been confirmed.\nSee you soon!');
        hideReservation();
    }
}

function hideReservation() {
    const container = document.querySelector('.reservation-container');
    const body = document.querySelector('body');

    container.style['opacity'] = 0;
    container.style['pointer-events'] = 'none';

    //show the scroller for the body element
    body.style['overflow-y'] = 'scroll';
}

//phone nav sandwich menu bars
const bar1 = document.querySelector('#bar1'); //top bar
const bar2 = document.querySelector('#bar2'); //middle bar
const bar3 = document.querySelector('#bar3'); //bottom bar
const nav = document.querySelector('#main-nav'); //nav elements container
let expanded = false; //checks if the phone nav is expanded

//meal types IDs
const menuTypes = ['#breakfast-menu-container', '#lunch-menu-container', '#dinner-menu-container'];

//displays side nav when phone div is clicked
function expand() {
    if (!expanded) {
        bar1.style['transform'] = 'translate(100vw)';
        bar1.style['float'] = 'right';
        bar2.style['transform'] = 'rotate(60deg)';
        bar2.style['top'] = '30%';
        bar3.style['transform'] = 'rotate(-60deg)';
        nav.style['opacity'] = '1';
        nav.style['transform'] = 'translateX(0%)';
    } else {
        bar1.style['transform'] = 'translate(0)';
        bar1.style['float'] = 'none';
        bar2.style['transform'] = 'rotate(0)';
        bar2.style['top'] = '0';
        bar3.style['transform'] = 'rotate(0)';
        nav.style['opacity'] = '0';
        nav.style['transform'] = 'translateX(100vw)';
    }

    expanded = !expanded;
}

//handling displaying different menus on the menus section
function showMenu(menuId) {
    menuTypes.forEach((item, index) => {
        if (`#${menuId}` !== item) {
            document.querySelector(item).style['transform'] = 'translateY(10%)';
            document.querySelector(item).style['opacity'] = '0';
        }
    });

    document.querySelector(`#${menuId}`).style['transform'] = 'translateY(0)';
    document.querySelector(`#${menuId}`).style['opacity'] = '1';
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

//handling offers-section slider
const offersNavBtns = document.querySelectorAll('.offers-nav button'); //slider navigation buttons
const slideContainer = document.querySelector('.slides');

function slidePos(btn) {
    offersNavBtns.forEach((item, index) => {
        //check if user clicked on a button that's not currently selected
        if (item !== btn && item.className == 'checked') {
            item.classList.remove('checked');
        }
        else if (item === btn) {
            item.classList.add('checked');
            changeSlides(index); //move the slider container to view the target slide
        }
    });
}

function changeSlides(slidePos) {
    //move the container based on the target slide's position
    slideContainer.style['transform'] = `translateX(-${slidePos * 100}%)`;
}

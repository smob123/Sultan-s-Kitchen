//handle dom elements loading
document.addEventListener('DOMContentLoaded', () => {
    const loadingContainer = document.querySelector('.loading-container');

    //if the loading container exists
    if (loadingContainer) {
        loadingContainer.classList.add('finished'); //hide it

        //remove it from the dom after one second
        setTimeout(() => {
            loadingContainer.style['display'] = 'none';
        }, 1000);
    }

    //make the page scrollable again
    document.querySelector('body').style['overflow-y'] = 'auto';
});

//handle navigation bar styling
const stickyNav = document.querySelector('#title-bar');
const headerVideo = document.querySelector('video');

//change the header's background color, and the text color
window.addEventListener('scroll', () => {
    //if the window's y offset is larger than the header's height
    if (headerVideo) {
        if (window.pageYOffset >= window.innerHeight) {
            headerVideo.pause(); //pause the background video
        }
        else {
            headerVideo.play(); //otherwise play the video
        }
    }

    //if the screen size is at least 600px
    if (window.innerWidth >= 600) {
        if (window.pageYOffset > 0) {
            stickyNav.classList.add('scrolled');
        }
        else {
            stickyNav.classList.remove('scrolled');
        }
    }
});

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

//phone nav hamburger menu bars
const phoneNave = document.querySelector('#phone-nav');
const nav = document.querySelector('#main-nav'); //nav elements container
let expanded = false; //checks if the phone nav is expanded

//meal types IDs
const menuTypes = ['#breakfast-menu-container', '#lunch-menu-container', '#dinner-menu-container'];

//displays side nav when phone div is clicked
function expand() {
    if (!expanded) {
        phoneNave.classList.add('expanded');
        nav.classList.add('visible');
    } else {
        phoneNave.classList.remove('expanded');
        nav.classList.remove('visible');
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

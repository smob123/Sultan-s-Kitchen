const elements = document.querySelectorAll('.hidden'); //all hidden elements

window.addEventListener('scroll', () => {
    for (let i = 0; i < elements.length; i++) {
        //if the elemnt's top position is larger than 1/3 of the window's height
        if ((window.pageYOffset + window.innerHeight) / 3 > elements[i].getBoundingClientRect().top) {
            elements[i].classList.remove('hidden'); //remove the hidden class to make the element visible
        }
    }
});

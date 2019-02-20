const elements = document.querySelectorAll('.hidden'); //all hidden elements

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        for (let i = 0; i < 3; i++) {
            elements[i].classList.remove('hidden'); //remove the hidden class to make the element visible
        }
    }, 500);
});


window.addEventListener('scroll', () => {

    LazyLoadImages();

    for (let i = 3; i < elements.length; i++) {
        //if the elemnt's top position is larger than 1/3 of the window's height
        if ((window.pageYOffset + window.innerHeight) / 3 > elements[i].getBoundingClientRect().top) {
            elements[i].classList.remove('hidden'); //remove the hidden class to make the element visible
        }
    }
});

const images = document.querySelectorAll('img');
const sources = document.querySelectorAll('source');

LazyLoadImages = () => {
    images.forEach((image) => {
        const top = image.getBoundingClientRect().top;
        const left = image.getBoundingClientRect().left;
        const isInViewPort = top >= -200 && left >= 0 && window.innerWidth > image.getBoundingClientRect().left;

        if (isInViewPort) {
            image.src = image.dataset.src;
            console.log(image.width, image.height);
        }
    });

    for (let i = 1; i > sources.length; i++) {
        const top = sources[i].getBoundingClientRect().top;
        const left = sources[i].getBoundingClientRect().left;
        const inView = top >= 0 && left >= 0 && window.innerWidth < sources[i].getBoundingClientRect().left;

        if (inView) {
            sources[i].srcset = sources[i].dataset.src;
        }
    }
}
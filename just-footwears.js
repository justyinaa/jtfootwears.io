const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-control-prev');
const nextButton = document.querySelector('.carousel-control-next');
let currentItemIndex = 0;

function activateItem(index) {
    carouselItems[currentItemIndex].classList.remove('active');
    carouselItems[index].classList.add('active');
    currentItemIndex = index;
}

prevButton.addEventListener('click', () => {
    let newIndex = currentItemIndex - 1;
    if (newIndex < 0) {
        newIndex = carouselItems.length - 1;
    }
    activateItem(newIndex);
});

nextButton.addEventListener('click', () => {
    let newIndex = currentItemIndex + 1;
    if (newIndex >= carouselItems.length) {
        newIndex = 0;
    }
    activateItem(newIndex);
});
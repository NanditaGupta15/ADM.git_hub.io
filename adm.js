const carousel1 = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel img');
let currentIndex = 0;
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
}) 
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}


var carousel = new bootstrap.Carousel(document.querySelector('#carouselExampleIndicators'));
var indicators = document.querySelectorAll('.indicator');

carousel._element.addEventListener('slide.bs.carousel', function (e) {
    var targetIndex = e.to;
    
    indicators.forEach(function (indicator) {
        indicator.classList.remove('active');
    });
    
    indicators[targetIndex].classList.add('active');
});


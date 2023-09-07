var carousel = new bootstrap.Carousel(document.querySelector('#carouselExampleIndicators'));
var indicators = document.querySelectorAll('.indicator');

carousel._element.addEventListener('slide.bs.carousel', function (e) {
    var targetIndex = e.to;
    
    indicators.forEach(function (indicator) {
        indicator.classList.remove('active');
    });
    
    indicators[targetIndex].classList.add('active');
});

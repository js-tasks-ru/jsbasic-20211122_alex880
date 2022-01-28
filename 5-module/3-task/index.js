function initCarousel() {
  let carousel = document.querySelector('.carousel__inner');
  let slidesCount = carousel.children.length;
  let index = 1;
  let slideSize = 0;
  let carouselLeft = document.querySelector('.carousel__arrow_left');
  let carouselRight = document.querySelector('.carousel__arrow_right');

  carouselLeft.style.display = 'none';

  carouselRight.onclick = function() {
    slideSize += carousel.offsetWidth;
    carousel.style.transform = `translateX(-${slideSize}px)`;
    index++;
    this.style.display = index === slidesCount ? 'none' : '';
    carouselLeft.style.display = index !== 0 ? '' : 'none';
  };

  carouselLeft.onclick = function() {
    slideSize -= carousel.offsetWidth;
    carousel.style.transform = `translateX(-${slideSize}px)`;
    index--;
    this.style.display = index === 0 ? 'none' : '';
    carouselRight.style.display = index !== slidesCount ? '' : 'none';
  };
}

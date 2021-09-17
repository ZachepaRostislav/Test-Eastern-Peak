let offset = 0;
const sliderContent = document.querySelector('.slider-content');

document.querySelector('.right').addEventListener('click', function () {
  offset = offset + 300;
  if (offset > 1200) {
    offset = 0;
  }
  sliderContent.style.left = -offset + 'px';
});

document.querySelector('.left').addEventListener('click', function () {
  offset = offset - 300;
  if (offset < 0) {
    offset = 1200;
  }
  sliderContent.style.left = -offset + 'px';
});
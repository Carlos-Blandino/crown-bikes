const slideshow_container = document.querySelector(".testimonial-slider");
const slider = new Flickity(slideshow_container, {
  // options
  cellAlign: "center",
  wrapAround: true,
  autoPlay: false,
  fullscreen: true,
  pageDots: false,
});

const imageCarousel = (() => {
  let currentSlide = 0;
  const slideNodes = document.getElementsByClassName("mySlides");
  const slideArray = [...slideNodes];
  const dotsNodes = document.getElementsByClassName("dot");
  const dotsArray = [...dotsNodes];

  const changeSlide = (event) => {
    if (event.target.className === "right") {
      currentSlide =
        currentSlide === slideNodes.length - 1 ? 0 : currentSlide + 1;
    } else {
      currentSlide =
        currentSlide === 0 ? slideNodes.length - 1 : currentSlide - 1;
    }
    displayCurrentSlide();
  };

  const displayCurrentSlide = () => {
    slideArray.forEach((slide) => (slide.style.display = "none"));
    slideNodes[currentSlide].style.display = "block";
    dotsArray.forEach((dot) => (dot.style.backgroundColor = "#bbb"));
    dotsNodes[currentSlide].style.backgroundColor = "rgb(94, 94, 94)";
  };

  displayCurrentSlide();
  setInterval(function () {
    currentSlide =
      currentSlide === slideNodes.length - 1 ? 0 : currentSlide + 1;
    displayCurrentSlide();
  }, 5000);

  return { changeSlide };
})();

const eventListener = (() => {
  //handles all of the event handlers for the project in 1 module.
  const leftButton = document.querySelector(".left");
  leftButton.addEventListener("click", imageCarousel.changeSlide);

  const rightButton = document.querySelector(".right");
  rightButton.addEventListener("click", imageCarousel.changeSlide);
})();

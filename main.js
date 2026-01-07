// START YOGA CAROUSEL

let slideIndexYoga = 1;
showSlidesYoga(slideIndexYoga);

// Next/previous controls
function plusSlidesYoga(m) {
  showSlidesYoga((slideIndexYoga += m));
}

// Thumbnail image controls
function currentSlideYoga(m) {
  showSlidesYoga((slideIndexYoga = m));
}

function showSlidesYoga(m) {
  let j;
  let slidesYoga = document.getElementsByClassName("carousel");
  let dotsYoga = document.getElementsByClassName("dot-yoga");
  if (m > slidesYoga.length) {
    slideIndexYoga = 1;
  }
  if (m < 1) {
    slideIndexYoga = slidesYoga.length;
  }
  for (j = 0; j < slidesYoga.length; j++) {
    slidesYoga[j].style.display = "none";
  }
  for (j = 0; j < dotsYoga.length; j++) {
    dotsYoga[j].className = dotsYoga[j].className.replace(" active", "");
  }
  slidesYoga[slideIndexYoga - 1].style.display = "block";
  dotsYoga[slideIndexYoga - 1].className += " active";
}
// END YOGA CAROUSEL



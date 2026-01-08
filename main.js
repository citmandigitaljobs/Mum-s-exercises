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


// ---------------

// Get the modal
var modalOne = document.getElementById("modalOne");

// Get the button that opens the modal
var btnOne = document.getElementById("buttonOne");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-one")[0];

// When the user clicks on the button, open the modal
btnOne.onclick = function() {
  modalOne.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalOne.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(eventOne) {
//   if (eventOne.target == modalOne) {
//     modalOne.style.display = "none";
//   }
// };

// ---------------

// Get the modal
var modalTwo = document.getElementById("modalTwo");

// Get the button that opens the modal
var btnTwo = document.getElementById("buttonTwo");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-two")[0];

// When the user clicks on the button, open the modal
btnTwo.onclick = function() {
  modalTwo.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalTwo.style.display = "none";
};

// ---------------

// Get the modal
var modalThree = document.getElementById("modalThree");

// Get the button that opens the modal
var btnThree = document.getElementById("buttonThree");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-three")[0];

// When the user clicks on the button, open the modal
btnThree.onclick = function() {
  modalThree.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalThree.style.display = "none";
};

// ---------------

// Get the modal
var modalFour = document.getElementById("modalFour");

// Get the button that opens the modal
var btnFour = document.getElementById("buttonFour");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-four")[0];

// When the user clicks on the button, open the modal
btnFour.onclick = function() {
  modalFour.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalFour.style.display = "none";
};

// ---------------

// Get the modal
var modalFive = document.getElementById("modalFive");

// Get the button that opens the modal
var btnFive = document.getElementById("buttonFive");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-five")[0];

// When the user clicks on the button, open the modal
btnFive.onclick = function() {
  modalFive.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalFive.style.display = "none";
};

// ---------------

// PREVIEW MODAL START

// Get the modal
var modalSix = document.getElementById("modalSix");

// Get the button that opens the modal
var btnSix = document.getElementById("buttonSix");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-six")[0];

// When the user clicks on the button, open the modal
btnSix.onclick = function() {
  modalSix.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalSix.style.display = "none";
};

// ---------------

// Get the modal
var modalSeven = document.getElementById("modalSeven");

// Get the button that opens the modal
var btnSeven = document.getElementById("buttonSeven");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-seven")[0];

// When the user clicks on the button, open the modal
btnSeven.onclick = function() {
  modalSeven.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalSeven.style.display = "none";
};

// ---------------

// Get the modal
var modalEight = document.getElementById("modalEight");

// Get the button that opens the modal
var btnEight = document.getElementById("buttonEight");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-eight")[0];

// When the user clicks on the button, open the modal
btnEight.onclick = function() {
  modalEight.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalEight.style.display = "none";
};

// ---------------

// Get the modal
var modalNine = document.getElementById("modalNine");

// Get the button that opens the modal
var btnNine = document.getElementById("buttonNine");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-nine")[0];

// When the user clicks on the button, open the modal
btnNine.onclick = function() {
  modalNine.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalNine.style.display = "none";
};

// ---------------
// PREVIEW MODAL END



// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(eventTwo) {
//   if (eventTwo.target == modalTwo) {
//     modalTwo.style.display = "none";
//   }
// };
// ------------


// Function to close all modals
  // function closeAllModals() {
  //   document.querySelectorAll('.modal').forEach(modal => {
  //     modal.classList.display('none');
  //         modal.classList.style.display('none');
  //   });
  // }

// Listen for clicks anywhere on the window
  // window.addEventListener('click', function(event) {
  //   // If the click is NOT inside a modal-content, close all modals
  //   if (!event.target.closest('.modal')) {
  //     closeAllModals();
  //   }
  // });

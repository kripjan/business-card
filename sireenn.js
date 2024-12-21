const pages = document.querySelector('.pages');
const pageElements = document.querySelectorAll('.page');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
const dots = document.querySelectorAll('.dots li');

let currentPageIndex = 0;

function updatePageVisibility() {
    // Adjust transform for page sliding
    pages.style.transform = `translateX(-${currentPageIndex * 100}vw)`;

    // button visibility
    prevButton.style.visibility = currentPageIndex === 0 ? 'hidden' : 'visible';
    nextButton.style.visibility = currentPageIndex === pageElements.length - 1 ? 'hidden' : 'visible';

    // Updating dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentPageIndex);
    });
}

// Add event listeners to buttons
prevButton.addEventListener('click', () => {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        updatePageVisibility();
    }
});

nextButton.addEventListener('click', () => {
    if (currentPageIndex < pageElements.length - 1) {
        currentPageIndex++;
        updatePageVisibility();
    }
});

// Keyboard event listeners for prev and next functionality
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            updatePageVisibility();
        }
    } else if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        // Right arrow or Down arrow: go to the next page
        if (currentPageIndex < pageElements.length - 1) {
            currentPageIndex++;
            updatePageVisibility();
        }
    }
});

updatePageVisibility();


// Swipe events for mobile
slider.addEventListener("touchstart", handleTouchStart, false);
slider.addEventListener("touchend", handleTouchEnd, false);

function reloadcontainer() {
    slider.style.left = -items[active].offsetLeft + "px";
    let last_active_dot = document.querySelector(".slider .dots li.active");
    last_active_dot.classList.remove("active");
    dots[active].classList.add("active");
  }

function handleTouchStart(event) {
  touchStartX = event.changedTouches[0].screenX;
  touchStartY = event.changedTouches[0].screenY;
}

function handleTouchEnd(event) {
  touchEndX = event.changedTouches[0].screenX;
  touchEndY = event.changedTouches[0].screenY;
  handleGesture();
}

function handleGesture() {
  let deltaX = touchEndX - touchStartX;
  let deltaY = touchEndY - touchStartY;

  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    // Ensure it's a horizontal swipe
    if (deltaX < -75) {
      // Swipe left
      if (active + 1 <= lengthItems) {
        active++;
        reloadcontainer();
        prev.disabled = false;
        updateButtonVisibility();
      }
    } else if (deltaX > 75) {
      // Swipe right
      if (active - 1 >= 0) {
        active--;
        reloadcontainer();
        next.disabled = false;
        updateButtonVisibility();
      }
    }
  }
}
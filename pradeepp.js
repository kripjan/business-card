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
// Swipe functionality for mobile devices
pages.addEventListener('touchstart', (event) => {
  touchStartX = event.touches[0].clientX; // Record starting touch position
});

pages.addEventListener('touchmove', (event) => {
  touchEndX = event.touches[0].clientX; // Update ending touch position
});

pages.addEventListener('touchend', () => {
  if (touchEndX - touchStartX > 50) {
      // Swipe right: go to the previous page
      if (currentPageIndex > 0) {
          currentPageIndex--;
          updatePageVisibility();
      }
  } else if (touchStartX - touchEndX > 50) {
      // Swipe left: go to the next page
      if (currentPageIndex < pageElements.length - 1) {
          currentPageIndex++;
          updatePageVisibility();
      }
  }
});
updatePageVisibility();



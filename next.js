document.addEventListener("DOMContentLoaded", () => {
  const nextButton = document.querySelector(".next-but"); // Button to navigate to the next page
  const currentPage = document.body; // Current page's body

  nextButton.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default link behavior
      currentPage.classList.add("slide-out"); // Add slide-out class
      setTimeout(() => {
          window.location.href = nextButton.parentElement.href; // Navigate to the next page after the animation
      }, 500); // Match the duration of the CSS transition
  });
});

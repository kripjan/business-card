const pages = document.querySelectorAll(".page");
const translateAmount = 100;
let translate = 0;

// Function to slide pages
slide = (direction) => {
  if (direction === "next" && translate > -(translateAmount * (pages.length - 1))) {
    translate -= translateAmount;
  } else if (direction === "prev" && translate < 0) {
    translate += translateAmount;
  }
  pages.forEach(
    (page) => (page.style.transform = `translateX(${translate}%)`)
  );
};

// Add keyboard event listeners for left and right arrow keys
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    slide("next");
  } else if (event.key === "ArrowLeft") {
    slide("prev");
  }
});
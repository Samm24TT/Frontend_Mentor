const footer = document.querySelector(".testimonial-author");
const shareButton = document.querySelector(".share-button");

shareButton.addEventListener("click", () => {
  const isOpen = footer.classList.toggle("share-open");
  shareButton.setAttribute("aria-expanded", isOpen);
});

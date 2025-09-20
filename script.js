// toggle detail produk
function toggleDetail(card) {
  const detail = card.querySelector(".produk-detail");
  detail.classList.toggle("show");
}

// smooth scroll untuk anchor link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({
        behavior: "smooth"
      });
  });
});

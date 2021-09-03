const navbar = document.querySelector(".navbar");

function ScrollToView(href) {
  const target = document.querySelector(href);
  target.scrollIntoView({ behavior: "smooth" });
}

navbar.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.tagName === "A") {
    ScrollToView(e.target.getAttribute("href"));
  }
});

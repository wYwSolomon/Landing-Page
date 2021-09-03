const navbar = document.querySelector(".navbar");
const signupBtn = document.querySelector("#signup");

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

signupBtn.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".signup").classList.remove("hidden");
});

document.querySelector(".overlay").addEventListener("click", function () {
  document.querySelector(".signup").classList.add("hidden");
});

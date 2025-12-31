let pages = document.querySelectorAll(".page");
let current = 0;

function nextPage() {
  pages[current].classList.remove("active");
  current++;
  if (current < pages.length) {
    pages[current].classList.add("active");
  }
}

// HEART GENERATOR
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 3 + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 300);

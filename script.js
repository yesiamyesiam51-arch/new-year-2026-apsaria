let pages = document.querySelectorAll(".page");
let current = 0;

function nextPage() {
  pages[current].classList.remove("active");
  current++;
  pages[current].classList.add("active");
  runTypewriter();
}

function saveName() {
  const name = document.getElementById("nameInput").value || "You";
  document.querySelector("h1").innerText = "Happy New Year " + name;
  nextPage();
}

/* Typewriter */
function runTypewriter() {
  document.querySelectorAll(".typewriter").forEach(el => {
    let text = el.innerText;
    el.innerText = "";
    let i = 0;
    function type() {
      if (i < text.length) {
        el.innerText += text.charAt(i);
        i++;
        setTimeout(type, 35);
      }
    }
    type();
  });
}
runTypewriter();

/* Resolution Logic */
const res = document.querySelectorAll(".res");
const btn = document.getElementById("promiseBtn");

res.forEach(r => {
  r.addEventListener("change", () => {
    btn.disabled = ![...res].every(c => c.checked);
  });
});

/* Hearts */
const heartBox = document.getElementById("hearts");
setInterval(() => {
  const h = document.createElement("span");
  h.innerText = "❤";
  h.style.left = Math.random() * 100 + "vw";
  h.style.animationDuration = (3 + Math.random() * 3) + "s";
  heartBox.appendChild(h);
  setTimeout(() => h.remove(), 6000);
}, 300);

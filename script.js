let pages = document.querySelectorAll(".page");
let current = 0;
let answers = [];

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

/* Resolutions Logic */
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

/* Questions Logic */
function nextQuestion(btnElem) {
  const textarea = btnElem.parentElement.querySelector(".answerInput");
  answers.push(textarea.value.trim() || "No answer");
  nextPage();
}

/* Spin Wheel Logic */
function spinWheel() {
  const segments = ["Smile", "Memory", "Wish", "Promise", "Surprise"];
  const result = segments[Math.floor(Math.random() * segments.length)];
  document.getElementById("wheelResult").innerText = "Result: " + result;
  document.getElementById("nextFromWheel").style.display = "inline-block";
}

/* Summary Page */
function showSummary() {
  const summaryDiv = document.getElementById("summary");
  summaryDiv.innerHTML = "";
  answers.forEach((ans, i) => {
    const q = [
      "Best memory with me",
      "Worst memory with me",
      "Saddest moment this year",
      "Angriest moment this year",
      "Happiest moment this year",
      "Favourite song of 2025",
      "Favourite movie watched with me",
      "Special wish for us"
    ][i];
    const div = document.createElement("div");
    div.innerHTML = `<strong>${q}:</strong> ${ans}`;
    div.style.margin = "10px 0";
    summaryDiv.appendChild(div);
  });
}

pages.forEach((p, i) => {
  if (i === 14) { // spin wheel page
    const nextBtn = p.querySelector("#nextFromWheel");
    nextBtn.addEventListener("click", () => {
      nextPage();
      showSummary();
    });
  }
});

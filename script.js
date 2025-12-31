// PAGE FLOW
let currentPage = 0;
const totalPages = 14;
const pages = [];
for(let i=0;i<=totalPages;i++) pages.push(document.getElementById('page'+i));

function showPage(n){
  pages.forEach(p=>p.style.display='none');
  pages[n].style.display='block';
}
showPage(currentPage);

function nextPage(){
  if(currentPage<totalPages-1){
    currentPage++;
    showPage(currentPage);
  } else {
    // SUMMARY
    let summaryHTML = `
      <p><b>Happiest memory:</b> ${document.getElementById('q1').value}</p>
      <p><b>Funniest moment:</b> ${document.getElementById('q2').value}</p>
      <p><b>Saddest moment:</b> ${document.getElementById('q3').value}</p>
      <p><b>Angriest moment:</b> ${document.getElementById('q4').value}</p>
      <p><b>Favorite song:</b> ${document.getElementById('q5').value}</p>
      <p><b>Favorite movie:</b> ${document.getElementById('q6').value}</p>
      <p><b>Favorite memory:</b> ${document.getElementById('q7').value}</p>
      <p><b>Special wishes:</b> ${document.getElementById('q8').value}</p>
      <p><b>Fun resolution:</b> ${document.getElementById('q9').value}</p>
      <p><b>Best compliment:</b> ${document.getElementById('q10').value}</p>
    `;
    document.getElementById('summary').innerHTML = summaryHTML;
    currentPage++;
    showPage(currentPage);
  }
}

function restart(){ currentPage=0; showPage(currentPage); }

// TYPEWRITER EFFECT
const subtitle = "A new year, a new chapter, together...";
let idx=0;
function typeWriter(){
  if(idx<subtitle.length){
    document.getElementById("subtitle").innerHTML += subtitle.charAt(idx);
    idx++;
    setTimeout(typeWriter,50);
  }
}
typeWriter();

// HEARTS CREATION
function createHeart(){
  const heart = document.createElement('div');
  heart.className='heart';
  heart.style.left=Math.random()*window.innerWidth+'px';
  heart.style.width=15+Math.random()*15+'px';
  heart.style.height=heart.style.width;
  heart.style.animationDuration=(4+Math.random()*3)+'s';
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),7000);
}
setInterval(createHeart,300);

// CONFETTI CREATION
function createConfetti(){
  if(currentPage>=4 && currentPage<=13){
    const confetti = document.createElement('div');
    confetti.className='confetti';
    confetti.style.left=Math.random()*window.innerWidth+'px';
    confetti.style.background=['#ff69b4','#ffc371','#69ffb4'][Math.floor(Math.random()*3)];
    confetti.style.animationDuration=(2+Math.random()*2)+'s';
    document.body.appendChild(confetti);
    setTimeout(()=>confetti.remove(),4000);
  }
}
setInterval(createConfetti,200);

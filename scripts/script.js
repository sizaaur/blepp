const openBtn = document.getElementById('openBtn');
const cover = document.getElementById('cover');
if (openBtn && cover) {
  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    cover.classList.add('opening');
    setTimeout(() => { window.location.href = openBtn.href; }, 550);
  });
}


const placeholderColors = ['#D9F0DF', '#CFC4E8', '#B8D8C0', '#E8E1F5'];
document.querySelectorAll('img[data-ph]').forEach((img, i) => {
  img.addEventListener('error', () => {
    const color = placeholderColors[i % placeholderColors.length];
    const svg =
      `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'>` +
      `<rect width='400' height='300' fill='${color}'/>` +
      `<text x='200' y='158' font-size='30' text-anchor='middle' fill='#594D4D' opacity='.6' font-family='Caveat, cursive'>` +
      `${img.dataset.ph}</text></svg>`;
    img.src = 'data:image/svg+xml,' + encodeURIComponent(svg);
  }, { once: true });
  
  if (img.complete && img.naturalWidth === 0) img.dispatchEvent(new Event('error'));
});

const symbols = ['♡', '✦', '✿'];
const colors = ['#AFA0D0', '#B8D8C0', '#CFC4E8'];
document.addEventListener('click', (e) => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  for (let i = 0; i < 3; i++) {
    const p = document.createElement('span');
    p.className = 'particle';
    p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    p.style.color = colors[Math.floor(Math.random() * colors.length)];
    p.style.left = e.clientX + 'px';
    p.style.top = e.clientY + 'px';
    p.style.setProperty('--dx', (Math.random() * 60 - 30) + 'px');
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 900);
  }
});
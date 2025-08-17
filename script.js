// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.main-nav ul');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true' || false;
    toggle.setAttribute('aria-expanded', !expanded);
    menu.classList.toggle('show');
  });
}

// Smooth scrolling (index only)
document.querySelectorAll('.main-nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const href = anchor.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.substring(1);
      const el = document.getElementById(id);
      if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
      if (menu) menu.classList.remove('show');
    }
  });
});

// Poster modal (results page)
function showPoster(url){
  const modal = document.getElementById('posterModal');
  const img = document.getElementById('posterImg');
  if (modal && img) {
    img.src = url;
    modal.style.display = 'flex';
  }
}
function closePoster(){
  const modal = document.getElementById('posterModal');
  if (modal) modal.style.display = 'none';
}

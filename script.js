function showPoster(src) {
  document.getElementById('posterModal').style.display = 'flex';
  document.getElementById('posterImg').src = src;
}

function closePoster() {
  document.getElementById('posterModal').style.display = 'none';
}

function showPoster(url) {
  const modal = document.getElementById('posterModal');
  const posterImg = document.getElementById('posterImg');
  posterImg.src = url;
  modal.style.display = 'flex';
}
function closePoster() {
  document.getElementById('posterModal').style.display = 'none';
}
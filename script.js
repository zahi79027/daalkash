function showPoster(src){
  const modal = document.getElementById('posterModal');
  const img = document.getElementById('posterImg');
  modal.classList.add('show');
  img.src = src;
}
function closePoster(){
  document.getElementById('posterModal').classList.remove('show');
}

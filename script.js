window.addEventListener('load', () => {
  const music = document.getElementById('bg-music');
  const photos = document.querySelectorAll('.photo-frame img');
  let current = 0;

  setInterval(() => {
    photos[current].classList.remove('active');
    current = (current + 1) % photos.length;
    photos[current].classList.add('active');
  }, 4000);

  music.volume = 0.6;
  const playMusic = () => {
    music.play().catch(() => {});
    document.removeEventListener('click', playMusic);
  };
  document.addEventListener('click', playMusic);
});

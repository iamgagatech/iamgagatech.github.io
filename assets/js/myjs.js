const btn = document.querySelector('.magnetic-wrap');
const content = document.querySelector('.magnetic-content');

if (btn && content) {
  let rect;

  btn.addEventListener('mousemove', (e) => {
    rect = rect || btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    content.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translate(0,0)';
    content.style.transform = 'translate(0,0)';
    rect = null;
  });

  /* Touch hint */
  btn.addEventListener('touchstart', () => {
    btn.style.transform = 'scale(0.98)';
  }, { passive: true });

  btn.addEventListener('touchend', () => {
    btn.style.transform = 'translate(0,0)';
  }, { passive: true });
}

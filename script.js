const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const buttonsArea = document.getElementById('buttonsArea');
const card = document.getElementById('card');
const bottomText = document.getElementById('bottomText');
const topContent = document.getElementById('topContent');

buttonsArea.addEventListener('mousemove', (e) => {
  const rect = buttonsArea.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const btnRect = noBtn.getBoundingClientRect();
  const btnX = btnRect.left - rect.left + btnRect.width / 2;
  const btnY = btnRect.top - rect.top + btnRect.height / 2;

  const distance = Math.hypot(x - btnX, y - btnY);

  if (distance < 120) {
    const newX = Math.random() * (rect.width - btnRect.width);
    const newY = Math.random() * (rect.height - btnRect.height);
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
  }
});

yesBtn.addEventListener('click', () => {
  buttonsArea.remove();
  bottomText.remove();
  card.classList.add('expanded');

  const message = document.createElement('div');
  message.className = 'success-message';
  message.textContent = "J'espere que ca va te plaire 🎉🫠❤️";
  topContent.appendChild(message);

  topContent.classList.add('moved-up');

  card.addEventListener('transitionend', function handler(e) {
    if (e.propertyName === 'height') {
      const imgContainer = document.createElement('div');
      imgContainer.className = 'image-container';
      const captureImg = document.createElement('img');
      captureImg.src = 'images/Capture.png';
      captureImg.alt = 'Image Capture';
      imgContainer.appendChild(captureImg);
      card.appendChild(imgContainer);

      card.removeEventListener('transitionend', handler);
    }
  });
});

const menuItems = document.querySelectorAll('.menu-item');
const views = document.querySelectorAll('.view');
const eyeButton = document.querySelector('.eye-btn');
const amount = document.querySelector('.amount');
const segments = document.querySelectorAll('.segment');

menuItems.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.dataset.view;

    menuItems.forEach((item) => item.classList.toggle('active', item === button));
    views.forEach((view) => view.classList.toggle('active', view.id === target));
  });
});

eyeButton?.addEventListener('click', () => {
  const currentValue = amount.dataset.secret || amount.textContent;
  if (amount.textContent.includes('R$')) {
    amount.textContent = 'R$ ••••••';
    amount.dataset.secret = currentValue;
  } else {
    amount.textContent = currentValue;
  }
});

segments.forEach((segment) => {
  segment.addEventListener('click', () => {
    segments.forEach((item) => item.classList.toggle('active', item === segment));
  });
});

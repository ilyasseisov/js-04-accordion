const tabs = document.querySelectorAll('.tab');

tabs.forEach((tab) => {
  tab.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('active');
  });
});


function runAnimtion() {
  anime({
    targets: '.mainsum__goods',
    textContent: [0, 120],
    round: 1,
    easing: 'linear',
    duration: 1000
  });

  anime({
    targets: '.mainsum__container',
    textContent: [0, 2500],
    round: 1,
    easing: 'linear',
    duration: 1000
  });

  anime({
    targets: '.mainsum__clients',
    textContent: [0, 70],
    round: 1,
    easing: 'linear',
    duration: 1000
  });
}

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio >= 0.7) {
        runAnimtion();
        observer.disconnect();
      }
    });
  },
  {
    threshold: 0.7
  }
);

observer.observe(document.querySelector('.mainsum'));


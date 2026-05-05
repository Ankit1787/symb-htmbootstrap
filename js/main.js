const contactForm = document.querySelector('#contact form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thanks! Your form is ready to connect to a backend.');
  });
}

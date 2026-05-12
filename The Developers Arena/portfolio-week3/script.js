// Smooth Scroll Navigation

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener('click', function(e) {

    e.preventDefault();

    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({
        behavior: 'smooth'
      });

  });

});

// Dark Mode Toggle

const themeBtn = document.getElementById('theme-btn');

themeBtn.addEventListener('click', () => {

  document.body.classList.toggle('dark');

  // Change icon

  if (document.body.classList.contains('dark')) {
    themeBtn.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  }
  else {
    themeBtn.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }

});

// Load Saved Theme

if (localStorage.getItem('theme') === 'dark') {

  document.body.classList.add('dark');

  themeBtn.textContent = '☀️';

}

// Form Validation

const form = document.getElementById('contact-form');

const message = document.getElementById('form-message');

form.addEventListener('submit', function(e) {

  e.preventDefault();

  const name = document.getElementById('name').value.trim();

  const email = document.getElementById('email').value.trim();

  const userMessage = document.getElementById('message').value.trim();

  // Validation

  if (name === '' || email === '' || userMessage === '') {

    message.textContent = 'Please fill all fields';

    message.style.color = 'red';

    return;

  }

  if (!email.includes('@')) {

    message.textContent = 'Enter valid email';

    message.style.color = 'red';

    return;

  }

  if (userMessage.length < 10) {

    message.textContent = 'Message should contain at least 10 characters';

    message.style.color = 'red';

    return;

  }

  // Success

  message.textContent = 'Message sent successfully!';

  message.style.color = 'green';

  form.reset();

});

// Typing Effect

const text = [
  'AI & ML Student',
  'Web Developer',
  'Python Programmer'
];

let count = 0;

let index = 0;

let currentText = '';

let letter = '';

(function type() {

  if (count === text.length) {
    count = 0;
  }

  currentText = text[count];

  letter = currentText.slice(0, ++index);

  document.getElementById('typing-text').textContent = letter;

  if (letter.length === currentText.length) {

    count++;

    index = 0;

    setTimeout(type, 1000);

  }
  else {

    setTimeout(type, 100);

  }

})();
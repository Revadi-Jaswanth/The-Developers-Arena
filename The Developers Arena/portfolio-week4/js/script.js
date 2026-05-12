// Contact Form Validation

const form = document.getElementById('contact-form');

if(form){

    form.addEventListener('submit', function(e){

        e.preventDefault();

        const name =
        document.getElementById('name').value.trim();

        const email =
        document.getElementById('email').value.trim();

        const message =
        document.getElementById('message').value.trim();

        const output =
        document.getElementById('form-message');

        // Empty Validation

        if(name === '' || email === '' || message === ''){

            output.textContent =
            'Please fill all fields';

            output.style.color = 'red';

            return;
        }

        // Email Validation

        if(!email.includes('@')){

            output.textContent =
            'Please enter a valid email';

            output.style.color = 'red';

            return;
        }

        // Success Message

        output.textContent =
        'Message sent successfully!';

        output.style.color = 'lightgreen';

        form.reset();

    });

}

// Scroll Reveal Animation

ScrollReveal().reveal('.card', {

    distance:'60px',

    duration:1500,

    interval:200,

    origin:'bottom'

});
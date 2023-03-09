const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY); 

const form = document.getElementById('contact-form');
const emailInput = document.getElementById('email');

form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    // Valido el campo de correo electrónico
    if (!emailInput.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        alert('Por favor ingrese una dirección de correo electrónico válida');
        emailInput.focus();
        return;
    }

    // Si llos campos son válidos, enviar el formulario
    const msg = {
        to: 'gisee.cb@gmail.com', 
        from: emailInput.value,
        subject: 'Mensaje de contacto desde tu sitio web',
        text: `
    Nombre: ${form.name.value}
    Correo electrónico: ${form.email.value}
    Mensaje: ${form.message.value}
    `,
    };

    sgMail.send(msg); // Enviar el correo electrónico utilizando la API de SendGrid
});
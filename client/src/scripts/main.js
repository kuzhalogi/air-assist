// Example: Display a message when the form is submitted
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for reaching out! We will contact you soon.');
            form.reset();
        });
    }
});

// Add this to your custom.js file
document.addEventListener('DOMContentLoaded', function() {
    const ticketForm = document.querySelector('.ticket-form');
    
    ticketForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Gather form data
        const formData = {
            name: document.getElementById('ticket-form-name').value,
            email: document.getElementById('ticket-form-email').value,
            phone: document.querySelector('input[name="ticket-form-phone"]').value,
            ticketType: document.querySelector('input[name="TicketForm"]:checked').nextElementSibling.textContent.trim(),
            numberOfTickets: document.getElementById('ticket-form-number').value,
            additionalRequest: document.getElementById('ticket-form-message').value
        };
        
        // Store form data in localStorage for profile page
        localStorage.setItem('userTicketData', JSON.stringify(formData));
        
        // Simulate sending email (in production, this would be handled by your backend)
        sendConfirmationEmail(formData);
        
        // Redirect to profile page
        window.location.href = 'profile.html';
    });
});

function sendConfirmationEmail(formData) {
    // In a real application, this would be handled by your backend
    console.log('Confirmation email sent to:', formData.email);
}
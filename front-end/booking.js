const bookingForm = document.querySelector('.booking-form');

if (bookingForm) {
    bookingForm.addEventListener('submit', e => {
        e.preventDefault();

        // Manual client info ONLY
        const firstName = bookingForm.querySelector('input[name="firstName"]').value;
        const lastName = bookingForm.querySelector('input[name="lastName"]').value;
        const name = `${firstName} ${lastName}`;

        const phone = bookingForm.querySelector('input[name="phone"]').value;
        const email = bookingForm.querySelector('input[name="email"]').value || 'N/A';

        const pickup = bookingForm.querySelector('input[placeholder*="pickup"]').value;
        const pickupCity = bookingForm.querySelectorAll('input[placeholder="City"]')[0].value;
        const pickupSuburb = bookingForm.querySelectorAll('input[placeholder*="Suburb"]')[0]?.value || '';

        const destination = bookingForm.querySelector('input[placeholder*="destination"]').value;
        const destinationCity = bookingForm.querySelectorAll('input[placeholder="City"]')[1].value;
        const destinationSuburb = bookingForm.querySelectorAll('input[placeholder*="Suburb"]')[1]?.value || '';

        const date = bookingForm.querySelector('input[type="date"]').value;
        const luggage = bookingForm.querySelectorAll('select')[0].value;
        const passengers = bookingForm.querySelectorAll('select')[1].value;
        const notes = bookingForm.querySelector('textarea').value || 'None';

        const message =
`[NEW RIDE BOOKING]

Name: ${name}
WhatsApp: ${phone}
Email: ${email}

Pickup: ${pickup},
${pickupSuburb},
${pickupCity}

Destination: ${destination},
${destinationSuburb},
${destinationCity}

Date: ${date}
Luggage: ${luggage}
Passengers: ${passengers}

Notes: ${notes}`;

        sessionStorage.setItem('whatsappMessage', message);
        window.location.href = 'confirm.html';
    });
}
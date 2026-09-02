const courierForm = document.querySelector('.courier-form');

if (courierForm) {
    courierForm.addEventListener('submit', e => {
        e.preventDefault();

        /* =========================
           SENDER INFO (MANUAL)
        ========================= */
        const firstName = courierForm.querySelector('input[name="firstName"]').value;
        const lastName = courierForm.querySelector('input[name="lastName"]').value;
        const name = `${firstName} ${lastName}`;

        const phone = courierForm.querySelector('input[name="phone"]').value;
        const email = courierForm.querySelector('input[name="email"]').value || 'N/A';

        /* =========================
           PARCEL DETAILS
        ========================= */
        const selects = courierForm.querySelectorAll('select');
        const parcelType = selects[0].value;
        const weight = selects[1].value;

        /* =========================
           PICKUP DETAILS
        ========================= */
        const pickup = courierForm.querySelector('input[placeholder*="pickup"]').value;
        const pickupSuburb =
            courierForm.querySelectorAll('input[placeholder*="Suburb"]')[0]?.value || '';
        const pickupCity =
            courierForm.querySelectorAll('input[placeholder="City"]')[0].value;

        /* =========================
           DESTINATION DETAILS
        ========================= */
        const destination =
            courierForm.querySelector('input[placeholder*="destination"]').value;
        const destinationSuburb =
            courierForm.querySelectorAll('input[placeholder*="Suburb"]')[1]?.value || '';
        const destinationCity =
            courierForm.querySelectorAll('input[placeholder="City"]')[1].value;

        /* =========================
           DATE & NOTES
        ========================= */
        const date = courierForm.querySelector('input[type="date"]').value;
        const notes = courierForm.querySelector('textarea').value || 'None';

        /* =========================
           MESSAGE
        ========================= */
        const message =
`[NEW PARCEL REQUEST]

Sender: ${name}
WhatsApp: ${phone}
Email: ${email}

Parcel Type: ${parcelType}
Estimated Weight: ${weight}

Pickup:
${pickup}
${pickupSuburb}
${pickupCity}

Delivery:
${destination}
${destinationSuburb}
${destinationCity}

Pickup Date: ${date}

Instructions: ${notes}`;

        sessionStorage.setItem('whatsappMessage', message);
        window.location.href = 'confirm.html';
    });
}
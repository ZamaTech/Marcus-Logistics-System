const summaryBox = document.getElementById('summaryBox');
const sendBtn = document.getElementById('sendWhatsapp');
const ticketTitle = document.getElementById('ticketTitle');
const ticketStubTitle = document.getElementById('ticketStubTitle');

const WHATSAPP_NUMBER = "27749869434";

const storedMessage = sessionStorage.getItem('whatsappMessage');
const message = storedMessage
    ? storedMessage.replace(/\uFFFD/g, '').replace(/[ \t]{2,}/g, ' ')
    : '';
const isParcelRequest = /PARCEL REQUEST/i.test(message);

if (isParcelRequest) {
    ticketTitle.textContent = 'Parcel delivery ticket';
    ticketStubTitle.textContent = 'Delivery pass';
}
const ticketMessage = message
    ? `[MARCUS LOGISTICS - BOOKING TICKET]
============================
${message}
============================
Please confirm this booking with the client.`
    : '';

if (!message) {
    summaryBox.textContent = "No booking data found.";
} else {
    summaryBox.textContent = ticketMessage;
}

sendBtn.addEventListener('click', () => {
    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(ticketMessage)}`;
    window.open(url, '_blank');
});

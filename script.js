document.getElementById('guestsPostForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    // Collect form data
    const formData = {
        name: document.getElementById('name').value,
        niche: document.getElementById('niche').value,
        budget: document.getElementById('budget').value,
        linkCount: document.getElementById('linkCount').value,
        whatsapp: document.getElementById('whatsapp').value,
        notes: document.getElementById('notes').value
    };

    // Target URL where the data should ultimately be sent
    const targetUrl = 'http://localhost:5678/webhook-test/guestform';

    // Ngrok proxy endpoint (your Express proxy server running behind ngrok)
    const webhookUrl = 'https://4bce-58-65-214-39.ngrok-free.app/proxy';

    try {
        // Send the data via the proxy
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ targetUrl, data: formData })
        });

        // Read response text
        const responseData = await response.text();
        console.log('Webhook response:', responseData);

        if (response.ok) {
            alert('Form submitted successfully!');
            this.reset(); // Clear the form
        } else {
            throw new Error('Form submission failed: ' + responseData);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error submitting the form. Please try again.');
    }
});

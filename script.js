document.getElementById('guestPostForm').addEventListener('submit', async function(e) {
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

    try {
        // ✅ This is your ngrok webhook URL from n8n
        const webhookUrl = 'https://8620-58-65-214-39.ngrok-free.app/webhook-test/guestform';
        
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        // Optional: Log what came back from n8n
        const responseData = await response.text();
        console.log('Webhook response:', responseData);

        if (response.ok) {
            alert('Form submitted successfully!');
            this.reset(); // Clear the form
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error submitting the form. Please try again.');
    }
});

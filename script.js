document.getElementById('guestPostForm').addEventListener('submit', async function(e) {
    e.preventDefault();  // Prevent default form submission behavior

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
        // n8n webhook URL (you will replace this with your actual webhook URL)
        const webhookUrl = 'http://localhost:5678/webhook-test/guestform';
        
        // Send data to the n8n webhook
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)  // Send data as JSON
        });

        if (response.ok) {
            alert('Form submitted successfully!');
            this.reset();  // Reset the form
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error submitting the form. Please try again.');
    }
});

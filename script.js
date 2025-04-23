document.getElementById('guestPostForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        niche: document.getElementById('niche').value,
        budget: document.getElementById('budget').value,
        linkCount: document.getElementById('linkCount').value,
        whatsapp: document.getElementById('whatsapp').value,
        notes: document.getElementById('notes').value
    };

    try {
        // Replace this URL with your actual webhook URL
        const webhookUrl = 'http://localhost:5678/webhook-test/guestform';
        
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert('Form submitted successfully!');
            this.reset();
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error submitting the form. Please try again.');
    }
});

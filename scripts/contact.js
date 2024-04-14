function handleSubmit(event) {
    event.preventDefault(); // Prevents the default form submission
    
    const formData = new FormData(event.target); // correctly capturing form data
    console.log('Form data:', Object.fromEntries(formData.entries())); // correctly logging form data for verification
    
    alert('Thank you for your message! We will get back to you soon.'); // should display an alert

    event.target.reset(); // correctly resets the form
}

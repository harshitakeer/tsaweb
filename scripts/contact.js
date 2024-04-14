function handleSubmit(event) {
    event.preventDefault(); 
    
    const formData = new FormData(event.target); 
    console.log('Form data:', Object.fromEntries(formData.entries())); 
    
    alert('Thank you for your message! We will get back to you soon.'); 

    event.target.reset(); 
}

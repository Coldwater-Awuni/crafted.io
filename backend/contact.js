

    document.addEventListener('DOMContentLoaded', () => {
        const customerName = document.getElementById('customer-name');
        const customerEmail = document.getElementById('customer-email');
        const customerMsg = document.getElementById('customer-msg');
        const contactForm = document.getElementById('contact-form');

    
        // Function to generate a custom document ID
        function generateDocId() {
            return customerName.value
                .trim()
                .replace(/\s+/g, ' ') // Replace multiple spaces with a single space
                .split(' ') // Split the name into words
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
                .join('') // Join them back without spaces
                + '-' + Date.now().toString();
        }

        // Form submission event listener
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            // Prepare the document data
            const messageInfo = {
                'Name': customerName.value.trim(),
                'Email': customerEmail.value.trim(),
                'Message': customerMsg.value.trim(),
                'Time': firebase.firestore.FieldValue.serverTimestamp()
            };

            // Validate the form inputs
            if (customerName.value.trim() === '' || customerEmail.value.trim() === '' || customerMsg.value.trim() === '') {
                alert('Please fill in all the fields.');
                return;
            }

            // Save the data to Firestore first
            const docId = generateDocId();
            const docRef = db.collection('contact_message').doc(docId);

            docRef.set(messageInfo)
                .then(() => {
                    console.log("Document successfully written with custom ID!");

                    // Prepare the email template parameters for EmailJS
                    const templateParams = {
                        name: customerName.value.trim(),
                        email: customerEmail.value.trim(),
                        message: customerMsg.value.trim(),
                        doc_id: docId
                    };

                    // Send the email using EmailJS after successful Firestore write
                    return emailjs.send('service_t8zklop', 'template_eazc1d8', templateParams);
                })
                .then(() => {
                    alert('Your message has been sent successfully!');
                    contactForm.reset(); // Clear the form after submission
                })
                .catch((error) => {
                    console.error("Error writing document or sending email: ", error);
                    alert('Oops! Something went wrong.');
                });
        });
    });
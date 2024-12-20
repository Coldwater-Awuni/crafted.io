window.onload = function() {
    setTimeout(loadPopup, 10000); // Delay of 5 seconds
};

function loadPopup() {
    console.log("Loading popup..."); // Debug log
    var xhr = new XMLHttpRequest();
    xhr.open('GET', ' ./pages/newsteller.html', true);
    
    xhr.onreadystatechange = function() {
        console.log("XHR state: " + xhr.readyState + ", status: " + xhr.status); // Debug log

        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("Popup loaded successfully."); // Debug log
            document.getElementById('popup-container').innerHTML = xhr.responseText;
            document.getElementById('popup-overlay').style.display = 'flex'; // Show the popup overlay

            // Add event listener for the close button
            document.getElementById('close-btn').addEventListener('click', closePopup);

            // Add event listener for clicking outside the popup to close it
            document.getElementById('popup-overlay').addEventListener('click', function(e) {
                if (e.target === this) {
                    closePopup();
                }
            });

           
            // Assuming Firebase initialization was successful...
            document.getElementById("newsletter-form").addEventListener("submit", async function (event) {
                event.preventDefault();
                console.log("Form submission triggered."); // Debug log
            
                // Retrieve the email value and checkbox state
                const email = document.getElementById("email").value.trim();
                const termsAccepted = document.getElementById("terms").checked;
                const messageElement = document.getElementById("message");
            
                // Log the values for debugging
                console.log("Email entered: ", email);
                console.log("Terms accepted: ", termsAccepted);
            
                // Email validation function
                function validateEmail(email) {
                    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
                    return re.test(email);
                }
            
                // Check if email is valid and terms are accepted
                if (termsAccepted && validateEmail(email)) {
                    console.log("Validation passed. Proceeding with Firestore submission..."); // Debug log
                    try {
                        // Add email to Firestore
                        await subscriptionsRef.add({
                            email: email,
                            subscribedAt: firebase.firestore.FieldValue.serverTimestamp()
                        });
            
                        // Clear the form after submission
                        document.getElementById("newsletter-form").reset();
                        messageElement.textContent = "Thank you for subscribing! A confirmation email has been sent.";
                        messageElement.style.color = "green";
                        console.log("Subscription successful!"); // Debug log
            
                        // Call a Firebase function to send the confirmation email
                        sendConfirmationEmail(email);
                    } catch (error) {
                        messageElement.textContent = "Failed to subscribe. Please try again.";
                        messageElement.style.color = "red";
                        console.error("Error adding document to Firestore: ", error); // Debug log
                    }
                } else {
                    // If validation fails, show appropriate message
                    if (!validateEmail(email)) {
                        messageElement.textContent = "Please enter a valid email address.";
                        console.log("Validation failed: Invalid email."); // Debug log
                    }
                    if (!termsAccepted) {
                        messageElement.textContent = "Please accept the terms to subscribe.";
                        console.log("Validation failed: Terms not accepted."); // Debug log
                    }
                    messageElement.style.color = "red";
                }
            });
            

        }
    };

    xhr.send();
    console.log("XHR request sent."); // Debug log
}

// Function to close the popup
function closePopup() {
    document.getElementById('popup-overlay').style.display = 'none';
    console.log("Popup closed."); // Debug log
}

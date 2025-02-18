window.onload = function() {
    loadQuizPopup();
};

function loadQuizPopup() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './pages/quiz_popup.html', true);
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('popup-container').innerHTML = xhr.responseText;
            
            // Add slight delay before showing popup for smooth animation
            setTimeout(() => {
                const overlay = document.querySelector('.popup-overlay');
                const popup = document.querySelector('.popup');
                overlay.classList.add('active');
                popup.classList.add('active');
            }, 500);

            // Add close button functionality
            document.getElementById('close-btn').addEventListener('click', closeQuizPopup);
        }
    };

    xhr.send();
}

function closeQuizPopup() {
    const overlay = document.querySelector('.popup-overlay');
    const popup = document.querySelector('.popup');
    
    // Animate out
    overlay.style.opacity = '0';
    popup.style.transform = 'translateY(20px)';
    popup.style.opacity = '0';
    
    // Remove after animation
    setTimeout(() => {
        document.getElementById('popup-container').innerHTML = '';
    }, 300);
}

document.addEventListener('DOMContentLoaded', function() {
    const popupContainer = document.getElementById('popup-container');
    const closeButton = document.getElementById('popup-close');

    // Only handle close button click
    closeButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        popupContainer.classList.add('hidden');
    });

    // Prevent clicks inside the widget from closing it
    popupContainer.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.sub-header-button');
    const cards = document.querySelectorAll('.card');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            cards.forEach(card => {
                if (card.id === targetId) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});


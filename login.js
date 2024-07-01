document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.querySelector('.login-button');
    const loginBox = document.getElementById('login-box');
    const overlay = document.getElementById('overlay');

    loginButton.addEventListener('click', function() {
        loginBox.style.display = 'block';
        overlay.style.display = 'block';
    });

    // Add event listener to overlay to close login box when clicked
    overlay.addEventListener('click', function() {
        loginBox.style.display = 'none';
        overlay.style.display = 'none';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.querySelector('.login-input');
    const animatedPlaceholder = document.querySelector('.animated-placeholder');
    const placeholderText = inputField.getAttribute('placeholder');
    let isAnimated = false; // Флаг для отслеживания, была ли анимация

    inputField.addEventListener('focus', function() {
        if (!isAnimated) {
            animatedPlaceholder.innerText = '';
            animatedPlaceholder.style.display = 'block';

            let charIndex = 0;
            const intervalId = setInterval(() => {
                if (charIndex < placeholderText.length) {
                    animatedPlaceholder.innerText += placeholderText[charIndex];
                    charIndex++;
                    inputField.setAttribute('placeholder', placeholderText.slice(charIndex));
                } else {
                    clearInterval(intervalId);
                    inputField.removeAttribute('placeholder'); // Удаляем placeholder после завершения анимации
                    isAnimated = true; // Устанавливаем флаг, чтобы предотвратить повторную анимацию
                }
            }, 100); // Adjust the interval time as needed
        }
    });

    // Убираем анимацию при потере фокуса
    inputField.addEventListener('blur', function() {
        if (isAnimated) {
            animatedPlaceholder.style.display = 'block'; // Оставляем анимированный текст видимым
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const passwordField = document.querySelector('.password-input');
    const animatedPlaceholder = document.querySelector('.password-input + .animated-placeholder');
    const placeholderText = passwordField.getAttribute('placeholder');
    let isAnimated = false; // Флаг для отслеживания, была ли анимация

    passwordField.addEventListener('focus', function() {
        if (!isAnimated) {
            animatedPlaceholder.innerText = '';
            animatedPlaceholder.style.display = 'block';

            let charIndex = 0;
            const intervalId = setInterval(() => {
                if (charIndex < placeholderText.length) {
                    animatedPlaceholder.innerText += placeholderText[charIndex];
                    charIndex++;
                    passwordField.setAttribute('placeholder', placeholderText.slice(charIndex));
                } else {
                    clearInterval(intervalId);
                    passwordField.removeAttribute('placeholder'); // Удаляем placeholder после завершения анимации
                    isAnimated = true; // Устанавливаем флаг, чтобы предотвратить повторную анимацию
                }
            }, 100); // Adjust the interval time as needed
        }
    });

    // Убираем анимацию при потере фокуса
    passwordField.addEventListener('blur', function() {
        if (isAnimated) {
            animatedPlaceholder.style.display = 'block'; // Оставляем анимированный текст видимым
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const passwordField = document.querySelector('.password-input');
    const toggleButton = document.querySelector('.toggle-password');

    toggleButton.addEventListener('click', function() {
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);
        toggleButton.textContent = type === 'password' ? 'Show Password' : 'Hide Password';
    });
});

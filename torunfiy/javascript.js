const gameBoxes = document.querySelectorAll('.game-box');
const registrationForm = document.getElementById('registration-form');

gameBoxes.forEach(box => {
    box.addEventListener('click', () => {
        // Move to the specific game upcoming tournaments
        console.log(`Moved to ${box.innerText} upcoming tournaments`);
        registrationForm.style.display = 'block';
    });
});

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Handle registration form submission
    console.log('Registration form submitted');
});
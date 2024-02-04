const joinButton = document.getElementById('joinButton');

joinButton.addEventListener('click', () => {
    joinButton.classList.toggle('bg-secondary-500');
    joinButton.classList.toggle('bg-primary-500');
});

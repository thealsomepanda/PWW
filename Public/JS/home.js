const emailButton = document.getElementById('emailButton');
const myHeader = document.getElementById('myHeader');
const emailIn = document.getElementById('emailIn');

emailButton.addEventListener('click', () => {
    myHeader.style.color = emailIn.value;
});

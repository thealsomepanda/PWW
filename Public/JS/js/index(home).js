const userEmail = document.getElementsByName('emailSignup');
const emailButton = document.getElementsByName('emailButton');

emailButton.addEventListener('click', () => {
    userEmail.value = userEmail.value;
    //alert(userEmail);
});
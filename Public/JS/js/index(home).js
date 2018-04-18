let userEmail = document.getElementById('emailSignup');
let emailButton = document.getElementById('emailButton');
let userEmailAssignment;

emailButton.addEventListener('click', () => {
    userEmailAssignment = userEmail.value;
});


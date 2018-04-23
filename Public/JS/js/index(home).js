let userEmail = document.getElementById('emailSignup');
let emailButton = document.getElementById('emailButton');
let userEmailAssignment;

emailButton.addEventListener('click', () => {
    userEmailAssignment = userEmail.value;

    let re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    let validEmail = re.test(userEmailAssignment);
    console.log(validEmail);

});

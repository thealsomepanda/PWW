


let emailButton = document.getElementById('emailButton');


$('#slidedown').hide().slideDown(1000);

emailButton.addEventListener('click', () => {
    let userEmail = document.getElementById('emailSignup');
    let userEmailAssignment = userEmail.value;

    let re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    let validEmail = re.test(userEmailAssignment);
    console.log(userEmailAssignment);

    if (validEmail === false) {
        $('#emailSignup').css('backgroundColor', 'red');
    } else {
        let url = '/email';

        $.ajax(url, {
            data : userEmailAssignment,
            type : "POST",
            success : function (response) {
                console.log('You did it, dumbass.');
            }
        });
    }
});


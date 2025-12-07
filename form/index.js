const form = document.getElementById("signUpForm");

form.addEventListener("submit", onSubmit);
function onSubmit(e) {
    e.preventDefault();
    
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let password = document.getElementById("pwd");
    let age = document.getElementById("age");
    let valid = true;
    let nameErr = document.getElementById("nameErr");
    let emailErr = document.getElementById("emailErr");
    let ageErr = document.getElementById("ageErr");
    let pwdErr = document.getElementById("pwdErr");

    if (name.value.length < 3) {
        nameErr.style.display = 'block';
        valid = false;
    } else {
        nameErr.style.display = "none";
    }

    if (!email.value.includes('@')) {
        emailErr.style.display = "block";
    } else {
        emailErr.style.display = "none";
        valid = false;
    }

    if (password.value.length < 6) {
        pwdErr.style.display = "block";
        valid = false;
    } else {
        pwdErr.style.display = "none";
    }

    if(age.value < 18 || age.value > 60){
        ageErr.style.display = "block";
        valid = false;
    } else {
        ageErr.style.display = "none";
    }

    if (valid) {
        if (confirm("Are you sure?")) {
            alert("Form submitted successfully")
        }
    }
}
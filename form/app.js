function validate(event) {
    event.preventDefault();

    const form = document.querySelector(".form");
    const inputField = document.querySelectorAll("input");

    let formData = {};

    inputField.forEach((input) => {
        formData[input.name] = input.value.trim();
    });

    console.log("Form Data:", formData);

    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let dob = document.getElementById("dob").value.trim();
    let password = document.getElementById("password").value.trim();

    let nameRegex = /^[A-Za-z]+$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phoneRegex = /^\d{10}$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(!nameRegex.test(fname))
    {
        alert("First name should only contain alphabetic characters");
        return;
    }
    if(!nameRegex.test(lname))
        {
        alert("Last name should only contain alphabetic characters");
        return;
    }
    if(!emailRegex.test(email))
        {
        alert("Please enter a valid email address");
        return;
    }
    if(!phoneRegex.test(phone))
        {
        alert("Please enter a valid 10-digit phone number");
        return;
    }
    if(dob == "")
        {
        alert("Please enter your date of birth");
        return;
    }
    if(!passwordRegex.test(password))
        {
        alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character");
        return;
    }
    alert("Form submitted successfully!");
    form.reset();
    

}
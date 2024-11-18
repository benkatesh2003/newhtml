document.addEventListener("DOMContentLoaded", function () {

    // Handle form submission for repair requests
    const repairForm = document.getElementById("repair-form");
    repairForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const hospitalName = document.getElementById("hospital-name").value;
        const equipmentType = document.getElementById("equipment-type").value;
        const issueDescription = document.getElementById("issue-description").value;
  
        if (hospitalName && equipmentType && issueDescription) {
            alert(`Repair Request Submitted for ${equipmentType} at ${hospitalName}. We'll get back to you soon.`);
            repairForm.reset();
        } else {
            alert("Please fill out all fields before submitting.");
        }
    });
  
    // Handle "Browse Technicians" button click
    const browseTechniciansButton = document.getElementById("browse-technicians");
    browseTechniciansButton.addEventListener("click", function () {
        alert("Redirecting to the list of technicians... (This feature is under development)");
    });
  
    // Handle form submission for contact
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const contactName = document.getElementById("contact-name").value;
        const contactEmail = document.getElementById("contact-email").value;
        const contactMessage = document.getElementById("contact-message").value;
  
        if (contactName && contactEmail && contactMessage) {
            alert(`Thank you for reaching out, ${contactName}. We will reply to you soon.`);
            contactForm.reset();
        } else {
            alert("Please fill out all fields before sending.");
        }
    });

    // Handle Login/Signup form toggle
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const signupLink = document.getElementById("signup-link");
    const loginLink = document.getElementById("login-link");

    // Show signup form and hide login form
    signupLink.addEventListener("click", function (e) {
        e.preventDefault();
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    });

    // Show login form and hide signup form
    loginLink.addEventListener("click", function (e) {
        e.preventDefault();
        signupForm.style.display = "none";
        loginForm.style.display = "block";
    });

    // Handle Login form submission
    const loginButton = document.getElementById("login-button");
    loginButton.addEventListener("click", function (e) {
        e.preventDefault();

        const loginEmail = document.getElementById("login-email").value;
        const loginPassword = document.getElementById("login-password").value;

        if (loginEmail && loginPassword) {
            alert(`Logged in successfully with ${loginEmail}`);
            loginForm.reset();
            loginForm.style.display = "none";  // Hide the login form after submission
        } else {
            alert("Please enter both email and password.");
        }
    });

    // Handle Signup form submission
    const signupButton = document.getElementById("signup-button");
    signupButton.addEventListener("click", function (e) {
        e.preventDefault();

        const signupEmail = document.getElementById("signup-email").value;
        const signupPhone = document.getElementById("signup-phone").value;
        const signupPassword = document.getElementById("signup-password").value;

        if (signupEmail && signupPhone && signupPassword) {
            alert(`Account created successfully for ${signupEmail}`);
            signupForm.reset();
            signupForm.style.display = "none";  // Hide the signup form after submission
        } else {
            alert("Please fill out all fields.");
        }
    });
    

});
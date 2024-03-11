function validateInput(input) {
    input.value = input.value.replace(/\D/g, '')
    if (input.value.length > 7) {
        input.value = input.value.slice(0, 7);
    }
}
function validateNID(input) {
    input.value = input.value.replace(/\D/g, '')
    if (input.value.length > 14) {
        input.value = input.value.slice(0, 14);
    }
}

function validateNumberLectureRoom(input) {
    var inputValue = input.value;
    var sanitizedValue = '';
    
    for (var i = 0; i < inputValue.length; i++) {
        if (!isNaN(inputValue[i]) && inputValue[i] !== ' ') {
            sanitizedValue += inputValue[i];
        }
    }
    
    if (sanitizedValue.length !== 4 || isNaN(sanitizedValue)) {
        document.getElementById("errorText").textContent = "Enter number of the room 4 digits";
        input.setCustomValidity("Enter number of the room 4 digits");
    } else {
        document.getElementById("errorText").textContent = "";
        input.setCustomValidity("");
    }
    
    input.value = sanitizedValue;
}

function closePage() {
    window.close();
}


function validateNumber(input) {
}

function togglePasswordVisibility(inputId) {
    const passwordInput = document.getElementById(inputId);
    const toggleIcon = passwordInput.parentElement.querySelector(".toggle-password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye");
    } else {
        passwordInput.type = "password";
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const loginBtn = document.getElementById("loginBtn");
    const errorMessage = document.getElementById("errorMessage");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        if (username === "") {
            displayErrorMessage("Username is required.");
            return;
        }

        if (password === "") {
            displayErrorMessage("Password is required.");
            return;
        }

        if (confirmPassword === "") {
            displayErrorMessage("Please confirm your password.");
            return;
        }

        if (password !== confirmPassword) {
            displayErrorMessage("Passwords do not match.");
            return;
        }

    });

    usernameInput.addEventListener("input", updateSubmitButton);
    passwordInput.addEventListener("input", updateSubmitButton);
    confirmPasswordInput.addEventListener("input", updateSubmitButton);

    function updateSubmitButton() {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        loginBtn.disabled = (username === "" || password === "" || confirmPassword === "" || password !== confirmPassword);
    }

    function displayErrorMessage(message) {
        errorMessage.textContent = message;
    }
});

        document.querySelectorAll('.icon-times').forEach(function (icon) {
            icon.addEventListener('click', function () {
                this.closest('.card').style.display = 'none';
            });
        });

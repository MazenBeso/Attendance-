function validateNumberSna3a(input) {
    var inputValue = input.value;
    inputValue = inputValue.replace(/\D/g, '');
    if (!/^\d{7}$/.test(inputValue)) {
        document.getElementById("errorText").textContent = "Type Only 7 True Numbers";
        input.setCustomValidity("Type Only 7 True Numbers");
    } else {
        document.getElementById("errorText").textContent = "";
        input.setCustomValidity("");
    }
    input.value = inputValue;
}

function validateNumberElom(input) {
    var inputValue = input.value;
    inputValue = inputValue;
    if (!/^\d{6}$/.test(inputValue)) {
        document.getElementById("errorText").textContent = "Type Only 6 True Numbers";
        input.setCustomValidity("Type Only 6 True Numbers");
    } else {
        document.getElementById("errorText").textContent = "";
        input.setCustomValidity("");
    }
    input.value = inputValue;
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

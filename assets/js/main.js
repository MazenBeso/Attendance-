function validateNumber(input) {
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
    inputValue = inputValue.replace(/\D/g, '');
    if (!/^\d{6}$/.test(inputValue)) {
        document.getElementById("errorText").textContent = "Type Only 6 True Numbers";
        input.setCustomValidity("Type Only 6 True Numbers");
    } else {
        document.getElementById("errorText").textContent = "";
        input.setCustomValidity("");
    }
    input.value = inputValue;
}

function closePage() {
    window.close();
}

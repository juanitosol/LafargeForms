function displayPrompt(promptId, validateId) {
    var x = document.getElementById(promptId);
    if (x.style.display === "flex") {
        x.style.display = "none";
        document.getElementById(validateId).required = false;
    }
    else {
        x.style.display = "flex";
        x.style.justifyContent = "flex-start"
        document.getElementById(validateId).required = true;
    }
}

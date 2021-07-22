function displayPrompt(promptId, validateId, priorityId) {
    var x = document.getElementById(promptId);
    if (x.style.display === "flex") {
        x.style.display = "none";
        document.getElementById(validateId).required = false;
        document.getElementById(priorityId).required = false;
    }
    else {
        x.style.display = "flex";
        x.style.justifyContent = "flex-start"
        document.getElementById(validateId).required = true;
        document.getElementbyId(priorityId).required = true;
    }
}

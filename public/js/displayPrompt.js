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
        document.getElementById(validateId).focus();
        document.getElementbyId(priorityId).setAttribute("required")
    }
}

// https://stackoverflow.com/questions/6048710/can-i-apply-the-required-attribute-to-select-fields-in-html5/6048891
function displayPrompt(promptId, validateId, priorityId) {
    var x = document.getElementById(promptId);
    var y = document.getElementById(validateId);
    var z = document.getElementById(priorityId);
    if (x.style.display === "flex") {
        x.style.display = "none";
        y.required = false;
        z.required = false;
    }
    else {
        x.style.display = "flex";
        x.style.justifyContent = "flex-start"
        y.required = true;
        y.focus();
        z.required = true;
    }
}

// https://ludwigstumpp.medium.com/part-1-how-to-build-a-web-form-with-a-loading-animation-using-html5-css3-jquery-dfa0bc6a900b
// https://code-boxx.com/display-message-after-submitt-html-form/
// https://stackoverflow.com/questions/9334636/how-to-create-a-dialog-with-yes-and-no-options
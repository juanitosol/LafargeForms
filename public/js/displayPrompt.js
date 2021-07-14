function displayPrompt(promptId) {
    var x = document.getElementById(promptId);
    if (x.style.display === "flex") {
        x.style.display = "none";
    }
    else {
        x.style.display = "flex";
        x.style.justifyContent = "flex-start"
    }
}

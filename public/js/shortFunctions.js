function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight) + "px";
}

function guardChecked(guardId, hiddenId) {
    var guardState = document.getElementById(guardId);
    var hiddenGuard = document.getElementById(hiddenId);
    if (guardState.checked) {
        hiddenGuard.value = ""
    }
    else {
        hiddenGuard.defaultValue;
    }
}
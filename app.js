function onCollapseClick() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "flex") {
                content.style.display = "none";
            } else {
                content.style.display = "flex";
            }
        });
    }
}

onCollapseClick();

function displayPrompt() {
    var x = document.getElementsByClassName("hiddenPrompt");
    if (x.style.display === "flex") {
        x.style.display = "none";
    }
    else {
        x.style.display = "flex";
    }
}
// https://stackoverflow.com/questions/25870898/input-field-appear-after-selecting-a-check-box-html/25871183
// https://stackoverflow.com/questions/36197187/how-to-hide-a-text-field-in-an-html-form
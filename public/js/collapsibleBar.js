
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

// https://stackoverflow.com/questions/1895476/how-do-i-style-a-select-dropdown-with-only-css
// https://moderncss.dev/custom-select-styles-with-pure-css/
// https://www.youtube.com/watch?v=bB14uo0Tu5A
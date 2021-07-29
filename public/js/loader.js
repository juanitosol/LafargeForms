$(document).ready(function () {
    const lockModal = $("#lock-modal");
    const loadingCircle = $("#loader");
    const form = $("#primaryForm");

    form.on('submit', function (e) {
        // e.preventDefault();

        lockModal.css("display", "block");
        loadingCircle.css("display", "block");

        // form.children("input").each(function () {
        //     $(this).attr("readonly", true);
        // })
    })
})

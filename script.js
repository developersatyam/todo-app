$("ul").on("click", "span", function () {
    $(this).parent().fadeOut(500, function () {
        $(this).parent().remove(function (event) {
            event.stopPropagation();
        });
    });
});
$("input").keypress(function (event) {
    if (event.which === 13) {
        var inputtext = $("input").val();
        $("input").val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + inputtext + "</li>");
    }
});
$("ul").on("click", "li", function () {
    $(this).toggleClass("toggletext");
});
$(".fa-plus").on("click", function () {
    $("input").fadeToggle();
})

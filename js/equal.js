$(window).load(function() {
 if (screen.width > 767) {
    var heights = $(".post").map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
    $(".post").height(maxHeight);
 }
});

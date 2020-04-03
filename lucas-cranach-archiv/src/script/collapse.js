$("section.collapsable").on("click", (event) => {
    if ($(this).children('p')[0].css('visibility') == hidden) {
        $(this).children('p')[0].css('visibility', 'visible')
    } else {
        $(this).children('p')[0].css('visibility', 'hidden')
    }
});
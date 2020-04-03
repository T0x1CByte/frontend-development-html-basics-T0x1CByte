$(".collapsable h3").on("click", (event) => {
    console.log($(event.target).parent().children('div')[0]);
    if ($(event.target).parent().children('div')[0].style.visibility == "hidden") {
        $(event.target).parent().children('div')[0].style.visibility = "visible";
        $(event.target).parent().children('div')[0].style.height = "auto";
    } else {
        $(event.target).parent().children('div')[0].style.visibility = "hidden";
        $(event.target).parent().children('div')[0].style.height = "0px";
    }
});
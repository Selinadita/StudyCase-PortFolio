// main.js
function toggleDetail(e) {
    const target = $(e.target);

    if ($(target).hasClass("active")) {
        $(target).html("More Information").removeClass("active")
    } else {
        $(target).html("Less Information").addClass("active")
    }

    const item = $(target).parents(".about-exp-item");
    const detail = $(item).children(".about-exp-item-detail");

    $(detail).slideToggle();
}
$(function () {
    $(".dropdown").hover(function () {
        $(this).children(".blog-navbar-dropdown").css("display","block");
    },function () {
        $(this).children(".blog-navbar-dropdown").css("display","none");
    })
});
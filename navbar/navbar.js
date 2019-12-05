$(document).ready(function () {
    $(function () {
        $("#navigation").load("https://carman-li.github.io/navbar/navbar.html")
    });
});


// $(document).ready(function () {
//     $('#toggler').click(function () {
//         $('#navigation').load("https://carman-li.github.io/navbar/navbar.html");
//     })
// });

$("#toggler").on("click", function () {
    $('#navigation').load("https://carman-li.github.io/navbar/navbar.html");
});
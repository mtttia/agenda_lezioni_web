var darkmode;
$(document).ready(function(){

    darkmode = false;
    document.getElementById("DarkMode").addEventListener("change", function(){
        darkmode = document.getElementById("DarkMode").checked;
        ChangeMode();
        //console.log("change" + darkmode);
    });
    //$("#home").height($(window).height());

    $(".downloadApk").click(function(){
        window.open("https://github.com/mtttia/agenda_lezioni/releases/download/1.0.0/app-release.apk");
        //window.open("post-download.html/#apk", "_top");
    })

});

function ChangeMode(){
    //use darkmode;
    $(".btn-primary").toggleClass("btn-primary-dark");
    $(".btn-secondary").toggleClass("btn-secondary-dark");
    $(".text").toggleClass("text-light");
    $(".background").toggleClass("background-dark");
    $(".hr").toggleClass("hr-dark");
    $(".jumbotron").toggleClass("jumbotron-dark");
    //navbar-light bg-light
    $("#navbar").toggleClass("navbar-light");
    $("#navbar").toggleClass("navbar-dark");
    $("#navbar").toggleClass("bg-light");
    $("#navbar").toggleClass("bg-dark");
    $('.alert-info').toggleClass("alert-info-dark");
}

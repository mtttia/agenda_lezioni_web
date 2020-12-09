var darkmode;
$(document).ready(function(){

    darkmode = false;
    document.getElementById("DarkMode").addEventListener("change", function(){
        darkmode = document.getElementById("DarkMode").checked;
        ChangeMode();
        console.log("change" + darkmode);
    });

    

});

function ChangeMode(){
    //use darkmode;
    $(".btn-primary").toggleClass("btn-primary-dark");
    $(".btn-secondary").toggleClass("btn-secondary-dark");
    $(".text").toggleClass("text-light");
    $(".background").toggleClass("background-dark");
    $(".hr").toggleClass("hr-dark");
    //navbar-light bg-light
    $("#navbar").toggleClass("navbar-light");
    $("#navbar").toggleClass("navbar-dark");
    $("#navbar").toggleClass("bg-light");
    $("#navbar").toggleClass("bg-dark");
}

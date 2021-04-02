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
        window.open("https://drive.google.com/file/d/1YueURL40veUh10joC4lnB2iotvK3LHIr/view?usp=sharing");
        //window.open("post-download.html/#apk", "_top");
    })

    $(".downloadZip").click(function(){
        window.open("https://drive.google.com/file/d/1Ni0-YvLB_QhnqatHWylmD7CQpfw0_v94/view?usp=sharing");
        //window.open("post-download.html/#zip", "_top");
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

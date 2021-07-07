
/********************
    variables
*/


$(document).ready(() => {
    console.log("Effects ready");
    var conttext = $(".cont");

    //conttext.css("background","blue");

    console.log($(".home").height());





    //on page scroll
    $(window).scroll(function(){

        let height = $(document).height();

        if(height > 1030 && height <= 2048){
            console.log(height);
            conttext.css({
                width: "50px"
            });

        }
    });
});
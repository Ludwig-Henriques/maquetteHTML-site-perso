$(function(){
    $("body a").on("click", function(event){
        event.preventDefault();
        var hash = this.hash;
        console.log(hash)

        $('body, html').animate({scrollTop: ($(hash).offset().top) - 55}, 900, function(){
            // window.location.hash = hash;
        });
    });
})
$(function(){
    $('#Video').on('mouseenter', function(){
        if( this.paused) this.play();
    }).on('mouseleave', function(){
        if( !this.paused) this.pause();
    });
});

var myElement = $('.Opacity');

$(window).on('scroll', function() {
    var st = $(this).scrollTop();
    myElement.css({
        'opacity' : 1 - st/600
    });
});

$(document).ready(function(){
    $("button").click(function(){
        $(".topnav").addClass(function(n){
            return "sticky";
        });
    });
});

/*
.className - Looks for elements with the class className
#idName - Looks for elements with the id idName
video - Any video element
*/
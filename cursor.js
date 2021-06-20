
$("span, .statement-container, .chapter-name, .chapter-number, .number, .pre-letters-svg").mousemove(function(e) {
    $('.cursor-read').show().css({
        left: e.pageX ,
        top: e.pageY
    });
});

 

$("div").mouseleave(function(e) {
    $('.cursor-read').hide();
});
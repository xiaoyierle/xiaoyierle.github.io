/**
 * Created by Administrator on 2017/8/15/015.
 */
$(".content-feature").hover(function(){$(this).$("content-left").css("color","#ff5555").end().$("content-right").$("h3").css("color","#ff5555")},function(){})
jQuery(window).resize(function(){
    resizenow();
});
function resizenow() {
    var browserwidth = jQuery(window).width();
    var browserheight = jQuery(window).height();
    jQuery('.bonfire-pageloader-icon').css('right', ((browserwidth - jQuery(".bonfire-pageloader-icon").width())/2)).css('top', ((browserheight - jQuery(".bonfire-pageloader-icon").height())/2));
};
resizenow();

/**
 * Created by Administrator on 2017/8/9/009.
 */

$(function(){
    var colorarr=["#64C333","#EA5F8D","#0AA6E8","#F7A945","#19C8A9","#F15453","#000"];
    var index;
    var leftbararr=[];
    $(window).scroll(function(){
        var st=$(window).scrollTop();
        if(st>765){
            $(".toptop").slideDown(300);
        }
        if(st>600){
            $(".left-fixed").show(500);
        }else if(st<600){
            $(".left-fixed").hide(500);
        }
        if(st<765){
            $(".toptop").slideUp(300);
        }
        $(".fouth-parts").each(function(i){
            leftbararr.push($(this).offset().top);
        })
        $(".left-fixed #inners").each(function(i){
            if(st>leftbararr[i]){
                $(".left-fixed #inners").css("background",'rgba(0,0,0,0.6)').eq(i).css("background",colorarr[i]);
            }
        });
    })
    $(".left-fixed #inners").click(function(){
        index=($(this).index()-1);
        var ot=$(".fouth-parts").eq(index).offset().top;
        $("html,body").animate({scrollTop:ot});
        $(".left-fixed #inners").css("background",'rgba(0,0,0,0.6)').eq(index).css("background",colorarr[index]);
    });
})
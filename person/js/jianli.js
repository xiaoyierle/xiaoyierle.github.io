/**
 * Created by Administrator on 2017/8/15/015.
 */
$(".content-feature").hover(function(){$(this).find(".content-left").css("color","#ff5555").end().find("h3").css("color","#ff5555")},function(){$(this).find(".content-left").css("color","#777").end().find("h3").css("color","#777")})
jQuery(window).resize(function(){
    resizenow();
});
function resizenow() {
    var browserwidth = jQuery(window).width();
    var browserheight = jQuery(window).height();
    jQuery('.bonfire-pageloader-icon').css('right', ((browserwidth - jQuery(".bonfire-pageloader-icon").width())/2)).css('top', ((browserheight - jQuery(".bonfire-pageloader-icon").height())/2));
};
resizenow();
/*$(function(){
    var toparr=[];
    var index;
    $(".fp-section").each(function(i){
        toparr.push($(this).offset().top);
    });
    $(window).scroll(function(){
        var st=$(window).scrollTop();
        console.log(toparr)
        $(".header-nav-right ul li a").each(function(i){
            if(st>toparr[i]){
                $(".header-nav-right ul li a").removeClass("active1").eq(i).addClass("active1");
            }
        });
    });

    $(".header-nav-right ul li").click(function(){
        index=($(this).index());
        var ot=$(".topMenu").eq(index).offset().top;
        $("html,body").animate({scrollTop:ot});
        $(".header-nav-right ul li a").removeClass("active1").eq(index).addClass("active1");
    });
});*/
//百分比技能
$(function(){
    let canvas1=document.querySelector("#can1");
    let canvas2=document.querySelector("#can2");
    let canvas3=document.querySelector("#can3");
    let canvas4=document.querySelector("#can4");
    progress(canvas1,80,"red");
    progress(canvas2,90,"blue");
    progress(canvas3,50,"yellow");
    progress(canvas4,50,"yellow");
    function progress(canvas,percent,color="red"){
        let [width,height]=[canvas.width,canvas.height]
        let cobj=canvas.getContext("2d");
        cobj.translate(width/2,height/2);
        let maxAngle=360*percent/100;
        cobj.strokeStyle=color;
        cobj.lineWidth=10;
        let angle=0;
        cobj.font="20px 微软雅黑";
        cobj.textAlign="center";
        cobj.textBaseline="middle";
        function fn(){
            angle++;
            cobj.clearRect(-width/2,-height/2,width,height);
            cobj.beginPath();
            cobj.arc(0,0,width*0.4,-Math.PI/2,angle*Math.PI/180-Math.PI/2);
            cobj.fillText(Math.round(angle/360*100)+"%",0,0);
            cobj.stroke();
            if(angle>=maxAngle){
                return;
            }
            requestAnimationFrame(fn);
        }
        fn();
    }
})
//banner进入
$(function(){
    $('#fullpage').fullpage({
        autoScrolling:false,
        verticalCentered:true,
        anchors:["p1","p2","p3","p4","p5"],
        menu:"#menu",
        navigation:true,
        fixedElements:"#menu",
        afterLoad:function(anchor,index){
            if(index===1){
                $(".banner-left-middle").animate({left:0,animation:"bounceInLeft 1s ease"},1500)
                // animate($(".banner-left-middle"),{left:0},1500,"bounceInLeft");

            }
        }
    });
});
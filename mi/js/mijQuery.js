/**
 * Created by Administrator on 2017/8/9/009.
 */
$(function(){
    var dians=$(".ui-dian li");
    var imgs=$(".bannerList li");
    var index;
    dians.mouseover(function(){
        index=$(this).index(".ui-dian li");
        dians.filter(".active").removeClass("active");
        dians.eq(index).addClass("active");
        imgs.filter(".active").removeClass("active").fadeOut(500);
        imgs.eq(index).addClass("active").fadeIn(500);
        num=index;
    });
    var num=0;
    var t=setInterval(move,3000);
    function move(){
        num++;
        if(num>=dians.length){
            num=0;
        }
        if(num<0){
            num=dians.length-1;
        }
        dians.filter(".active").removeClass("active").end().eq(num).addClass("active");
        imgs.filter(".active").removeClass("active").fadeOut(500).end().eq(num).addClass("active").fadeIn(500);
    }
    $(".banner").hover(function(){clearInterval(t);},function(){t=setInterval(move,3000);});
    $(".ui-prev").click(function(){
        num-=2;
        move();
    })
    $(".ui-next").click(function(){
        move();
    })
})
/*$(function(){
    var floors=$(".box-bd");
    var ch=$(window).innerHeight();
    var arr=[];
    floors.each(function(){
        arr.push($(this).offset().top);
    })
    $(window).scroll(function(){
        var st=$(window).scrollTop();
        $.each(arr,function(index,val){
            var imgs=floors.eq(index).find("image");
            if(st+ch>val+200){
                $.each(imgs,function(index,val){
                    this['src'] = this['title'];
                })         
            }
        })
        
    })
})*/
$(function(){
    var imgs=$("img");
    imgs.each(function(index,ele){
        if($(this).offset().top<$(window).height()){
            $(this).attr("src",function(){
                return $(this).attr("title");
            })
        }
    })
    console.log(imgs)
    $(window).on("scroll",function(){
        var st=$(this).scrollTop();
        imgs.filter(function(){
            var r=$(this).attr("src");
            return !r;
        }).each(function(){
            if($(this).offset().top<st+$(window).height()){
                $(this).attr("src",function(){
                    return $(this).attr("title");
                })
            }
        })
    })
})

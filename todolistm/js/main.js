/**
 * Created by Administrator on 2017/8/11/011.
 */
/*
$("#text").on("keydown keyup",function(){
    var l=$(this).val().length;
    if(l>40){
        alert("字数超过限制")
        l=40;
        $(this).val(function(i,val){
            return val.slice(0,40);
        })
    }
    $(".notice span").text(function(){
        return l<10?"0"+l:l;
    });
});
//点击提交的部分
$("#submit").click(function(){
    var val=$("#text").val();
    if(val===""){
        alert("请输入内容之后再提交");
        return;
    }
    var data=getData();
    var date=new Date();
    var time=date.getTime();
    data.push({text:val,time,isDone:false,isStar:false,isDelete:false});
    saveData(data);
    $("#text").val("");
    $(".notice span").text("00");
    reWrite();
    alert("添加成功");
});
//关闭添加界面
$(".close").click(function(){
    $(".add").slideUp(300);
    $(".wait").delay(200).slideDown(300);
})
//获取信息的函数
function getData(){
    if(localStorage.todo){
        return JSON.parse(localStorage.todo);
    }else{
        return [];
    }
}
//保存信息的函数
function saveData(data){
    localStorage.todo=JSON.stringify(data);
}
//重绘页面
function reWrite(){
    $(".item ul").empty();
    var data=getData();
    var str1="",str2="";
    $.each(data,function(index,value){
        if(value.isDone===false){
            str1+=`<li id="${index}">
                        <input type="checkbox">
                        <p>${value.text}</p>
                        <time><i>&#xe6aa;</i>${time(value.time)}</time>
                        `;
            if(value.isStar){
                str1+="<i class='active'>&#xe608;</i></li>";
            }else{
                str1+="<i>&#xe608;</i></li>";
            }
        }else{
            str2+=`<li id="${index}">
                        <input type="checkbox">
                        <p>${value.text}</p>
                        <time><i>&#xe6aa;</i>${time(value.time)}</time>
                        `;
            if(value.isStar){
                str2+="<i class='active'>&#xe608;</i></li>";
            }else{
                str2+="<i>&#xe608;</i></li>";
            }
        }
    });
    $(".wait ul").html(str1);
    $(".done ul").html(str2);
}
reWrite();
//处理时间格式的函数
function time(ms){
    var date=new Date();
    date.setTime(ms);
    var year=date.getFullYear();
    var month=addZero(date.getMonth()+1);
    var day=addZero(date.getDate());
    var hour=addZero(date.getHours());
    var min=addZero(date.getMinutes());
    var sec=addZero(date.getSeconds());
    return year+'/'+month+"/"+day+" "+hour+":"+min+":"+sec;
}
function addZero(num){
    return num<10?"0"+num:num;
}
//选项卡
$(".leftbar ul li").click(function(){
    var index=$(this).index();
    $(".item").hide().eq(index+1).show();
})
//移动到已完成
$(".movebtn").click(function(){
    var data=getData();
    $(".wait ul li").each(function(index,ele){
        if($(this).find("input").prop("checked")){
            var index=$(this).attr("id");
            data[index].isDone=true;
        }
    });
    saveData(data);
    reWrite();
});
//删除已完成事件
$(".clearbtn").click(function(){
    var data=getData();
    $(".done ul li").each(function(index,ele){
        if($(this).find("input").prop("checked")){
            var index=$(this).attr("id");
            data[index].isDelete=true;
        }
    });
    data=data.filter(function(ele){
        return !ele.isDelete;
    })
    saveData(data);
    reWrite();
});
//跳转到添加界面
$(".addbtn").click(function(){
    $(".item").hide().siblings(".add").slideDown();
});
//修改星星  时间委派
$(".wait ul").on("click","i",function(){
    var data=getData();
    var index=$(this).parent().attr("id");
    data[index].isStar=!data[index].isStar;
    console.log(data[index].isStar,data[index].text)
    saveData(data);
    reWrite();
})
$(".item ul").on("click","p",function(){
    alert($(this).html())
})*/
$(function(){
    $("#text").on("keydown keyup",function(){
        var l=$(this).val().length;
        if(l>999){
            alert("字数超过限制")
            l=999;
            $(this).val(function(i,val){
                return val.slice(0,999);
            })
        }
        $(".notice span").text(function(){
            return l<10?"0"+l:l;
        });
    });
    //点击提交的部分
    $("#submit").click(function(){
        var val=$("#text").val();
        if(val===""){
            alert("请输入内容之后再提交");
            return;
        }
        var data=getData();
        var date=new Date();
        var time=date.getTime();
        data.push({text:val,time,isDone:false,isStar:false,isDelete:false});
        saveData(data);
        $("#text").val("");
        $(".notice span").text("000");
        reWrite();
        // alert("添加成功");
    });

    //获取信息的函数
    function getData(){
        if(localStorage.todo){
            return JSON.parse(localStorage.todo);
        }else{
            return [];
        }
    }
    //保存信息的函数
    function saveData(data){
        localStorage.todo=JSON.stringify(data);
    }
    var mflag=true;
    $("i.menu").click(function(){
        if(mflag){
            $(this).html("&#xe641");
            $(".topbar div.menu").slideDown(300);
            $(".item .mask").slideDown(1000);
            mflag=!mflag;
        }else{
            $(this).html("&#xe645");
            $(".topbar div.menu").delay(700).slideUp(300);
            $(".item .mask").slideUp(1000);
            mflag=!mflag;
        }

    });
    //选项卡
    $(".topbar .menu ul li").click(function(){
        var index=$(this).index();
        $("i.menu").html("&#xe645");
        $(".item").hide().eq(index+1).show();
        $(".topbar div.menu").hide();
        $(".item .mask").hide();
        if(index==0){
            $(".container-top span").html("未完成事项");
        }else if(index==1){
            $(".container-top span").html("已完成事项");
        }
        mflag=!mflag;
    });
    //mask隐藏
    $(".item .mask").click(function(){
        $("i.menu").html("&#xe645");
        $(".topbar div.menu").hide();
        $(".item .mask").hide();
        mflag=!mflag;
    });
    //处理时间格式的函数
    function time(ms){
        var date=new Date();
        date.setTime(ms);
        var year=date.getFullYear();
        var month=addZero(date.getMonth()+1);
        var day=addZero(date.getDate());
        var hour=addZero(date.getHours());
        var min=addZero(date.getMinutes());
        var sec=addZero(date.getSeconds());
        return year+'/'+month+"/"+day+" "+hour+":"+min+":"+sec;
    }
    function addZero(num){
        return num<10?"0"+num:num;
    }
    //重绘页面
    function reWrite(){
        $(".item ul").empty();
        var data=getData();
        var str1="",str2="";
        $.each(data,function(index,value){
            if(value.isDone===false){
                str1+=`<li id="${index}">
                        <div class="box">
                            <div class="box-left">
                                <p>${value.text}</p>
                                <time>${time(value.time)}`;
                if(value.isStar){
                    str1+='<span class="active">&#xe608</span></time></div><div class="box-right"><input type="checkbox"></div></div></li>';
                }else{
                    str1+='<span>&#xe608</span></time></div><div class="box-right"><input type="checkbox"></div></div></li>';
                }
            }else{
                str2+=`<li id="${index}">
                        <div class="box">
                            <div class="box-left">
                                <p>${value.text}</p>
                                <time>${time(value.time)}`;
                if(value.isStar){
                    str2+='<span class="active">&#xe608</span></time></div><div class="box-right"><input type="checkbox"></div></div></li>';
                }else{
                    str2+='<span>&#xe608</span></time></div><div class="box-right"><input type="checkbox"></div></div></li>';
                }
            }
        });
        $(".wait ul").html(str1);
        $(".done ul").html(str2);
    }
    reWrite();
    //修改星星  事件委派
    var hflag=true;
    var timeout;
    $(".item ul").on("touchstart",".box-left",function(){
        if(hflag){
            timeout=setTimeout(function(){
                hflag=false;
                $(".box-left").css("width","90%");
                $(".box-right").css("display","flex");
                $(".addbtn").hide();
                $(".bottom").css("display","flex");
                $("a.back").html("&#xe812");
            },800);
        }
    });
    $(".item ul").on("touchend",".box-left",function(){
        clearTimeout(timeout);
    });
    //收起属性等信息
    $("a.back").click(function(){
        hflag=true;
        $(".box-left").css("width","95%");
        $(".box-right").css("display","none");
        $(".addbtn").show();
        $(".bottom").css("display","none");
        $("a.back").html("");
    });
    //修改星星样式
    $(".heartbtn").click(function(){
        var data=getData();
        $(".item ul li").each(function(index,ele){
            if($(this).find("input").prop("checked")){
                var index=$(this).attr("id");
                if(data[index].isStar){
                    data[index].isStar=false;
                }else{
                    data[index].isStar=true;
                }
            }
        });
        saveData(data);
        reWrite();
        reSet();
    });
    function reSet(){
        hflag=true;
        $(".box-left").css("width","95%");
        $(".box-right").css("display","none");
        $(".addbtn").show();
        $(".bottom").css("display","none");
        $("a.back").html("");
    }
    //删除已完成
    $(".clearbtn").click(function(){
        var data=getData();
        $(".item ul li").each(function(index,ele){
            if($(this).find("input").prop("checked")){
                var index=$(this).attr("id");
                data[index].isDelete=true;
            }
        });
        data=data.filter(function(ele){
            return !ele.isDelete;
        });
        saveData(data);
        reWrite();
        reSet();
    });
    //跳转到添加界面
    $(".addbtn").click(function(){
        $(".item").hide().siblings(".add").slideDown();
        $(".container-top span").html("添加新的事项");
        $(".bottom").css("display","flex");
    });
    //移动到已完成
    $(".movebtn").click(function(){
        var data=getData();
        $(".wait ul li").each(function(index,ele){
            if($(this).find("input").prop("checked")){
                var index=$(this).attr("id");
                data[index].isDone=true;
            }
        });
        saveData(data);
        reWrite();
        reSet();
    });
    //点击查看功能
    $(".item .ul-outer ul").on("click",".box-left",function(){
        var data=getData();
        var index=$(this).parent().parent().attr("id");
        $(".item").hide().siblings(".add").slideDown();
        $(".container-top span").html("添加新的事项");
        console.log(index)
        $("#text").val(function(){
            return data[index].text;
        });
        var l=data[index].text.length;
        $(".notice span").text(function(){
            return l<10?"0"+l:l;
        });
        $(".bottom").css("display","flex");
    });
});

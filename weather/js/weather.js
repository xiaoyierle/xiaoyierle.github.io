var provinces=[];
var citys=[];
var data=[];
var positions=[];
function getData(){
    if(localStorage.data){
        return JSON.parse(localStorage.data);
    }else{
        return [];
    }
}
function saveData(data){
    localStorage.data=JSON.stringify(data);
}
function time(){
    var date=new Date();
    date.getTime();
    var year=date.getFullYear();
    var month=addZero(date.getMonth()+1);
    var day=addZero(date.getDate());
    var week=date.getDay();
    var hour=addZero(date.getHours());
    var min=addZero(date.getMinutes());
    var sec=addZero(date.getSeconds());
    return year+'年'+month+"月"+day+"日"+weekday(week);
}
function weekday(week){
    var x;
    switch(week){
        case 0: x="星期天"; break;
        case 1: x="星期一"; break;
        case 2: x="星期二"; break;
        case 3: x="星期三"; break;
        case 4: x="星期四"; break;
        case 5: x="星期五"; break;
        case 6: x="星期六"; break;
    }
    return x;
}
function addZero(num){
    return num<10?"0"+num:num;
}
function getX(time,i){
    console.log(time)
    time=time.split(":")[0];
    time=i/3*100+50;
    return time;
}
function getY(temp){
    temp=(43-temp)/6*40;
    return temp;
}
function change(data){
    $("div.left p.air span").html(data.result.aqi.aqi+data.result.aqi.quality);
    if(data.result.aqi.aqi<=50){
        $("div.left p.air span").css("background","green");
    }else if(data.result.aqi.aqi>50&&data.result.aqi.aqi<=100){
        $("div.left p.air span").css("background","#ff6700");
    }else if(data.result.aqi.aqi>100&&data.result.aqi.aqi<=150){
        $("div.left p.air span").css("background","orange");
    }else if(data.result.aqi.aqi>150&&data.result.aqi.aqi<=200){
        $("div.left p.air span").css("background","red");
    }else if(data.result.aqi.aqi>200&&data.result.aqi.aqi<=300){
        $("div.left p.air span").css("background","purple");
    }else if(data.result.aqi.aqi>300){
        $("div.left p.air span").css("background","maroon");
    }
    $("div.left p.date").html(time());
    $("section.left p").html(data.result.temp);
    $("section.right p.state").html(data.result.weather+"（实时）");
    $("div.left .temputer span.templow").html(data.result.templow).parent().find("span.temphigh").html(data.result.temphigh)
    $("div.left div.img img").prop("src","img/weathercn/"+data.result.img+".png");
    $("div.left ul.info li.state").html(data.result.weather).parent().find("li.wind").html(data.result.winddirect+data.result.windpower+"风速"+data.result.windspeed)
    $.each($("ul.right>li"),function(index,v){
        var value=index;
        $(this).find("p.week").html(data.result.daily[value].week).parent().find("p.date").html((data.result.daily[value].date).slice(5,7)+"月"+(data.result.daily[value].date).slice(8,10)+"日").parent().find("div.img img").prop("src","img/weathercn/"+data.result.daily[value].day.img+".png").parent().next().find(".temputer span.templow").html(data.result.daily[value].night.templow).parent().find("span.temphigh").html(data.result.daily[value].day.temphigh).parent().parent().find("li.state").html(data.result.daily[value].day.weather).parent().find(".wind").html(data.result.daily[value].day.winddirect+data.result.daily[value].day.windpower);
    });
}
function draw(data){
    positions=[];
    var canvas=document.querySelector("#canvas");
    var cobj=canvas.getContext("2d");
    cobj.clearRect(0,0,900,200);
    cobj.strokeStyle="rgba(255,255,255,.3)";
    cobj.lineWidth=2;
    for(var i=5;i>0;i--){
        cobj.beginPath();
        if(i==5){
            cobj.moveTo(0,199);
            cobj.lineTo(900,199);
            cobj.stroke();
        }else {
            cobj.moveTo(0, i * 40);
            cobj.lineTo(900,i*40);
            cobj.stroke();
        }
    }
    cobj.beginPath();
    cobj.strokeStyle="rgb(255,255,255)";
    cobj.fillStyle="rgb(255,255,255)";
    for(var i=0;i<24;i++){
        if(i%3==0){
            if(i<21){
                var x=i/3*100+50;
                var y=getY(data.result.hourly[i].temp);
                var x1=(i+3)/3*100+50;
                var y1=getY(data.result.hourly[i+3].temp);
            }
            if(i==21){
                var x=i/3*100+50;
                var y=getY(data.result.hourly[i].temp);
                var x1=8*100+50;
                var y1=getY(data.result.hourly[23].temp);
                cobj.fillText(data.result.hourly[23].temp+"℃",x1-15,y1-5);
                positions.push({x:x1,y:y1});
            }
            cobj.beginPath();
            cobj.moveTo(x,y);
            positions.push({x,y});
            cobj.lineTo(x1,y1);
            cobj.font="16px 微软雅黑";
            cobj.fillText(data.result.hourly[i].temp+"℃",x-15,y-5);
            cobj.stroke();
            cobj.fill();
            $(".mgTime span").eq(i/3).html(data.result.hourly[i].time);
            $(".mgTime span").eq(8).html(data.result.hourly[0].time);
        }
    }

    // cobj.save();
    var temp=positions[7];
    positions[7]=positions[8];
    positions[8]=temp;
    cobj.beginPath();
    cobj.moveTo(0,positions[8].y);
    cobj.lineTo(positions[0].x,positions[0].y);
    cobj.moveTo(positions[8].x,positions[8].y);
    cobj.lineTo(900,positions[0].y);
    cobj.stroke();
    cobj.beginPath();
    cobj.moveTo(0,positions[0].y);
    for(var i=0;i<9;i++){
        cobj.lineTo(positions[i].x,positions[i].y);
    }
    cobj.lineTo(positions[8].x,200);
    cobj.lineTo(positions[0].x,200);
    cobj.lineTo(positions[0].x,positions[0].y);
    cobj.fillStyle="rgba(255,255,255,.2)"
    cobj.fill();
    cobj.beginPath();
    cobj.moveTo(0,positions[8].y);
    cobj.lineTo(positions[0].x,positions[0].y);
    cobj.lineTo(positions[0].x,200);
    cobj.lineTo(0,200);
    cobj.lineTo(0,positions[0].y);
    cobj.moveTo(positions[8].x,positions[8].y);
    cobj.lineTo(900,positions[0].y);
    cobj.lineTo(900,200);
    cobj.lineTo(positions[8].x,200);
    cobj.lineTo(positions[8].x,positions[8].y);
    cobj.fillStyle="rgba(255,255,255,.2)"
    cobj.fill();
    // cobj.restore();

    for(var i=0;i<9;i++){
        cobj.beginPath();
        moveTo(positions[i].x,positions[i].y);
        cobj.arc(positions[i].x,positions[i].y,4,0,Math.PI*2,true);
        cobj.fillStyle="#fff"
        cobj.fill();
    }
    $.each($("ul.maskList li"),function(index,v){
        $(this).hover(function(){
            // console.log(1)
            cobj.beginPath();
            cobj.arc(positions[index].x,positions[index].y,4,0,Math.PI*2,true);
            cobj.fillStyle="#78E8FF";
            cobj.fill();
        },function(){
            cobj.beginPath();
            cobj.arc(positions[index].x,positions[index].y,4,0,Math.PI*2,true);
            cobj.fillStyle="#fff";
            cobj.fill();
        });
    });
}

$.ajax({
    url:"http://api.jisuapi.com/weather/city?appkey=61a2d84738f871bd",
    dataType:"jsonp",
    success:function(r){
        data=r.result;
        // console.log(data)
        provinces=$.grep(r.result,function(value,index){
            if(value.parentid==="0"){
                return true;
            }
        });
        $.each(provinces,function(index,value){
            $("<option>").html(value.city).val(value.cityid).appendTo("#provinces");
        });
    }
});
function getCity(city){
    /*$.ajax({
        url:"http://api.jisuapi.com/weather/city?appkey=61a2d84738f871bd",
        dataType:"jsonp",
        success:function(r){*/
            $.ajax({
                url:"http://api.jisuapi.com/weather/query?appkey=61a2d84738f871bd&city="+city,
                dataType:"jsonp",
                success:function(data){
                    change(data);
                    draw(data);
                }
            })
        // }
    // });
}
    $.getScript("http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js",function(){
        var city=remote_ip_info.city;
        getCity(city);
    });


$("#provinces").on("change blur",function(){
    var id=$(this).val();
    citys=$.grep(data,function(value){
        if(value.parentid===id){
            return true;
        }
    });
    $("#citys").empty();
    $.each(citys,function(index,value){
        $("<option>").html(value.city).val(value.city).appendTo("#citys");
    })
})
$("#citys").on("change blur",function(){
    var city=$(this).val();
    $.ajax({
        url:"http://api.jisuapi.com/weather/query?appkey=61a2d84738f871bd&city="+city,
        dataType:"jsonp",
        success:function(data){
            change(data);
            draw(data);
        }
    })
});
$(document).ajaxComplete(function(a,b,c){
    $(".progress").animate({width:"100%"},function(){
        $(this).css("width",0);
    })
    console.log(1)
})
   (function(){
       var designWidth=1080;
       var fontSize=100;
       function resize(){
         var width=document.documentElement.clientWidth;
         var size=width/designWidth*fontSize;
         document.querySelector("html").style.fontSize=size+"px";
       }
        resize();
        window.onresize=resize;
     })();
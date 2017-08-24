/*
 * @Author: Administrator
 * @Date:   2017-05-01 21:15:58
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-05-06 08:49:51
 */

'use strict';
window.onload = function () {
    let lis = document.querySelectorAll('.ui-dian-item div');
    // let lunbo=document.querySelectorAll('.ui-wrapper-a .ui-wrapper-a-image');
    let index = -1;
    let t;
    /*for(let i=0;i<lis.length;i++){
     lis[i].onmouseenter=function(){
     this.className='ui-page-link-hot';
     // lunbo[i].className='ui-wrapper-a-image-show';
     console.log(i);
     bannerMove(i);
     index=i;
     }
     }*/
    /*lis[i].onmouseleave=function(){
     this.className='ui-page-link';

     }*/

    /*function bannerMove(j){
     for(let i=0;i<lunbo.length;i++){
     lis[i].className='ui-page-link';
     lunbo[i].className='ui-wrapper-a-image';
     }
     lis[j].className='ui-page-link-hot';
     lunbo[j].className='ui-wrapper-a-image-show';
     }*/
    // t=setInterval(move,2000);
    let stop = document.querySelector('ui-controls-directions');
    let next = 0, current = 0;
    let imgs = document.querySelectorAll('.bannerItem');
    let win = document.querySelector('.banner');
    let imgWidth = parseInt(getComputedStyle(win, null).width);
    let zuida = document.querySelector('.bannerList');
    let flag;
    // console.log(imgWidth);
    for (let i = 0; i < imgs.length; i++) {
        if (i == 0) {
            continue;
        }
        imgs[i].style.left = imgWidth + 'px';
    }
    /*zuida.onmouseenter=function(){
     clearInterval(t);
     }
     zuida.onmouseleave=function(){
     t=setInterval(move,2000);
     }*/
    /*function move(){
     next++;
     if(next==imgs.length){
     next=0;
     }
     imgs[next].style.left=imgWidth+'px';
     animate(imgs[current],{left:-imgWidth});
     lis[next].className='ui-dian-hot';
     lis[current].className='ui-dian-link';
     animate(imgs[next],{left:0},function(){
     flag=true;
     });
     current=next;
     }*/
    /*function moveL(){
     next--;
     if(next<0){
     next=imgs.length-1;
     }
     imgs[next].style.left=-imgWidth+'px';
     animate(imgs[current],{left:imgWidth});
     lis[next].className='ui-dian-hot';
     lis[current].className='ui-dian-link';
     animate(imgs[next],{left:0},function(){
     flag=true;
     });
     current=next;
     }*/

    /*lis.forEach(function(value,index,obj){
     value.onclick=function(){
     if(current==index){
     return;
     }
     lis[current].className='ui-dian-link';
     this.className='ui-dian-hot';
     if(index>current){
     imgs[index].style.left=imgWidth+'px';
     animate(imgs[current],{
     left:-imgWidth
     });
     animate(imgs[index],{
     left:0
     });
     }else if(index<current){
     imgs[index].style.left=-imgWidth+'px';
     animate(imgs[current],{
     left:imgWidth
     });
     animate(imgs[index],{
     left:0
     });
     }
     current=next=index;
     }
     })*/

   /* {
        const bannerlist = document.querySelectorAll(".bannerList li");
        const dianlist = document.querySelectorAll(".ui-dian li");
        const bannerbox = document.querySelector(".banner");
        const prev = document.querySelector(".ui-prev")
        const next = document.querySelector(".ui-next")
        var colorarr = ["#84cef1", "#2191EF", "#4038E3"];
        dianlist.forEach(function (ele, index) {
            ele.onmouseover = function () {
                for (var i = 0; i < dianlist.length; i++) {
                    dianlist[i].classList.remove("active");
                    bannerlist[i].classList.remove("active");
                }
                this.classList.add("active");
                bannerlist[index].classList.add("active");
                bannerbox.style.background = colorarr[index];
                num = index;
            }
        });
        let move = function () {
            num++;
            if (num == dianlist.length) {
                num = 0;
            }
            if (num == -1) {
                num = dianlist.length - 1;
            }
            for (var i = 0; i < dianlist.length; i++) {
                dianlist[i].classList.remove("active");
                bannerlist[i].classList.remove("active");
            }
            dianlist[num].classList.add("active");
            bannerlist[num].classList.add("active");
            bannerbox.style.background = colorarr[num];
        }
        let num = 0;
        let st = setInterval(move, 3000);

        bannerbox.onmouseover = function () {
            clearInterval(st);
        }
        bannerbox.onmouseout = function () {
            st = setInterval(move, 3000);
        }
        next.onclick = function () {
            move();
        }
        prev.onclick = function () {
            num -= 2;
            move();
        }
    }*/
    // headerSearch();
    function headerSearch() {
        let box = document.querySelector('.header-search');
        let left = document.querySelector('.search-text');
        let right = document.querySelector('.search-btn');
        box.onmouseenter = function () {
            left.className = 'search-text header-search-hover';
            right.className = 'search-btn search-btn-hover';
        }
        box.onmouseleave = function () {
            left.className = 'search-text';
            right.className = 'search-btn';
        }
    }

    changeColor();
    function changeColor() {
        let a = document.querySelectorAll('.site-topbar a');
        for (let i = 0; i < a.length; i++) {
            a[i].onmouseover = function () {
                this.className = 'a-hover';
            }
            a[i].onmouseleave = function () {
                this.className = '';
            }
        }
    }

    headNavList();
    function headNavList() {
        let lis = document.querySelectorAll('.header-nav .header-yiji-a');
        for (let i = 0; i < lis.length; i++) {
            lis[i].onmouseover = function () {
                this.className = 'header-yiji-a-hover';
            }
            lis[i].onmouseleave = function () {
                this.className = 'header-yiji-a';
            }
        }
    }

    // topbarCart();
    function topbarCart() {
        let bar = document.querySelector('.site-topbar .topbar-cart');
        let menu = document.querySelector('.site-topbar .topbar-cart .cart-menu');
        let a = document.querySelector('.site-topbar .topbar-cart a');
        bar.onmouseenter = function () {
            this.className = 'topbar-cart topbar-cart-hot';
            menu.className = 'cart-menu cart-menu-hot';
            a.className = 'a-hot';
            a.style.color = '#ff6700';
        }
        bar.onmouseleave = function () {
            this.className = 'topbar-cart';
            menu.className = 'cart-menu';
            a.className = '';
            a.style.color = '#b0b0b0';
        }
    }

    /*	// headerNavLi();
     function headerNavLi(){
     let lis=document.querySelectorAll('.header-nav .header-nav-li');
     let menu=document.querySelectorAll('.header-nav .header-nav-li .header-nav-menu');
     let ul=document.querySelector('.header-nav .header-nav-list');
     for(let i=0;i<7;i++){

     lis[i].onmouseenter=function(){
     menu[i].className='header-nav-menu header-nav-menu-hot';
     }
     lis[i].onmouseleave=function(){
     menu[i].className='header-nav-menu';
     }
     }
     }*/
    // subRight()
   /* {
        let ch = window.innerHeight;
        let floors = document.querySelectorAll('.box-bd');
        // let boxs=Array.from(floors);
        let arr = [];
        floors.forEach(function (value, index) {
            arr.push(value.offsetTop);
            //--------------------------------------------------按需加载核心代码块
            let imgs = floors[index].getElementsByTagName('image');
            for (let j = 0; j < imgs.length; j++) {
                imgs[j]['src'] = imgs[j]['title'];
            }
            //------------------------------------------------------
        });
        // console.log(arr);
        window.onscroll = function () {
            let tops = document.body.scrollTop;
            // console.log(tops);
            for (let i = 0; i < arr.length; i++) {
                if (tops + ch > arr[i] + 200) {
                    let imgs = floors[i].getElementsByTagName('img');
                    console.log(floors[i])
                    console.log(imgs)
                    for (let j = 0; j < imgs.length; j++) {
                        imgs[j]['src'] = imgs[j]['title'];
                    }
                }
            }
        }
    }*/

    let bigbox = document.querySelector('.home-star-goods');
    let bigbox1 = document.querySelector('.home-recm-box');
    starGoods(bigbox);
    starGoods(bigbox1);

    function starGoods(bigbox) {
        let box = bigbox.querySelector('.xm-carousel-list');
        let starGoodsL = bigbox.querySelector('.box-hd .more .starGoodsL');
        let starGoodsR = bigbox.querySelector('.box-hd .more .starGoodsR');
        let iconL = bigbox.querySelector('.iconL');
        let iconR = bigbox.querySelector('.iconR');
        box.style.width = '2452px';
        box.style.transition = "margin .5s ease";
        moveSR();
        let t, flag = 0, flag1 = 1;
        t = setInterval(moveStar, 10000);
        function moveStar() {
            if (flag == 0) {
                flag = !flag;
                flag1 = 0;
                moveSL();
            } else {
                flag = !flag;
                flag1 = 1;
                moveSR();
            }
        }

        starGoodsL.onclick = function () {
            if (flag1 == 0) {
                flag1 = !flag1;
                moveSR()
            } else {
                return;
            }
        }
        starGoodsR.onclick = function () {
            if (flag1 == 1) {
                flag1 = !flag1;
                moveSL()
            } else {
                return;
            }
        }
        function moveSR() {
            box.style.marginLeft = '0';
            starGoodsL.style.cursor = 'auto';
            starGoodsR.style.cursor = 'pointer';
            iconR.style.color = '#b0b0b0';
            iconL.style.color = '#e0e0e0';
        }

        function moveSL() {
            box.style.marginLeft = '-1226px';
            starGoodsR.style.cursor = 'auto';
            starGoodsL.style.cursor = 'pointer';
            iconL.style.color = '#b0b0b0';
            iconR.style.color = '#e0e0e0';
        }

        starGoodsL.onmouseenter = function () {
            if (flag1 == 0) {
                iconL.style.color = '#ff6700';
            } else {
                return;
            }
        }
        starGoodsL.onmouseleave = function () {
            if (flag1 == 0) {
                iconL.style.color = '#b0b0b0';
            } else {
                return;
            }
        }
        starGoodsR.onmouseenter = function () {
            if (flag1 == 1) {
                iconR.style.color = '#ff6700';
            } else {
                return;
            }
        }
        starGoodsR.onmouseleave = function () {
            if (flag1 == 1) {
                iconR.style.color = '#b0b0b0';
            } else {
                return;
            }
        }
    }

    {
        const big = document.querySelectorAll(".home-content-box .content-list>li");
        for (var i = 0; i < big.length; i++) {
            donghua(big[i]);
        }
        function donghua(big) {
            const content = big.querySelector("ul");
            const next = big.querySelector(".control-next");
            const prev = big.querySelector(".control-prev");
            const dianlist = big.querySelectorAll(".xm-pagers>li");
            let num = 0;
            let dir = "right";
            let kaiguan = true;
            dianlist.forEach(function (ele, index) {
                ele.onclick = function () {
                    for (var i = 0; i < dianlist.length; i++) {
                        dianlist[i].classList.remove("pager-active");
                    }
                    this.classList.add("pager-active");
                    content.style.marginLeft = -index * 296 + "px";
                    num = index;
                }
            });
            function move() {
                if (dir == "right") {
                    num++;
                    if (num > dianlist.length - 1) {
                        num = dianlist.length - 1;
                        kaiguan = true;
                    }
                } else {
                    num--;
                    if (num < 0) {
                        num = 0;
                        kaiguan = true;
                    }
                }
                content.style.marginLeft = -num * 296 + "px";
                for (var i = 0; i < dianlist.length; i++) {
                    dianlist[i].classList.remove("pager-active");
                }
                dianlist[num].classList.add("pager-active");
            }

            next.onclick = function () {
                dir = "right";
                if (kaiguan) {
                    kaiguan = false;
                    move();
                }
            }
            prev.onclick = function () {
                dir = "left";
                if (kaiguan) {
                    kaiguan = false;
                    move();
                }
            }
            content.addEventListener("transitionend", function () {
                kaiguan = true;
            })
        }
    }
    {
        let box = document.querySelectorAll(".home-brick-box");
        box.forEach(function (ele) {
            seeMore(ele);
        })
        function seeMore(obj) {
            let lis = obj.querySelectorAll(".tab-list li");
            let cons = obj.querySelectorAll(".row-right ul");
            lis.forEach(function (ele, index) {
                ele.onmouseover = function () {
                    for (var i = 0; i < lis.length; i++) {
                        lis[i].classList.remove("tab-active");
                        cons[i].classList.remove("active");
                    }
                    this.classList.add("tab-active");
                    cons[index].classList.add("active");
                }
            });
        }
    }
    {
        let ul = document.querySelector(".headerNavItem");
        let lis = document.querySelectorAll(".zhongyao");
        let divs = document.querySelectorAll(".headerNavMenu");
        let bg = document.querySelector(".headerNavMenu-bg");
        let num = 0;
        let flag = true;
        lis.forEach(function (ele, index) {
            ele.onmouseover = function () {
                divs[index].style.height = "230px";
                divs[index].style.borderBottom = "1px solid #e0e0e0";
                num = index;
                divs[index].addEventListener("transitionend", function () {
                    for (var i = 0; i < lis.length; i++) {
                        divs[i].style.transition = "null";
                    }
                })
            }
            ele.onmouseout = function () {
                /*for(var i=0;i<lis.length;i++){
                 divs[i].style.transition="height .5s ease";
                 }*/
                divs[index].style.transition = "height .5s ease";
                divs[index].style.height = "0";
                divs[index].style.borderBottom = 0;
            }
        });

    }
    {

        let headerSearch = document.querySelector(".headerSearch");
        let headerSub = document.querySelector(".headerSub");
        let sousuo = document.querySelector(".sousuo");
        let a1 = document.querySelector("#a1");
        let a2 = document.querySelector("#a2");
        headerSearch.onfocus = function () {
            this.style.borderColor = "#ff6700";
            headerSub.style.borderColor = "#ff6700";
            a1.style.opacity = "0";
            a2.style.opacity = "0";
            sousuo.style.display="block";
        }
        headerSearch.onblur = function () {
            this.style.borderColor = "#ccc";
            headerSub.style.borderColor = "#ccc";
            a1.style.opacity = "1";
            a2.style.opacity = "1";
            sousuo.style.display="none";
        }

    }
}
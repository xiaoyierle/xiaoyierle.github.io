'use strict'
/*窗口加载完执行一段程序*/
window.onload=function(){
	var designWidth = 1080;/*定义设计尺寸*/
	function fontSize(){
		var CW = document.documentElement.clientWidth;
		console.log(CW);
		if (CW<768) {
			var size = CW/designWidth*100+"px";
			document.querySelector("html").style.fontSize=size;/*设置html的fontsize*/
		}
		else{
		document.querySelector("html").style.fontSize=null;
		}
//		document.querySelector(".box").style.width=size;
		console.log(size);
	}
	fontSize();
	window.onresize = fontSize;/*检测窗口尺寸是否发生变化*/
	{
		const small=document.querySelectorAll(".show-next>div>a");
		const big=document.querySelectorAll(".above-cover>a>image");
		const word=document.querySelectorAll(".cover-m-word");
		const masks=document.querySelectorAll(".show-next a .mask");
		const gonggao=document.querySelector(".fc-item-list");
		let length=document.querySelectorAll(".fc-item-list span").length;
		let num=0;
		small.forEach(function(ele,index){
			ele.onmouseover=function(){
				big.forEach(function(ele,index){
					ele.style.zIndex=1;
					ele.style.display="none";
					masks[index].style.display="none";
					word[index].style.display="none";
				})
				// big[index].style.zIndex=2;
				big[index].style.display="block";
				masks[index].style.display="block";
				word[index].style.display="block";
			}
		});
		setInterval(function(){
			num++;
			if (num == 1) {
				gonggao.style.transition="all .5s ease";
			}
			if(num==length/2){
				num=0;
			}
			gonggao.style.marginTop=-num*40+"px";
		},3000);
		gonggao.addEventListener("transitionend",function(){
			if(num==2){
				gonggao.style.transition="null";
				gonggao.style.marginTop="-2px";
				num=0;
			}
		})
	}
	{
		const bannerlist=document.querySelectorAll(".web-banner-list li");
		const dianlist=document.querySelectorAll(".lunBo li");
		const bannerbox=document.querySelector(".web-banner");
		var colorarr=["#84cef1","#E8E8E8","#E8E8E8","#2091EF","#4038E3","#6A31D6"];
		dianlist.forEach(function(ele,index){
			ele.onmouseover=function(){
				for(var i=0;i<dianlist.length;i++){
					dianlist[i].classList.remove("active");
					bannerlist[i].classList.remove("active");
				}
				this.classList.add("active");
				bannerlist[index].classList.add("active");
				bannerbox.style.background=colorarr[index];
				num=index;
			}
		});
		let num=0;
		let move=function(){
			num++;
			if(num==dianlist.length){
				num=0;
			}
			for(var i=0;i<dianlist.length;i++){
				dianlist[i].classList.remove("active");
				bannerlist[i].classList.remove("active");
			}
			dianlist[num].classList.add("active");
			bannerlist[num].classList.add("active");
			bannerbox.style.background=colorarr[num];
		}
		let st=setInterval(move,3000);
		bannerbox.onmouseover=function(){
			clearInterval(st);
		}
		bannerbox.onmouseout=function(){
			st=setInterval(move,3000);
		}
	}
	{
		const box=document.querySelector(".show-next");
		const next=document.querySelector(".next-button");
		const prev=document.querySelector(".prev-button");
		const livecon=document.querySelector(".live-con");
		let flag=true;
		next.onclick=function(){
			box.style.marginLeft="-488px";
			prev.style.display="block";
			this.style.display="none";
		}
		prev.onclick=function(){
			box.style.marginLeft=0;
			next.style.display="block";
			this.style.display="none";
		}
		let st=setInterval(function(){
			if(flag==true){
				box.style.marginLeft="-488px";
				prev.style.display="block";
				next.style.display="none";
				flag=false;
			}else{
				box.style.marginLeft=0;
				next.style.display="block";
				prev.style.display="none";
				flag=true;
			}
		},3000);
		livecon.onmouseover=function(){
			clearInterval(st);
		}
		livecon.onmouseout=function(){
			st=setInterval(function(){
				if(flag=true){
					box.style.marginLeft="-488px";
					prev.style.display="block";
					next.style.display="none";
					flag=false;
				}else{
					box.style.marginLeft=0;
					next.style.display="block";
					prev.style.display="none";
					flag=true;
				}
			},3000);
		}
	}
	//楼层跳转
	/*{
		let totop=document.querySelector(".inner-top");
		totop.onclick=function(){
			let obj=document.body.scrollTop==0?document.documentElement:document.body;
//        obj.scrollTop=0;
			let scrollt=obj.scrollTop;
			let time=500;
			let speed=scrollt/time*50;
			let st=setInterval(function(){
				scrollt-=speed;
				obj.scrollTop=scrollt;
				if(scrollt<=0){
					obj.scrollTop=0;
					clearInterval(st);
				}
			},50);
		}
	}*/
// 导航栏

	/*{
		let topbar=document.querySelector(".toptop");
		let leftbar=document.querySelector(".left-fixed");
		let divs=leftbar.querySelectorAll("#inners");
		let body=document.querySelectorAll(".fouth-parts");
		let leftbararr=[1700,2100,2700,3100,3700,4200,4700];
		let colorarr=["#64C333","#EA5F8D","#0AA6E8","#F7A945","#19C8A9","#F15453","#000"];
		let time=500;
		window.onscroll=function(){
			var obj=document.body.scrollTop==0?document.documentElement:document.body;
			if(obj.scrollTop>765){
				topbar.style.top=0;
			}
			if(obj.scrollTop>600){
				leftbar.style.bottom="0";
				leftbar.style.left=0;
			}else if(obj.scrollTop<600){
				leftbar.style.left="-35px";
				leftbar.style.bottom="-282px";
				topbar.style.top="-50px";
			}else if(obj.scrollTop<765){
				topbar.style.top="-50px";
			}
			for(var j=0;j<divs.length;j++){
				if(obj.scrollTop>leftbararr[j]){
					for(var i=0;i<divs.length;i++){
						divs[i].style.background="rgba(0,0,0,.6)";
					}
					divs[j].style.background=colorarr[j];
				}
			}
			divs.forEach(function(ele,index){
				ele.onclick=function(){
					console.log(obj.scrollTop,body[index].offsetTop)
					// obj.scrollTop=body[index].offsetTop;
					let scrollt=obj.scrollTop-body[index].offsetTop;
					let speed=scrollt/time*50;
					// obj.scrollTop=body[index].offsetTop;
					if(scrollt<0){
						scrollt*=-1;

						speed=scrollt/time*50;
						let st=setInterval(function(){
							obj.scrollTop+=speed;
							if(body[index].offsetTop-obj.scrollTop<=100){
								obj.scrollTop=body[index].offsetTop;
								clearInterval(st);
							}
						},50);
					}else{
						speed=scrollt/time*50;
						let st=setInterval(function(){
							obj.scrollTop-=speed;
							if(obj.scrollTop-body[index].offsetTop<=100){
								obj.scrollTop=body[index].offsetTop;
								clearInterval(st);
							}
						},50);
					}
					/!*let st=setInterval(function(){

						scrollt-=speed;
						obj.scrollTop=scrollt;
						if(scrollt<=0){
							obj.scrollTop=body[index].offsetTop;
							clearInterval(st);
						}
					},50);*!/
					for(var i=0;i<divs.length;i++){
						divs[i].style.background="rgba(0,0,0,.6)";
					}
					this.style.background=colorarr[index];
				}
			})

		}
	}*/
	//左边的导航栏
	/*{
		var topbar=document.querySelector(".left-fixed");
		window.onscroll=function(){
			var obj=document.body.scrollTop==0?document.documentElement:document.body;
			if(obj.scrollTop>600){
				topbar.style.bottom="70px";
				topbar.style.left=0;
			}else{
				topbar.style.left="-35px";
				topbar.style.bottom="-282px";
			}
		}
	}*/
	{
		let baitiao=document.querySelectorAll(".baitiao");
		console.log(baitiao.length)
		for(var i=0;i<baitiao.length;i++){
			baitiaomove(baitiao[i]);
		}
		function baitiaomove(baitiao){
			let baitiaoInner=baitiao.querySelector(".baitiao-inner");
			let length=baitiao.querySelectorAll(".baitiao-inner-a").length;
			let num=0;
			let st = setInterval(function(){
				num++;
				/*if(num==length){
					num=0;
				}*/
				baitiaoInner.style.transition="all 1s ease";
				baitiaoInner.style.marginTop=-num*30+"px";
			},3000);
			baitiaoInner.addEventListener("transitionend",function(){
				if(num>=length-1){
					clearInterval(st);
					baitiaoInner.style.transition="null";
					baitiaoInner.style.marginTop="0px";
					num=0;
					st = setInterval(function(){
						num++;
						baitiaoInner.style.transition="all 1s ease";
						baitiaoInner.style.marginTop=-num*30+"px";
					},3000);
				}
			});
		}
	}
	{
		let obj;
		let hide=document.querySelector(".a-hide");
		window.addEventListener("scroll",function(){
			obj=document.documentElement.scrollTop==0?document.body:document.documentElement;
			if(obj.scrollTop>0){
				hide.style.display="block";
			}else{
				hide.style.display="none";
			}
			hide.onclick=function(){
				let scrollt=obj.scrollTop;
				let time=500;
				let speed=scrollt/time*50;
				let st=setInterval(function(){
					scrollt-=speed;
					obj.scrollTop=scrollt;
					if(scrollt<=0){
						obj.scrollTop=0;
						clearInterval(st);
					}
				},50);
			}
		});
	}
	{
		let imgs=document.images;
		Array.from(imgs).forEach(function(ele){
			if(window.innerHeight>getPosition(ele)){

				ele.src=ele.getAttribute("data-src");
			}
		});
		window.addEventListener("scroll",function(){
			let st=document.documentElement.scrollTop==0?document.body.scrollTop:document.documentElement.scrollTop;
			Array.from(imgs).forEach(function(ele){
				if(st+window.innerHeight>getPosition(ele)){
					ele.src=ele.getAttribute("data-src");
				}
			});
		});
		function getPosition(obj){
			let ot=obj.offsetTop;
			let parent=obj.offsetParent;
			while(parent!==null&&parent.nodeName!=="BODY"){
				ot+=parent.offsetTop;
				parent=parent.offsetParent;
			}
			return ot;
		}
	}
}

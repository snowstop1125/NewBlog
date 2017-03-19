// JavaScript Document
window.onload=function(){
	var oWrap=document.getElementById('wrap');
	var oHtml=document.getElementsByTagName('html')[0];
	var oKt=document.getElementById('kaitou');
	var oC=document.getElementById('cav');
	var oP=oKt.getElementsByTagName('p');
	var oIn=oKt.getElementsByTagName('a')[0];

	var oNav=document.getElementById('nav_r');
	var oBar=oNav.children[0].lastElementChild || oNav.children[0].lastChild;
	var aLi=oNav.getElementsByTagName('li');
	var timer=null;
	var nowPos=0;
	var l=0;
	
	var gd=oC.getContext('2d');
	var winW=document.documentElement.clientWidth;
	var winH=document.documentElement.clientHeight;
	oC.width=winW;
	oC.height=winH;
	//画布绘画 
	oC.onmousedown=function(ev){
		var x=ev.clientX-oC.offsetLeft;
		var y=ev.clientY-oC.offsetLeft+8;
		gd.beginPath();
		gd.moveTo(x,y)
		
		document.onmousemove=function(ev){
			var x=ev.clientX-oC.offsetLeft;
			var y=ev.clientY-oC.offsetLeft+8;
			
			gd.lineTo(x,y);
			gd.strokeStyle='rgba(255, 255, 255, .2)';
			gd.lineWidth='5';

			gd.stroke();
		}
		document.onmouseup=function(){
			document.onmousemove=document.onmouseup=null;
		}
		return false;
	}
	
	//消失
	oIn.onclick=function(){
		oKt.style.WebkitTransition='3s all ease';
		oKt.style.MozTransition='3s all ease';
		oKt.style.MsTransition='3s all ease';
		oKt.style.OTransition='3s all ease';
		oKt.style.transition='3s all ease';
		oKt.style.WebkitTransform='perspective(800px) translateY(-1000px)';
		oKt.style.MozTransform='perspective(800px) translateY(-1000px)';
		oKt.style.MsTransform='perspective(800px) translateY(-1000px)';
		oKt.style.OTransform='perspective(800px) translateY(-1000px)';
		oKt.style.transform='perspective(800px) translateY(-1000px)';

		oKt.style.opacity='0.5';

 		function tranEnd(){
			oKt.removeEventListener('transitionend',tranEnd,false);
			oKt.style.display='none';
		}
		oKt.addEventListener('transitionend',tranEnd,false);
 		
		oWrap.style.display='block';
		oNav.style.display='block';
	}


    //导航菜单	
	setNav();
	function setNav(){
		for(var i=0;i<aLi.length;i++){
			aLi[i].onmouseover=function(){
				moveNav(oBar,this.offsetLeft);
				//this.children[0].className='active';
			}
			aLi[i].onmouseout=function(){
				moveNav(oBar,nowPos);
				//aLi[i].children[0].className='';
			}
			aLi[i].onclick=function(){
				clearInterval(timer);
				for(var j=0;j<aLi.length;j++){
					aLi[j].children[0].className='';
				}
				this.children[0].className='active';
			}
		}
		
		function moveNav(obj,iTarget){
			clearInterval(timer);
			var speed=0;
			timer=setInterval(function(){
				speed+=(iTarget-obj.offsetLeft)/5;
				speed *= 0.7;	
				l+=speed;
	
				obj.style.left=Math.round(l)+'px';
	
				if(Math.abs(speed)<1) speed=0;
				
				if(obj.offsetLeft==iTarget && speed==0){
					clearInterval(timer);
					//console.log(iTarget,obj.offsetLeft,speed);//没到位	
				}
				
			},30);
		}
	}
	
	var oTab=document.getElementById('tab');
	var aLi=oTab.children;
	var aP
	var iNow=0;
	for(var i=0;i<aLi.length;i++){
		(function(index){
			aLi[i].onmouseover=function(){
				for(var i=0;i<aLi.length;i++){
					aLi[i].className='';
				}
				this.className='active';
			}
			iNow=index;
			pageTab();
		})(i);
	}
	
	function pageTab(){
		for(var i=0;i<aLi.length;i++){
			aLi[i].className='';
		}
		aLi[iNow].className='active';
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
}

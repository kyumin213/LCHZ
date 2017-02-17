function scroll(){
	$("#left-news ul").animate({marginTop:'-40px'},500,function(){
		$(this).css({marginTop:'0px'}).find("li:first").appendTo(this);
	})
}




 $(function(){
       //登录注册按钮鼠标滑过
        $('div.login a').hover(function(){
            $(this).addClass('hh').siblings('a').removeClass('hh');
        });
        //鼠标滑过移动端显示二维码
        $('.yd').hover(function(){
        	$('.apps').css("display","block");
        },function(){
        	$('.apps').css("display","none");
        });

        //单行消息滚动显示
        var inte=setInterval("scroll()",2000);
        $("#left-news").hover(function(){
        	clearInterval(inte);
        },
        function(){
        	inte=setInterval("scroll()",2000);
        });

        //底部展开
        var xs=$(".show-link");
        var zk=$(".zk");
        $(".zk").click(function(){
        	xs.slideToggle();
        });



      //鼠标下拉导航置顶展示
        var nav=$(".nav");
        var win=$(window);
        var sc=$(document);
        var aa=$('nav ul a');
        win.scroll(function(){
        	if(sc.scrollTop()>=40){
        		nav.addClass("fixednav");
        		aa.addClass("nav-gd");
        		$('.navTmp').fadeIn();

        	}else{
        		nav.removeClass("fixednav");
        		aa.removeClass("nav-gd");
        		$('.navTmp').fadeOut();
        	}
        });

      //返回顶部
        var back=$(".back-to-top");
        back.click(function(){
        	$('html','body').animate({
        		scrollTop:0
        	},800);
        	if($('html').scrollTop()){
        		$('html').animate({scrollTop:0},800);
        		return false;
        	}
        		$('body').animate({scrollTop:0},800);
        		return false;
        });
        //监听window的scroll事件
        $(window).on('scroll',function(){
            if($(window).scrollTop()>$(window).height()){
                back.fadeIn();
            }else{
                back.fadeOut();
            }
        });
        $(window).trigger('scroll');

        //大咖说理查看更多
        var $getmore=$('.dk div.bigcast:gt(3)');
        $getmore.hide();
        var $toggleBtn=$('.view-middle>span');
        $toggleBtn.click(function(){
            if($getmore.is(':visible')){
                  $getmore.hide(500);
                $(this).text("查看更多");
            }else{
               $getmore.show(500);
                $(this).text("收起");
            }
            return false;
        });

        //首页图片轮播展示
        var continer=$("#banner");
        var lits=$("#banner_list");
        var btn=$("#banner_posint span");
        var prev=$("#prev");
        var next=$("#next");
        var index=1;
        var len=3;
        var interval=2000;
        var timer;

        function animate(offset){
        	var left=parseInt(lits.css('left'))+offset;
        	if(offset>0){
        		offset= '+=' + offset;
        	}else{
        		offset= '-=' + Math.abs(offset);
        	}
        	lits.animate({'left':offset},300,function(){
        		if(left>-200){
        			lits.css('left',-1500 * len);
        		}if(left<(-1500*len)){
        			lits.css('left',-1500)
        		}
        	});
        }

        function showButton(){
        	btn.eq(index-1).addClass('on').siblings().removeClass('on');
        }

        function play(){
        	timer=setTimeout(function(){
        		next.trigger('click');
        		play();
        	},interval);
        }

        function stop(){
        	clearTimeout(timer);
        }

        next.bind('click',function(){
        	if(lits.is(':animated')){
        		return;
        	}if(index==3){
        		index=1;
        	}else{
        		index+=1;
        	}
        	animate(-1500);
        	showButton();
        });

        prev.bind('click',function(){
        	if(lits.is(':animated')){
        		return;
        	}if(index==1){
        		index=3;
        	}else{
        		index-=1;
        	}
        	animate(1500);
        	showButton();
        });

        btn.each(function(){
        	$(this).bind('mouseover',function(){
        		if(lits.is(':animated') || $(this).attr('class')=='on'){
        			return;
        		}
        		var myIndex=parseInt($(this).attr('index'));
        		var offset = -1500*(myIndex-index);
        		animate(offset);
        		index=myIndex;
        		showButton();
        	})
        });

        continer.hover(stop,play);
        play();

   });






	/*var box=document.getElementById("banner");
	var lis=document.getElementById("banner_list");
	var btn=document.getElementById("banner_posint").getElementsByTagName("li");
	var prev=document.getElementById("prev");
	var next=document.getElementById("next");
	var timer;
	var interval=2000;
	var index=1;
	var len=3;
	var animated=false;

	function animate(offset){
		if(offset==0){
			return;
		}
		animated=true;
		var time=300;
		var interval=10;
		var speed=offset/(time/interval);
		var left=parseInt(lis.style.left)+offset;

		var go=function(){
			if((speed > 0 && parseInt(lis.style.left) <left)  || (speed<0 && parseInt(lis.style.left)>left)){
				lis.style.left=parseInt(lis.style.left)+speed+'px';
				setTimeout(go,interval);
			}else{
				lis.style.left=left+'px';
				if(left>-200){
					lis.style.left=-1500*len + 'px';
				}if(left<(-1500*len)){
					lis.style.left='1500px';
				}
				animated=false;
			}
		}
		go();
	}

	function showBtn(){
		for(var i=0;i<btn.length;i++){
			if(btn[i].className=='on'){
				btn[i].className='';
				break;
			}
		}
		btn[index-1].className='on';
	}

	function play(){
		timer=setTimeout(function(){
			next.onclick();
			play();
		},interval);
	}

	function stop(){
		clearTimeout(timer);
	}

	next.onclick=function(){
		if(animated){
			return;
		}if(index==3){
			index=1;
		}else{
			index+=1;
		}
		animate(-1500);
		showBtn();
	}

	prev.onclick=function(){
		if(animated){
			return;
		}if(index==1){
			index=3
		}else{
			index-=1;
		}
		animate(1500);
		showBtn();
	}

	for(var i=0;i<btn.length;i++){
		btn[i].onmouseover=function(){
			if(animated){
				return;
			}if(this.className=='on'){
				return;
			}

			var myIndex=parseInt(this.getAttribute('index'));
			var offset=-1500*(myIndex-index);
			animate(offset);
			index=myIndex;
			showBtn();
		}
	}

	box.onmouseover=stop;
	box.onmouseout=play;
	play();
*/





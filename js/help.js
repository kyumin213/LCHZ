//左侧菜单切换显示内容
window.onload=function(){
    getHeight();
	var lis=document.getElementById("left_menu").getElementsByTagName("li");
	var divs=document.getElementById("right_help").getElementsByTagName("div");
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			for(var j=0;j<lis.length;j++){
				lis[j].className="";
            }
			this.className="hover";
			for(var i=0;i<divs.length;i++){
				divs[i].style.display="none";
			}
			divs[this.index].style.display="block";
			   getHeight();
 		}
	}
}

//左侧高度和右侧内容高度保持一致
 function getHeight(){
  		var left=document.getElementById("left_help");
  		var right=document.getElementById("right_help");
  			if(left.clientHeight<=right.clientHeight){

               left.style.height=right.offsetHeight+"px";

          }else{
          	left.style.height=right.offsetHeight+"px";
          }
  	}K





$(document).ready(function(){
	$(".webs li").click(function(){
		var index=$(this).index();
		$(this).addClass('selected').siblings('li').removeClass('selected');
		$('.product div').eq(index).show().siblings('div').hide();
	});
	$('.item li').click(function(){
		$(this).addClass('mon').siblings('li').removeClass('mon');
	})
})

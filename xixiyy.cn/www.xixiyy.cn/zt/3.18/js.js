// JavaScript Document
$(function(){
	//顶部导航下拉
	$(".main-nav ul").find(".sub").each(function(index){
		$(this).hover(
			function(){
				$(this).find("dl").stop(true,true).slideDown('fast');
				$(this).addClass('h');
			},function(){
				$(this).find("dl").stop(true,true).slideUp('fast');
				$(this).removeClass('h');
			}
		);
	});
	$(".dakai").click(function(){
		openZoosUrl();
		return false;
	});
});


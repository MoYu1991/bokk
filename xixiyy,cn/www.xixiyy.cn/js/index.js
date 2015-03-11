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
	//六宫格
	$(".l1-six-box dl").find("dd").each(function(){
		$(this).hover(
			function(){
				//$(this).find("a").stop(true,true).animate({marginTop:'-54px'},'fast');
				$(this).children("a").stop(true,true).animate({marginTop:'-54px'},'fast');
			},function(){
				$(this).children("a").stop(true,true).animate({marginTop:'0px'},'fast');
			}
		);
	});
	
	//疾病展开与合并
	$("#openclose").click(function(){
		if($("#oc-content").is(":visible")==false){
			$("#oc-content").slideDown();
			$(this).attr('class','opened');
			$(this).attr('title','合并疾病检索');
		}else{
			$("#oc-content").slideUp();
			$(this).attr('class','closed');
			$(this).attr('title','展开疾病检索');
		}
	});
	
	//新闻切换
	$("#l3-news").find("li").each(function(){
		$(this).mouseover(function(){
			$(this).addClass("h").siblings().removeClass('h');
		});
	});
	//疗法头部切换
	$("#l4nav li").each(function(index){
		$(this).mouseover(function(){
				$(this).addClass('h').siblings().removeClass('h');
				$(this).children("span").addClass('h').parent().siblings('li').children('span').removeClass('h');
				$("#l4box .one").eq(index).css('display','block').siblings(".one").css('display','none');
			}
		);
	});
	//患者之声
	$("#l6box dl").find('dd').each(function(){
		$(this).hover(
			function(){
				var H=$(this).height();
				//alert(H);
				$(this).find("span").stop(true,true).animate({marginTop:'-'+H+'px'});
			},function(){
				$(this).find("span").stop(true,true).animate({marginTop:'0px'});
			}
		);
	});
	//底部滚动
	$("#l7h7 li").each(function(index){
		$(this).click(function(){
			$(this).addClass('h').siblings().removeClass('h');
			$("#l7box dl").eq(index).css('display','block').siblings().css('display','none');
		});
	});
});









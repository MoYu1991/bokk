document.writeln("<style type=\"text/css\">");
document.writeln("");
document.writeln("#swt_right{ position:fixed;bottom:5px; right:0px; width:140px; height:320px; background:url(http://www.xixiyy.cn/zixun/images/swt_right_3.gif) no-repeat; z-index:10020;}");
document.writeln("#swt_right #swt_r_open_1{ display:block; position:absolute; width:140px; height:296px; top:24px; left:0;}");
document.writeln("#swt_right #swt_r_open_2{ display:block; position:absolute; width:140px; height:30px; top:408px; left:0;}");
document.writeln("#swt_right #swt_r_close_1{ display:block; position:absolute; width:24px; height:24px; top:0px; right:2px; }");
document.writeln("");
document.writeln("#swt_box{font-family:宋体, Arial, Helvetica, sans-serif; color:#333; width:522px; height:275px; background:url(http://www.xixiyy.cn/zixun/images/swt2.png) no-repeat; position:fixed; z-index:999999999; left:50%; margin-left:-261px; top:140px;}");
document.writeln("#swt_box *{margin:0;padding:0;}");
document.writeln("#swt_box #swt_box_close{ width:22px; height:23px; position:absolute; top:4px; right:8px;}");
document.writeln("#swt_box #swt_line{ overflow:hidden; position:absolute; width:490px; height:100px; left:13px; top:40px;}");
document.writeln("#swt_box #swt_line dl{ text-align:left; float:left; width:153px; height:40px; padding:0 0 0 10px; margin:0; display:inline-block;}");
document.writeln("#swt_box #swt_line dl dt{ height:24px; line-height:24px; margin:0; padding:0px;}");
document.writeln("#swt_box #swt_line dl dt a{ font-size:12px; color:#333; text-decoration:none; font-weight:bold;}");
document.writeln("#swt_box #swt_line dl dt a.r{color:#ff0000;}");
document.writeln("#swt_box #swt_line dl dd{ margin:0; padding:0; line-height:20px; height:20px; font-size:12px; }");
document.writeln("#swt_box #swt_line dl dd a{color:#333; text-decoration:none; font-size:12px;}");
document.writeln("#swt_box #swt_input{ width:486px; padding:2px; margin:0; height:35px; left:13px;color:#ff0000; top:176px; position:absolute; border:0; outline:0; resize:none;font-size:14px; overflow:hidden;}");
document.writeln("#swt_box #swt_open{ width:190px; height:27px; position:absolute; bottom:6px; left:165px;}");
document.writeln("</style>");
document.writeln("<!--[if IE 6]>");
document.writeln("<style type=\"text/css\">");
document.writeln("html{overflow:hidden}");
document.writeln("body{height:100%;overflow:auto}");
document.writeln("#swt_box,#swt_right,#swt_right_bottom{position:absolute}");
document.writeln("#sqq{position:absolute}");
document.writeln("</style>");
document.writeln("<![endif]-->");
document.writeln("");
document.writeln("<div id=\"swt_box\" style=\"display:none;\">");
document.writeln("	<a id=\"swt_box_close\" href=\"javascript:;\" onclick=\"swt_close_center();LR_RefuseChat();return false;\" title=\"关闭\"></a>");
document.writeln("    <div id=\"swt_line\">");
document.writeln("    	<dl>");
document.writeln("        	<dt><a href=\"/zixun/\" class=\"r\">生物治疗</a></dt>");
document.writeln("            <dd><a href=\"/zixun/\">费用</a>｜<a href=\"/zixun/\">效果</a></dd>");
document.writeln("        </dl>");
document.writeln("        <dl>");
document.writeln("        	<dt><a href=\"/zixun/\">手术治疗</a></dt>");
document.writeln("            <dd><a href=\"/zixun/\">费用</a>｜<a href=\"/zixun/\">成功率</a></dd>");
document.writeln("        </dl>");
document.writeln("        <dl style=\"width:163px; padding:0;\">");
document.writeln("        	<dt><a href=\"/zixun/\">放射治疗</a></dt>");
document.writeln("            <dd><a href=\"/zixun/\">放化疗区别</a>｜<a href=\"/zixun/\">副作用</a>｜<a href=\"/zixun/\">是什么</a></dd>");
document.writeln("        </dl>");
document.writeln("        <div style=\"width:100%; height:1px; overflow:hidden; clear:both;border-bottom:1px dashed #ddd; margin:8px 0 5px; display:inline-block;\"></div>");
document.writeln("        <dl>");
document.writeln("        	<dt><a href=\"/zixun/\">化学治疗</a></dt>");
document.writeln("            <dd><a href=\"/zixun/\">副作用</a>｜<a href=\"/zixun/\">费用</a>｜<a href=\"/zixun/\">饮食</a></dd>");
document.writeln("        </dl>");
document.writeln("        <dl>");
document.writeln("        	<dt><a href=\"/zixun/\">靶向治疗</a></dt>");
document.writeln("            <dd><a href=\"/zixun/\">是什么</a>｜<a href=\"/zixun/\">费用</a></dd>");
document.writeln("        </dl>");
document.writeln("        <dl style=\"width:163px; padding:0;\">");
document.writeln("        	<dt><a href=\"/zixun/\" class=\"r\">医保报销</a></dt>");
document.writeln("            <dd><a href=\"/zixun/\">比例</a>｜<a href=\"/zixun/\">范围</a>｜<a href=\"/zixun/\">流程</a></dd>");
document.writeln("        </dl>");
document.writeln("    </div>");
document.writeln("    ");
document.writeln("    <textarea id=\"swt_input\" onclick=\"openZoosUrl();\"></textarea>");
document.writeln("    <a id=\"swt_open\" href=\"javascript:;\" onclick=\"openZoosUrl();return false;\"></a>");
document.writeln("   ");
document.writeln("</div>");
document.writeln("");
document.writeln("<!--商务通右侧-->");
document.writeln("<div id=\"swt_right\">");
document.writeln("<a href=\"javascript:;\" onclick=\"swt_close_center();openZoosUrl();return false;\" id=\"swt_r_open_1\" title=\"咨询在线专家\"></a>");
document.writeln("<a href=\"javascript:;\" onClick=\"swt_open_center();return false;\" id=\"swt_r_close_1\" title=\"关闭\"></a>");
document.writeln("</div>");

var swt_first_show=15;//初次弹出邀请框的时间，秒
var swt_normal_show=20;//正常弹出邀请框间隔，秒
var swt_open_timer;//循环时钟
var swt_first_timer;//初次时钟
var swt_seconds=0;//间隔秒数
var swt_input_timer;//邀请框文字输入时钟

var swt_words='请在此输入您要咨询的问题...';
var swt_current_length = 0;

function getID(id){return document.getElementById(id);}

function getswt_words() {
	if (swt_current_length < swt_words.length) swt_current_length++;
	else swt_current_length = 0;
	var swt_word = swt_words.substr(0, swt_current_length);
	showswtwords(swt_word);
}
function showswtwords(msg) {getID("swt_input").innerHTML = msg;}

//关闭邀请框
function swt_close_center(){
	clearInterval(swt_open_timer);
	clearInterval(swt_input_timer);
	getID("swt_box").style.display='none';
	getID("swt_right").style.display='block';
	swt_seconds=0;
	swt_open_timer=setInterval("swt_jisuan()",1000);
}
//打开邀请框
function swt_open_center(){
	clearInterval(swt_open_timer);
	clearTimeout(swt_first_timer);//关闭首次的Timeout
	//文字重新开始输入
	clearInterval(swt_input_timer);
	swt_input_timer=setInterval('getswt_words()',300);
	
	getID("swt_right").style.display='none';
	getID("swt_box").style.display='block';
	
	swt_seconds=0;
}
//间隔弹出邀请框
function swt_jisuan(){
	if(swt_seconds>=swt_normal_show){swt_open_center();}else{swt_seconds++;}
}
//初次弹出邀请框
window.onload=function(){
	swt_first_timer=setTimeout("swt_open_center()",swt_first_show*1000);
}

//商务通原始链接
document.writeln('<script language="javascript" src="http://pwt.zoosnet.net/JS/LsJS.aspx?siteid=PWT60172329"><\/script>');

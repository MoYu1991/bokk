// JavaScript Document

   function setTab(name,cursel,n){
	  for(var i=1;i<=n;i++){
	  var menu=document.getElementById(name+i);
	  var con=document.getElementById("con_"+name+"_"+i);
	  menu.className=i==cursel?"zj_lista":"";
	  con.style.display=i==cursel?"block":"none";
	} 
  }
 
 function setTab1(name,cursel,n){
	  for(var i=1;i<=n;i++){
	  var menu=document.getElementById(name+i);
	  var con=document.getElementById("con1_"+name+"_"+i);
	  menu.className=i==cursel?"mon1":"";
	  con.style.display=i==cursel?"block":"none";
	} 
  }

 function setTab2(name,cursel,n){
	  for(var i=1;i<=n;i++){
	  var menu=document.getElementById(name+i);
	  var con=document.getElementById("con2_"+name+"_"+i);
	  menu.className=i==cursel?"mon2":"";
	  con.style.display=i==cursel?"block":"none";
	} 
  }

 function setTab3(name,cursel,n){
	  for(var i=1;i<=n;i++){
	  var menu=document.getElementById(name+i);
	  var con=document.getElementById("con3_"+name+"_"+i);
	  menu.className=i==cursel?"mon3":"";
	  con.style.display=i==cursel?"block":"none";
	} 
  }

 function setTab4(name,cursel,n){
	  for(var i=1;i<=n;i++){
	  var menu=document.getElementById(name+i);
	  var con=document.getElementById("con4_"+name+"_"+i);
	  menu.className=i==cursel?"mon4":"";
	  con.style.display=i==cursel?"block":"none";
	} 
  }
  
   function setTab5(name,cursel,n){
	  for(var i=1;i<=n;i++){
	  var menu=document.getElementById(name+i);
	  var con=document.getElementById("con5_"+name+"_"+i);
	  menu.className=i==cursel?"mon5":"";
	  con.style.display=i==cursel?"block":"none";
	} 
  }
  
  
  
     function setTab6(name,cursel,n){
	  for(var i=1;i<=n;i++){
	  var menu=document.getElementById(name+i);
	  var con=document.getElementById("con6_"+name+"_"+i);
	  menu.className=i==cursel?"mon6":"";
	  con.style.display=i==cursel?"block":"none";
	} 
  }
  
  
  
     function setTab7(name,cursel,n){
	  for(var i=1;i<=n;i++){
	  var menu=document.getElementById(name+i);
	  var con=document.getElementById("con7_"+name+"_"+i);
	  menu.className=i==cursel?"mon7":"";
	  con.style.display=i==cursel?"block":"none";
	} 
  }
  
  
  
  
     function setTab8(name,cursel,n){
	  for(var i=1;i<=n;i++){
	  var menu=document.getElementById(name+i);
	  var con=document.getElementById("con8_"+name+"_"+i);
	  menu.className=i==cursel?"mon8":"";
	  con.style.display=i==cursel?"block":"none";
	} 
  }
  
  

  
  
  function ShowSub(id_num,num){ 
	for(var i = 0;i <= 15;i++){
		if(GetObj("S_Menu_" + id_num + i)){GetObj("S_Menu_" + id_num + i).className = '';}
		if(GetObj("S_Cont_" + id_num + i)){GetObj("S_Cont_" + id_num + i).style.display = 'none';}
	}
	if(GetObj("S_Menu_" + id_num + num)){GetObj("S_Menu_" + id_num + num).className = 'mon8';}
	if(GetObj("S_Cont_" + id_num + num)){GetObj("S_Cont_" + id_num + num).style.display = 'block';}
}
function GetObj(objName){
	if(document.getElementById){
		return eval('document.getElementById("' + objName + '")');
	}else{
		return eval('document.all.' + objName);
	}
}


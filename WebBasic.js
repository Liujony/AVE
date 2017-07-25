function getClassName(TagName,ClassName,dom=document){
	var box = dom.getElementsByTagName(TagName);
	var r_box = new Array();
	var index = 0;
	for(var i=0;i<box.length;i++){
		// console.log(box[i].className.indexOf(ClassName),ClassName)
		if(box[i].className.indexOf(ClassName)>=0){
			r_box[index] = box[i];
			index++;
		}
	}
	// console.log(r_box);
	if(r_box.length>0){
		return r_box;
	}else{
		return false;
	}
	
}

function showInformation(){
	var index = 0;
	var choice_dom = getClassName('ul','choice');
	var buttom_box = getClassName('li','choice-b',choice_dom[0]);
	var list_box = getClassName('div','list-box-b',choice_dom[0]);
	for(var i=0;i<buttom_box.length;i++){
		if(buttom_box[i].innerHTML.indexOf('<i class="icon-angle-down icon-1x"></i>')>=0){
			list_box[index].style.left = buttom_box[i].offsetLeft + 'px';
			(function(i,index){
				buttom_box[i].onmousemove=function(){
					list_box[index].style.display = 'block';
				}
				buttom_box[i].onmouseout=function(){
					list_box[index].style.display = 'none';
				}
				list_box[index].onmousemove=function(){
					list_box[index].style.display = 'block';
				}
				list_box[index].onmouseout=function(){
					list_box[index].style.display = 'none';
				}
			})(i,index);
			index++;
		}
	}
}
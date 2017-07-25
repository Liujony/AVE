window.onload=function(){

	showInformation();

	var item_arr = new Array();
	var li_box = getClassName('ul','content-list')[0].getElementsByTagName('li');
	// console.log(buttom_box)
	for(var i=1;i<=6;i++){
		classname = 'item-'+i;
		item_arr[i-1] = getClassName('div',classname,getClassName('div','item-box')[0]);
	}
	for(var i=0;i<6;i++){
		var dom_i = getClassName('div','information-box',item_arr[i][0]);
		(function(dom_i){
			item_arr[i][0].onmousemove=function(){
				dom_i[0].style.display = "inline-block";
			}
			item_arr[i][0].onmouseout=function(){
				dom_i[0].style.display = "none";
			}
		})(dom_i);		
		// console.log(dom[0])
	}
	for(var i=0;i<li_box.length;i++){
		(function(i){
			li_box[i].onclick=function(){
				for(var j=0;j<li_box.length;j++){
					li_box[j].className = li_box[j].className.replace('on-click','');
				}
				if(li_box[i].className==''){
					li_box[i].className = 'on-click';
				}else{
					li_box[i].className += ' on-click';
				}
			}
		})(i);
	}
}

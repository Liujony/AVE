window.onload=function(){

	showInformation();

}

function showLocalStores(){
	var local_box = getClassName("div","local-box")[0]
	var click_box = local_box.getElementsByTagName('a');
	for(var i=0;i<click_box.length;i++){
		(function(i){
			var map = getClassName("div","map-box-"+i,local_box);
			
		})(i);
	}
}

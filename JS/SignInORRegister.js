window.onload=function(){
	showInformation();

	var signin_box = getClassName('div','SignIn'),
		register_box = getClassName('div','Register'),
		signin_b = getClassName('input','button',signin_box[0]),
		register_b = getClassName('input','button',register_box[0]),
		signin_in = getClassName('input','input',signin_box[0]),
		register_in = getClassName('input','input',register_box[0]),
		Si1 = false, Si2 = false, Re1 = false, Re2 = false , Re3 = false;


	inputStyle(signin_in);
	inputStyle(register_in);
	// console.log(register_in[0].name)
	signin_in[0].onblur=function(){
		this.style.borderColor='#E7E7E7';
		Si1=inputConfirm(this);
	}
	signin_in[1].onblur=function(){
		this.style.borderColor='#E7E7E7';
		Si2=inputConfirm(this);
	}
	register_in[0].onblur=function(){
		this.style.borderColor='#E7E7E7';
		Re1=inputConfirm(register_in[0]);
	}
	register_in[1].onblur=function(){
		this.style.borderColor='#E7E7E7';
		Re2=inputConfirm(register_in[1]);
	}
	register_in[2].onblur=function(){
		this.style.borderColor='#E7E7E7';
		Re3=inputConfirm(register_in[2],register_in[1]);
	}
	signin_b[0].onclick=function(){
		if(!(Si1&&Si2)){
			return false;
		}
	}
	register_b[0].onclick=function(){
		if(!(Re1&&Re2&&Re3)){
			return false;
		}
	}
}
function inputStyle(box){
	for(var i=0;i<box.length;i++){
		(function(i){
			box[i].onfocus=function(){
				box[i].style.borderColor='#838383';
				box[i].style.backgroundColor='#FFFFFF';
			}
			box[i].onblur=function(){
				box[i].style.borderColor='#E7E7E7';
			}
		})(i);
	} 
}
function inputConfirm(box,boxPa=null){
	if(box.value==''){
		box.style.backgroundColor='#FCF6F7';
		box.style.borderColor='#BB5465';
		box.placeholder='This can not be empty..';
		return false;
	}else if(boxPa){
		if(confirmpasswdConfirm(box,boxPa)){
			return true;
		}else{
			return false;
		}
	}else{
		var funName=window[box.name+'Confirm'];
		if(funName(box)){
			return true;
		}else{
			return false;
		}
	}
}
function emailConfirm(box){
	var reg=/([a-zA-Z0-9_\-\.])+@([a-zA-Z0-9_\-\.])+(\.\S)+/g;
	if(reg.test(box.value)){
		return true;
	}else{
		box.value='';
		box.style.backgroundColor='#FCF6F7';
		box.style.borderColor='#BB5465';
		box.placeholder='The e-mail is illegal..';
		return false;
	}
}
function passwdConfirm(box){
	var reg=/\S{6,}/gi;
	if(reg.test(box.value)){
		return true;
	}else{
		box.value='';
		box.style.backgroundColor='#FCF6F7';
		box.style.borderColor='#BB5465';
		box.placeholder='The password is illegal..';
		return false;
	}
}
function confirmpasswdConfirm(box,boxPa){
	var reg=new RegExp('^'+boxPa.value+'$','g');
	if(reg.test(box.value)){
		return true;
	}else{
		box.value='';
		box.style.backgroundColor='#FCF6F7';
		box.style.borderColor='#BB5465';
		box.placeholder='The password is not the same..';
		return false;
	}
}
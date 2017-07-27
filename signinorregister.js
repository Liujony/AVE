function SignIn(Semail,Spassword){
	var url='../main.php?act=signin';
	$.post(url,{
		email:Semail,
		password:Spassword
	},function(data){
		var msg=eval('('+data+')');
		if(msg.status){
			var date=new Date();
			date.setTime(date.getTime()+60*60*24*1000*30);
			if($('.SignIn input[type=checkbox]').is(":checked")){
				$.cookie("ave_email",Remail,{expires:date});
				$.cookie("ave_password",Rpassword,{expires:date});
			}
			window.location.replace="aveFront.html";
		}else{
			switch(msg.error){
				case 'password':
					var s_p=$(".SignIn .input[name='password']");
					ShowMeg(s_p,msg.message);
					break;

				case 'email':
					var s_e=$(".SignIn .input[name='email']");
					ShowMeg(s_e,msg.message);
					break;
			}
		}
	});
}
function Register(Remail,Rpassword){
	var url='../main.php?act=register';
	$.post(url,{
		email:Remail,
		password:Rpassword
	},function(data){
		var msg=eval('('+data+')');
		if(msg.status){
			var date=new Date();
			date.setTime(date.getTime()+60*60*24*1000*30);
			window.location.replace="aveFront.html";
		}else{
			switch(msg.error){
				case 'password':
					var r_p=$(".Register .input[name='password']");
					ShowMeg(r_p,msg.message);
					break;

				case 'email':
					var r_e=$(".Register .input[name='email']");
					ShowMeg(r_e,msg.message);
					break;
			}
		}
	})
}
function ShowMeg(box,message){
	box.css({
		"background-color":'#FCF6F7',
		"border-color":'#BB5465'
	});
	box.val("");
	box.attr("placeholder",message);
}

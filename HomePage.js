$(function(){
	var buttom_box=$("li.choice-b");
	var info_box=$(".list-box-b");
	info_box.hover(function(){
		$(this).css("display","block");
	},function(){
		$(this).css("display","none");
	});
	buttom_box.hover(function(){
		if($(this).next().is("div")){
			var box=$(this).next();
			leftsize=$(this)[0].offsetLeft;
			box.css("left",leftsize+'px');
			box.css("display","block");
		}
	},function(){
		if($(this).next().is("div")){
			$(this).next().css("display","none");
		}
	});

	var item_box=$(".item-clothes-box");
	item_box.hover(function(){
		$(this).children(".information-box").css("display","inline-block");
	},function(){
		$(this).children(".information-box").css("display","none");
	});

	checkLogin();

	$(".logout").click(function(){
		$.cookie("ave_email",null);
		$.cookie("ave_password",null);
		$.get('../main.php?act=logout');
		window.location.replace="aveFront.html";
	});
});

function checkLogin(){
	var url='../main.php?act=checklogin';
	$.get(url,function(data){
		var msg=eval('('+data+')');
		if(msg.status){
			alert("ss");
			$(".signIn").css("display","none");
			$(".register").css("display","none");
			$(".logout").css("display","inline-block");
		}else{
			if($.cookie("ave_email")!=null&&$.cookie("ave_password")!=null){
				var url='../main.php?act=signin';
				$.post(url,{
					email:$.cookie("ave_email"),
					password:$.cookie("ave_password")
				},function(data){
					var msg=eval('('+data+')');
					if(msg.status){
						$(".signIn").css("display","none");
						$(".register").css("display","none");
						$(".logout").css("display","inline-block");
					}else{
						$.cookie("ave_email",null);
						$.cookie("ave_password",null);
					}
				});
			}
		}
	});
}
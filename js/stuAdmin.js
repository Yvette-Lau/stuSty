$(document).ready(function(){

	jQuery.validator.addMethod("mobile",function(value,element){
		var length = value.length;
		var mobile = /^1[358]\d{9}$/;
			return this.optional(element) || (length ==11 && mobile.test(value));
		},
		"手机格式错误"
	);

	jQuery.validator.addMethod("QQ",function(value,element){
		var qq = /^[1-9]\d{4,9}$/;
			return this.optional(element) || (qq.test(value));
		},
		"QQ号格式错误"
	);

	$("#resetMailForm").validate({
		errorContainer: "div.error",
		errorLabelContainer: $("#resetMail div.error"),
		wrapper: "li",
		rules:{
			email:{
				required:true,
				email:true
			}
		},
		messages:{
			email:"请输入一个正确的邮箱",
		},
		submitHandler:function(form) {
	      alert("修改成功！");
	      form.submit();
	    }		
	});
	$("#resetPasswordForm").validate({
		errorContainer: "div.error",
		errorLabelContainer: $("#resetPasswordForm div.error"),
		wrapper: "li",
		rules:{
			newPassword:{
				required:true,
				minlength:6,
				maxlength:25
			},
			confirm_password:{
				required:true,
				equalTo:"#newPassword"
			}
		},
		messages:{
			newPassword:{
				required:"请输入密码",
				minlength:"密码必须6到25字符之间",
				maxlength:"密码必须6到25字符之间"
			},
			confirm_password:{
				required:"请输入密码",
				equalTo:"两次密码输入不一致"
			},
		},
		submitHandler:function(form) {
	      alert("修改成功！");
	      form.submit();
	    }	
	});	
	$("#resetUserForm").validate({
		errorContainer: "div.error",
		errorLabelContainer: $("#resetUserForm div.error"),
		wrapper: "li",
		rules:{
			username:{
				required:true,
				minlength:6,
				maxlength:20
			},
			school:{
				required:true,
			},
			QQ:{
				required:true,
				QQ:true,
			},
			contactphoneNum:{
				required:true,
				mobile:true,
			}
		},
		messages:{
			username:{
				required:"请输入用户名",
				minlength:"用户名必须6到20字符之间",
				maxlength:"用户名必须6到20字符之间"
			},
			school:"请填入该信息",
		},
		submitHandler:function(form) {
	      alert("注册成功！");
	      form.submit();
	    }
	});
	
});
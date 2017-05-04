$(document).ready(function(){

	//bind submit to update textarea from ckeditor 
  //   $('#articleArea').submit(function(){
  //       $('textarea.ckeditor').each(function () {
  //          var $textarea = $(this);
  //          $textarea.val(CKEDITOR.instances[$textarea.attr('name')].getData());
  //       });
  //   });

	 // $('#articleArea').validate({
  //       rules: {
  //           article: {
  //               required: true,
  //           }
  //       },
  //       ignore: '',
  //       errorPlacement: function(error, element) {
  //           if (element.attr('name') == 'article') {
  //               error.insertAfter($(element).parent().children().last());
  //           } else {
  //               error.insertAfter(element);
  //           }
  //       }
  //   });

	$("#articleArea").validate({
		errorContainer: "div.error",
		errorLabelContainer: $("#articleArea div.error"),
		wrapper: "li",
		rules:{
			article:{
				required:true,
			},
		},
		messages:{
			article:{
				required:"作文内容不能为空",
			}
		},
		submitHandler:function(form) {
	      alert("提交成功！");
	      form.submit();
	    }
	});
});
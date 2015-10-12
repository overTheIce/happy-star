$(function() {
	var win_w = $(window).width();
	var win_h = $(window).height();
	/*侧导航*/
	$(window).scroll(function() {
		var H_top = $(document).scrollTop(),
			back_top = win_h;
		if (H_top >= back_top) {

			$(".nav-box").fadeIn(600);
		} else {
			$(".nav-box").fadeOut(100);
		}


	});
	/*关闭侧导航*/
	$('.logo-box').click(function() {
		$(".nav-box").hide();
	});
	if (win_w <= 1360) {
		$('.mode-2 .division .dian-box .mode-2-gifbox .static-box').css({
				'width':'800px',
				'margin-left':'-400px',
				'top':'-216px'
		});
		$('.mode-2 .division .dian-box').css('top', '54%');
		$(".nav-box").css('width', 0);
		$('.go-top').hide();
		$(".mode-2-gifbox .static-box .static-erweima").css('width', "95%");
	} else if(win_w > 1360){
		$('.mode-2 .division .dian-box').css('top', '52%');
		$('body').css('min-width', '1500px');
		$(".mode-2-gifbox .static-box ").css({
			'top': '-368px',
			'margin-left': '-562px'
		});
		$(".mode-2-gifbox .static-box .static-erweima").css('width', '115%');
	}
	/*返回顶部*/
	$(".top-txt").click(function(event) {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	/*回顾城市切换*/
	$(".citybox-ul li").each(function(index) {
		var num = index + 1;
		$(this).click(function() {
			$(this).addClass('current-city').siblings().removeClass('current-city');
			$(".list-" + num).show().siblings('.mode4-cont-box').hide();

		});
	});

	function checkName() {
		var name1 = $("#name").val();
		name = $.trim(name1);
		if (name === '' || name === "姓名不能为空" || name === "请不要输入空格") {
			$("#name").addClass('error').val("姓名不能为空");
			return false;
		} else {
			$("#name").removeClass('error');
			return true;
		};

	};

	function checkPhone() {
		var phone1 = $("#phone").val();
		var telStr = /^((0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8})$/;
		phone = $.trim(phone1);
		if (phone === '' || !telStr.test(phone) || phone === '请不要输入空格哦') {
			$("#phone").addClass('error').val("请填写正确的手机号码");
			return false;
		} else {
			$("#phone").removeClass('error');
			return true;
		};
	};

	function Myclass() {
		var class1 = $("#class").val();
		_class = $.trim(class1);
		if (_class === '' || _class === "年级不能为空" || _class === "请不要输入空格") {
			$("#class").addClass('error').val("年级不能为空");
			return false;
		} else {
			$("#class").removeClass('error');
			return true;
		};
	};



	function checkSchool() {
		var school1 = $("#school").val();
		_school = $.trim(school1);
		if (_school === '' || _school === "学校名称不能为空" || _school === "请不要输入空格") {
			$("#school").addClass('error').val("学校名称不能为空");
			return false;
		} else {
			$("#school").removeClass('error');
			return true;
		};
	};
	/*
		function checkEmail() {
			email = $('#email').val();
			var telStr = /^[a-z0-9](\w|\.|-)*@([a-z0-9]+-?[a-z0-9]+\.){1,3}[a-z]{2,4}$/;
			if (email === '' || email === '邮箱不能为空') {
				$('#email').val("邮箱不能为空").addClass("error");
				return false;
			} else if (!telStr.test(email)) {
				$('#email').val('请输入正确的邮箱地址').addClass('error');
				return false;
			} else {
				$('#email').removeClass("error");
				return true;
			};
		}*/

	function checkQQ() {
		var $input = $("#qq");
		var emailReg = /^[1-9]\d{4,10}$/;
		var _val = $.trim($input.val());
		if (emailReg === '' || emailReg === 'QQ账号不能为空') {
			$("#qq").val("QQ账号不能为空").addClass("error");
			return false;
		} else if (!emailReg.test(_val)) {
			$("#qq").val('请输入正确的QQ账号').addClass('error');
			return false;
		} else {
			$("#qq").removeClass("error");
			return true;
		};

	}

	$("input.phone").blur(function() {
		checkPhone()
	});

	$("input.name").blur(function() {
		checkName()
	});
	$("input.class").blur(function() {
		Myclass()
	});

	$("input.school").blur(function() {
		checkSchool()
	});
	$("input.qq").blur(function() {
		checkQQ()
	});

	$("#name,#phone,#class,#sex,#professional,#school,#qq,#email").click(function(event) {
		$(this).focus().select();
	});

	/*滚动到相应位置*/
	$(".nav-list-box li").click(function() {
		$('body,html').animate({
			"scrollTop": $(".scroll-web1").eq($(this).index()).offset().top - 10
		}, 700);

	});


});
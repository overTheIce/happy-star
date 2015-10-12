$(function() {
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
	$("body .mode2-content").find('li').each(function(index) {
		$('.slider-5 .detail-slide-list').hide();
		$(".slider-" + index).hover(function() {
			$(this).addClass('add-width').siblings('li').removeClass('add-width');
			$(this).children('.detail-slide-list').fadeOut(100).parent().siblings().children('.detail-slide-list').fadeIn(100);
			$(this).parent().parent().parent().css('background', 'url(./img/bg-' + index + '.jpg) center no-repeat');
		});
	});
	/*返回顶部*/
	$(".go-top").click(function(event) {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	/*滚动到相应位置*/
	$(".nav-box .click-scroll").click(function() {
		$('body,html').animate({
			"scrollTop": $(".scroll-web1").eq($(this).index()).offset().top - 40
		}, 700);

	});
});
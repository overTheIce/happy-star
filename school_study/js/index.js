// JavaScript Document

$(function(){
			$('.po').live("click",function(){
				
				$(this).find('.ss-tc').show();
				$(this).addClass("aa").siblings('.po').addClass("bb");
                },function(){
                 $(this).find('.ss-tc').hide();
				$(this).removeClass("aa").siblings('.po').removeClass("bb");
				});
						 
				//输入字数
	 		$('#num').on("keyup",function(){
					var num = $("#num").val().length;
					var nowNum = 80-num;
					if(nowNum <= 0){
							$('#lase').html(0);
							
							$('#lase').css({"color":"red","font-size":"20px"});
							$("#num").val($('#num').val().substring(0,80));
						}else{
							$('#lase').html(nowNum);
							
							$('#lase').css({"color":"#ffad01","font-size":"14px"});
						}
						
				});
			 		var num = $("#num").val().length;
					var nowNum = 80-num;
					$('#lase').html(nowNum);
	           
			   //效果
			   $('.up').on("click",function(){
				   $('#img').addClass('xiaoguo');
	/*			   	$('#img').animate({"left":0, "top":"0px","width":"110px", "height":"109px", "opacity":0,"filter":"alpha(opacity=0)"},200);
					$('#img').animate({"left":"-633px", "top":"107px","width":"85px", "height":"85px", "opacity":"1","filter":"alpha(opacity=100)","box-shadow":"0 0 1000px red"},500);*/
					
					//alert(11);
					setTimeout(function(){
						$('.s06 .ss-tc').fadeIn(500);
					}, 100);
				   });
						
					
						 
		});
//placehloder
var plarr = new Array,
	input = document.getElementsByTagName("input"),
	len;
/**
 * 解决某些浏览器，如IE7，刷新后表单值不重置的问题
 * @return none
 */
window.onload = function () {
	for (var i = 0; i < input.length; i++)
		if (input[i].className.indexOf("pltxt") != -1) {
			input[i].value = "";
			input[i].blur();
		}
}

/**
 * 找到全部带有类名为cName的类
 * @param  {string} cName classname,类名
 * @param  {dom} 	node  dom节点
 * @return none
 */
function getClassAll(cName, node) {
	if (!node) {
		node = document.body;
		len = 0;
		plarr.length = 0;
	}
	if (node.className.indexOf(cName) != -1) {
		plarr[len++] = node;
	}
	for (var i = 0; i < node.children.length; i++)
		getClassAll(cName, node.children[i]);
}

/**
 * placeholder初始化函数
 * @return none
 */
function placeholder() {
	getClassAll("pl-wrap"); // 搜索全部的pl-wrap父节点
	for (var i = 0; i < plarr.length; i++) {
		plarr[i].onclick = function (evt) {
			var that = this;
			that.children[0].focus();
			that.children[0].onblur = function () {
				if (this.value == "") that.children[1].style.display = "inline";
			};
			that.children[1].style.display = "none";
		};
	}
}
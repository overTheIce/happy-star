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

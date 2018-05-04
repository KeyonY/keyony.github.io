// 通过地址栏获取当前所选的tags分类
var tags = {
	getTagName: function(){
		var url = window.location.href;
		var matchTag = new RegExp(/\w+\/$/);
		url = url.match(/\w+\/$/)[0];
		url = url.substring(0,url.length-1);
		return url;
	},
	findTag: function(){
		var tagName = this.getTagName();
		$('.tags_ul').children('li').each(function(i,e){
			if($(e).children('a').text() == tagName){
				$(e).addClass('active');
				return false;
			}
		})
	},
	run: function(){
		this.findTag();
	}
}
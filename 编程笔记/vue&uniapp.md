- 将滚动条置顶
  - window.scrollTo(0,0);

- uniapp 获取元素信息(如:高度,宽度)
  - 
let info = uni.createSelectorQuery().select(".listHeader");
	// .listHeader: 是元素的类名,也可以是id
info.boundingClientRect(function(data) { //data - 各种参数
    console.log(data.height)  // 获取元素宽度
}).exec()
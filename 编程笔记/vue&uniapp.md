- ���������ö�
  - window.scrollTo(0,0);

- uniapp ��ȡԪ����Ϣ(��:�߶�,���)
  - 
let info = uni.createSelectorQuery().select(".listHeader");
	// .listHeader: ��Ԫ�ص�����,Ҳ������id
info.boundingClientRect(function(data) { //data - ���ֲ���
    console.log(data.height)  // ��ȡԪ�ؿ��
}).exec()
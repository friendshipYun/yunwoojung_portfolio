// //전역 스크롤 애니메이션
// var controller = new ScrollMagic.Controller({
// 	globalSceneOptions: {
// 		triggerHook: 'onLeave',
// 		duration: "100%"
// 	}
// });

// //특정 영역 스크롤 애니메이션
// var controller = new ScrollMagic.Controller({
// 	container: '#container'	//body 스크롤이 아닌, 컨테이너 내부 스크롤 컨트롤	
// });

//참고사이트
//https://www.biew.co.kr/entry/ScrollMagic-%EC%8A%A4%ED%81%AC%EB%A1%A4%EB%A7%A4%EC%A7%81-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EC%8B%A4%EB%AC%B4-%EC%9D%91%EC%9A%A9-%EC%98%88%EC%A0%9C-%EB%A7%88%EC%A7%80%EB%A7%89-%ED%8E%B8




function eduPopOpen() {
    $('.edu_popup').show();
}
function eduPopClose() {
    $('.edu_popup').hide();
}
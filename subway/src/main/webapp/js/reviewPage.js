function reviewWrite() {
	let reviewList = JSON.parse(sessionStorage.getItem('reviewList'));
	if(reviewList == null) reviewList = [] // 쿠키가 없으면 빈배열 생성
	
	
	let no = reviewList.length == 0 ? 1 : reviewList[reviewList.length-1].no+1;
	let inputName = document.querySelector('.inputName');
	let oneReview = document.querySelector('.oneReview');
	let stars = document.querySelector('.stars');
	let menuSelect = document.querySelector('.menuSelect');
	
	let year = new Date().getFullYear();
	let month = new Date().getMonth();
	if(month < 10){ 
		month = '0'+month;
	}
	let day = new Date().getDate();
	
	let review = {no : no, name : inputName.value, content : oneReview.value, star: stars.value, 
	time : `${year}-${month}-${day}`, menu : menuSelect.value};
	
	reviewList.push(review);
	
	sessionStorage.setItem('reviewList', JSON.stringify(reviewList));
	
	alert('등록이 완료되었습니다.');
	location.href="../mainPage.jsp";
}
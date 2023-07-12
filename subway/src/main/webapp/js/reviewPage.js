function reviewWrite() {
	let reviewList = JSON.parse(sessionStorage.getItem('reviewList'));
	if(reviewList == null) reviewList = [
		{no : 1, name : '찬희', content : '에그마요 맛있네요', star: 4, 
		time : `2023-07-10`, menu : '에그마요 샌드위치'},
		{no : 2, name : '민재', content : '서브웨이 최고', star: 5, 
		time : `2023-07-11`, menu : '햄 샐러드'},
		{no : 3, name : '예지', content : '제 취향은 아니네요', star: 2, 
		time : `2023-07-11`, menu : '참치 샌드위치'},
		{no : 4, name : '성호', content : '야채 냠냠', star: 3, 
		time : `2023-07-12`, menu : '비엘티 샐러드'}
	] // 쿠키가 없으면 빈배열 생성
	
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
// 편도 -- 신예지









// 왕복 -- 신예지









// 좌석 -- 김찬희











// 예매 -- 이성호











// 상세 -- 이성호









// 예매확인 -- 박민재
예매확인()
function 예매확인(){
	
	
	let t_collect3 = document.querySelector('.t_collect3')
	let collect3 = `<div>${티켓.출발지} </div> <span> -> </span> <div> ${티겟.도착지} </div>`
	
	let t_collect4 = document.querySelector('.t_collect4')
	let collect4 = `<div> 일자 ${티켓.일자} </div> <div> 연령 </div>` 
	
	let t_collect5 = document.querySelector('.t_collect5')
	let t_collect6 = document.querySelector('.t_collect6')
	
	
	
	t_collect3.innerHTML(collect3)
}

function 정기권(){
	alert('확인된 정기권이 없습니다.')
	예매확인()
}




// 수정 -- 김찬희









// 환불 -- 박민재
function 환불(){
		
	document.querySelector('.t_collect3').innerHTML = `<h3 class = "none_ticket">선택된 도착지 없음</h3>`
	document.querySelector('.t_collect4').innerHTML = `<h3 class = "none_ticket">선택된 일자, 인원 없음</h3>`
	document.querySelector('.t_collect5').innerHTML = `<h3 class = "none_ticket">선택된 좌석 없음</h3>`
	document.querySelector('.t_collect6').innerHTML = `<h3 class = "none_ticket">선택된 승차권 없음</h3>`
	document.querySelector('.t_collect7').innerHTML = `<h3 class = "none_ticket">선택된 승차권 없음<h3>`
	alert('승차권이 취소되었습니다.')
}








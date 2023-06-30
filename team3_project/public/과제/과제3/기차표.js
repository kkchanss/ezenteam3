// 편도 -- 신예지









// 왕복 -- 신예지










// 좌석선택 -- 김찬희

let 티켓리스트 = [];
let 티켓 = { 좌석 : 1 };

function 좌석선택(index) {
	
}



// 좌석 -- 김찬희



function 좌석(){
	
	let seat = document.querySelector('.seat');
	let lists = "";
	
	
	for(let i = 1; i<=28; i++) {
		lists+=`<button class="seat${i} onclick="좌석선택(${i})">${i}</button>`;
		if(i % 7 == 0) lists+="<br/>";
		if(i % 14 == 0) lists+="<br/>";
	}
	
	seat.innerHTML = lists;

	for(let i = 0; i < 티켓리스트.length; i++) {
		let seats = 티켓리스트[i].티켓; 
		document.querySelector(`.seat${seats}`).style=`color: #406596; background-color: white;`;
	}	
	
}









// 예매 -- 이성호











// 상세 -- 이성호









// 예매확인 -- 박민재








// 수정 -- 김찬희









// 환불 -- 박민재










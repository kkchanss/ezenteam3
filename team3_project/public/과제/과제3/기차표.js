
console.log ('JS 실행')

let 티켓리스트 = [ ];
let 도착지 = [ ];

// 가격 계산표 
/*
	연령 
		x1 성인
		x0.8 청소년
		x0.5 어린이
	
	도착지 
		안산 -> 대전 : 15000
		안산 -> 대구 : 25000
		안산 -> 부산 : 35000		
	
*/

// 샘플 
티켓리스트.push( { 휴대폰번호 : '010-4567-7897', 연령 : '성인' , 도착지 : '대전' , 일자 : '2023-06-14/17:47' , 좌석 : 3   } ); // 성인 
티켓리스트.push( { 휴대폰번호 : '010-5575-7897', 연령 : '청소년' , 도착지 : '대구' , 일자 : '2023-06-14/17:47' , 좌석 : 11   } ); // 청소년 
티켓리스트.push( { 휴대폰번호 : '010-2246-7897', 연령 : '어린이' , 도착지 : '대구' , 일자 : '2023-06-14/17:47' , 좌석 : 10   } ); // 어린이 
티켓리스트.push( { 휴대폰번호 : '010-8686-7897', 연령 : '성인' , 도착지 : '부산' , 일자 : '2023-06-14/17:47' , 좌석 : 15  } ); // 성인 


편도()
예약자()



// 편도 -- 신예지

function 편도(){
	
	
	// 어디에 출력 할것인지
	let booking_info = document.querySelector('.booking_info')

	// HTML 선언
	let HTML = `<div> 
					<div class="t_booking1">
						<div> 
						<h4> 안산 </h4>
						</div>
						<div> 
							<ul>
								<li> → </li>
							</ul>
						</div>
						<div> 
						 	<select class="destination"> 
							  	<option> 대전 </option>
							  	<option> 대구 </option>
							  	<option> 부산 </option>
							</select>	
						</div>
					</div>
					<div>
						<div>
								일자 </br>
								<input class="date" type="date">
								<input class="time" type="time">
						</div>
						<div>
							<select class="destination"> 
						  	<option> 성인 </option>
						  	<option> 청소년 </option>
						  	<option> 어린이 </option>
							</select>
						</div>
					</div>
				</div>`;			

	// HTML 넣어주기
	booking_info.innerHTML = HTML;
}


// 왕복 -- 신예지

function 왕복(){
	
	// 어디에 출력 할것인지
	let booking_info = document.querySelector('.booking_info')
	
	// HTML 선언
	let HTML = `<div> 
					<div class="t_booking1">
						<div> 
						<h4> 안산 </h4>
						</div>
						<div> 
							<ul>
								<li> → </li>
								<li> ← </li>
							</ul>
						</div>
						<div> 
						 	<select class="destination"> 
							  	<option> 대전 </option>
							  	<option> 대구 </option>
							  	<option> 부산 </option>
							</select>	
						</div>
					</div>
					<div>
						<div>
								일자 </br>
								<input class="date" type="date">
								<input class="time" type="time">
						</div>
						<div>
							<select class="destination"> 
						  	<option> 성인 </option>
						  	<option> 청소년 </option>
						  	<option> 어린이 </option>
							</select>
						</div>
					</div>
				</div>`;	

	// HTML 넣어주기
	booking_info.innerHTML = HTML;
	
}







// 좌석선택 -- 김찬희

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








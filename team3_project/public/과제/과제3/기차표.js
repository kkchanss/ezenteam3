
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
티켓리스트.push( { 가격 : 15000 , 도착지 : '대전' , 일자 : '2023-06-14/17:47' , 좌석 : 3   } ); // 성인 
티켓리스트.push( { 가격 : 0.8*25000 , 도착지 : '대구' , 일자 : '2023-06-14/17:47' , 좌석 : 11   } ); // 청소년 
티켓리스트.push( { 가격 : 0.5*25000 , 도착지 : '대구' , 일자 : '2023-06-14/17:47' , 좌석 : 10   } ); // 어린이 
티켓리스트.push( { 가격 : 35000 , 도착지 : '부산' , 일자 : '2023-06-14/17:47' , 좌석 : 15  } ); // 성인 


// 편도 -- 신예지

편도()

function 예약자(){
	
}





function 편도(){
	
	console.log( document.querySelector('.date').value );
	console.log( document.querySelector('.time').value );
	
		
	
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






// 좌석 -- 김찬희











// 예매 -- 이성호











// 상세 -- 이성호









// 예매확인 -- 박민재








// 수정 -- 김찬희









// 환불 -- 박민재










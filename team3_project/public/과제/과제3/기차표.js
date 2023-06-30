

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
						 	<select class="destination1"> 
							  	<option> 대전 </option>
							  	<option> 대구 </option>
							  	<option> 부산 </option>
							</select>	
						</div>
					</div>
					<div class="t_booking2">
						<div class="date_div">
							<div>
								<span> 일자 </span> </br>
							</div>
							<div>
								<input class="date" type="date">
								<input class="time" type="time">
							</div>
						</div>
						<div>
							연령 </br>
							<select class="destination2"> 
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
	let HTML =`<div> 
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
						 	<select class="destination1"> 
							  	<option> 대전 </option>
							  	<option> 대구 </option>
							  	<option> 부산 </option>
							</select>	
						</div>
					</div>
					<div class="t_booking2">
						<div class="date_div">
							<div>
								<span> 일자 </span> </br>
							</div>
							<div>
								<input class="date" type="date">
								<input class="time" type="time">
							</div>
						</div>
						<div>
							연령 </br>
							<select class="destination2"> 
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
		let seats = 티켓리스트[i].좌석; 
		document.querySelector(`.seat${seats}`).style=`color: #406596; background-color: white;`;
	}	
	console.log('티켓리스트[0].좌석: ' + 티켓리스트[0].좌석);
}

// 좌석선택 -- 김찬희

function 좌석선택(phone, seatNum) {
	
	for(let i = 0; i < 티켓리스트.length; i++) {
		let seats = 티켓리스트[i].좌석; 
		if(seatNum == seats) {
			alert('이미 있는 좌석입니다. 다른 곳을 선택해주시길 바랍니다.');
			return;
		}
	}
	
	for(let i = 0; i < 티켓리스트.length; i++) {
			
	}
	티켓리스트[티켓리스트.indexOf(phone)].좌석 = index;
	
	좌석();
	
}







// 예매 -- 이성호
function 예매(){
	
	// 1. 입력 : 연령 , 날짜 , 시간 , 좌석 , 도착지
	// 2.작업된 정보 : 가격( 연령 와 도착지) , 일자( 날짜 와 시간 )  
	let destination = document.querySelector('.destination').Value; 
	let date = document.querySelector('.date').Value;
	let time = document.querySelector('.time').Value;
	
	let 티켓 = {
			연령 : destination,
			날짜 : date,
			시간 : time,
			좌석 : seat,
			도착지 : destination 
			}				
							console.log('티켓');
	티켓리스트.push(티켓);		console.log('티켓리스트');
	
	상세();
}










// 상세 -- 이성호
function 상세() {
	// 1.
	
}









// 예매확인 -- 박민재

function 예매확인(  ){
	
	let phone = prompt('핸드폰 번호를 입력해주세요');
	let num = 0;
	let t = 11111;
	for( i = 0; i<티켓리스트.length ; i++){//for 시작
		if( 티켓리스트[i].휴대폰번호 == phone ){//if 시작
			num = 1; 
			t = i; break;
		}
	}//for 끝
	if(num == 0) {
		alert('일치하는 게 없')
		return;
	}
	console.log(t)
	let t_collect3 = document.querySelector('.t_collect3')
	let collect3 = `<div>안산</div> <div> -> </div> <div> ${티켓리스트[t].도착지} </div>`
	
	let t_collect4 = document.querySelector('.t_collect4')
	let collect4 = `<div> 일자 <br/> ${티켓리스트[t].일자} </div> <div> 연령 <br/> ${티켓리스트[t].연령} </div>` 
	
	let t_collect5 = document.querySelector('.t_collect5')
	let collect5 = `<div> 좌석 <br/> ${티켓리스트[t].좌석} </div> <div> 타는곳 <br/> 탑승구05 </div>` 
	
	let t_collect6 = document.querySelector('.t_collect6')
	let collect6 = `<div> 호차번호 <br/> 5호차 </div> <div>큐알코드</div>`
	
	t_collect3.innerHTML = collect3
	t_collect4.innerHTML = collect4
	t_collect5.innerHTML = collect5
	t_collect6.innerHTML = collect6 
	
}//함수 끝  
	
	


function 정기권(){
	alert('확인된 정기권이 없습니다.')
	예매확인()
}




// 수정 -- 김찬희

function 수정(phone) {
	
	let 일자 = 티켓리스트[티켓리스트.indexOf(phone)].일자;
	let 좌석 = 티켓리스트[티켓리스트.indexOf(phone)].좌석;
	
}

function 수정완료(phone) {
	
	let 일자In = document.querySelector('.일자In').value;
	let 좌석In = document.querySelector('.좌석In').value;
	
	티켓리스트[티켓리스트.indexOf(phone)].일자 = 일자In;
	티켓리스트[티켓리스트.indexOf(phone)].좌석 = 좌석In;
	
	alert('변경 완료되었습니다.')
	
}







// 환불 -- 박민재
function 환불(){
	
	let phone = prompt("핸드폰 번호를 입력해주세요")
	
	if( 티켓리스트[티켓리스트.indexOf(핸드폰번호)] == phone){
	
	document.querySelector('.t_collect3').innerHTML = `<h3 class = "none_ticket">선택된 도착지 없음</h3>`
	document.querySelector('.t_collect4').innerHTML = `<h3 class = "none_ticket">선택된 일자, 인원 없음</h3>`
	document.querySelector('.t_collect5').innerHTML = `<h3 class = "none_ticket">선택된 좌석 없음</h3>`
	document.querySelector('.t_collect6').innerHTML = `<h3 class = "none_ticket">선택된 승차권 없음</h3>`
	document.querySelector('.t_collect7').innerHTML = `<h3 class = "none_ticket">선택된 승차권 없음<h3>`
	alert('승차권이 취소되었습니다.')}
	
	else{alert("핸드폰번호가 틀립니다."); return; }
}








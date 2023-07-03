

let 티켓리스트 = [ ];
let 도착지 = [ ];
let 좌석번호 = 0;
let 폰넘버 ="";
let t = 0;
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
티켓리스트.push( { 휴대폰번호 : '01045677897', 연령 : '성인' , 도착지 : '대전' , 일자 : '2023-06-14/17:47' , 좌석 : 3   } ); // 성인 
티켓리스트.push( { 휴대폰번호 : '01055757897', 연령 : '청소년' , 도착지 : '대구' , 일자 : '2023-06-14/17:47' , 좌석 : 11   } ); // 청소년 
티켓리스트.push( { 휴대폰번호 : '01022467897', 연령 : '어린이' , 도착지 : '대구' , 일자 : '2023-06-14/17:47' , 좌석 : 10   } ); // 어린이 
티켓리스트.push( { 휴대폰번호 : '01086867897', 연령 : '성인' , 도착지 : '부산' , 일자 : '2023-06-14/17:47' , 좌석 : 15  } ); // 성인 


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
								<h4> 일자 </h4> </br>
							</div>
							<div>
								<input class="date" type="date">
								<input class="time" type="time">
							</div>
						</div>
						<div>
							<h4> 연령 </h4> </br>
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
								<h4> 일자 </h4> </br>
							</div>
							<div>
								<input class="date" type="date">
								<input class="time" type="time">
							</div>
						</div>
						<div>
							<h4> 연령 </h4> </br>
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
		lists+=`<button class="seat${i}" onclick="좌석선택(${i})">${i}</button>`;
		if(i % 7 == 0) lists+="<br/>";
		if(i % 14 == 0) lists+="<br/>";
	}
	
	seat.innerHTML = lists;
	
	
	for(let i = 0; i < 티켓리스트.length; i++) {
		let seats = 티켓리스트[i].좌석; 
		document.querySelector(`.seat${seats}`).style=`color: #282828; background-color: #282828;`;
	}	
}

// 좌석선택 -- 김찬희

// 좌석선택 -- 김찬희

function 좌석선택(seatNum) {
	
	for(let i = 0; i < 티켓리스트.length; i++) {
		let seats = 티켓리스트[i].좌석; 
		if(seatNum == seats) {
			alert('이미 있는 좌석입니다. 다른 곳을 선택해주시길 바랍니다.');
			return;
		}
	}
	
	좌석번호 = seatNum;
	
	좌석();
	
}







// 예매 -- 이성호
function 예매(){	console.log('예매함수 실행')
	
	
	
	// 1. 입력 가져오기
	let phone_input = document.querySelector('.phone_input').value;	console.log( phone_input );
	let destination1 = document.querySelector('.destination1').value; console.log( destination1 );
	let destination2 = document.querySelector('.destination2').value;  console.log( destination2 );
	let date = document.querySelector('.date').value; console.log( date );
	let time = document.querySelector('.time').value; console.log( time );
	
	if(phone_input == "" || destination1 == "" || destination2 == "" || date == "" || time == "") {
		alert('모든 정보를 입력해주시길 바랍니다.');
		return;
	}
	
	for(let i = 0; i < 티켓리스트.length; i++) {
		if(phone_input == 티켓리스트[i].휴대폰번호) {
			alert('이미 예매한 티켓이 있는 번호입니다.');
			return;
		}
	}
	if(좌석번호 == 0 ) { 
		let duplicate = 0;
		while(true) {
			
			좌석번호 = parseInt(Math.random()*28);
			for(let i = 0; i < 티켓리스트.length; i++) {
				if(티켓리스트[i].좌석 == 좌석번호) {
					duplicate = 1
				}
			}
			if(duplicate == 0) break;
			duplicate = 0;
		}
		
	}
	//2. 객체 만들기
	let 티켓 = { 휴대폰번호 : phone_input, 연령 : destination2 , 도착지 : destination1 , 
			일자 : date+'/'+time , 좌석 : 좌석번호  }
			
			console.log( 티켓 );
	
	// 3. 배열에 저장 [ 티켓리스트에 티켓 저장 ]
	티켓리스트.push( 티켓 ); console.log( 티켓리스트 );
	좌석번호 = 0;
	좌석()
	상세()
}








// 상세 -- 이성호
function 상세() { console.log('상세함수 실행')
	
	let phone_input = document.querySelector('.phone_input').value;
	
	for(i=0; i<티켓리스트.length ; i++){
		
		if(티켓리스트[i].휴대폰번호 == phone_input ){
			break;
		}
	}
	
	// 1. 어디에 출력할건지?? 선택승차권에
	let confirm = document.querySelector('.confirm'); console.log(confirm);
	
	
	
	//2.객체 만든걸 출력한다(도착역, 일자, 인원)
	
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
	// let price = 
	let confirmTicket = ` 
		<h3>선택 승차권 확인</h3>
		<div class="confirm_info"> <div>안산 -> ${티켓리스트[i].도착지} </div>	<div> ${티켓리스트[i].일자} </div>	<div> ${티켓리스트[i].연령} 1명 </div> </div> 
						` 
	
	
	confirm.innerHTML=confirmTicket;
	
	
	
	
}









// 예매확인 -- 박민재

function 예매확인(  ){//예매 확인 함수 시작
	
	let phone = prompt('핸드폰 번호를 입력해주세요( - (구분선)제외 )');//핸드폰 번호 입력 받기
	let num = 0;
	let t = 0;
	for( i = 0; i<티켓리스트.length ; i++){//for 시작 
		if( 티켓리스트[i].휴대폰번호 == phone ){//if 시작 // 핸드폰 번호 일치 검사
			num = 1; 
			폰넘버 = phone;
			t = i;
			폰넘버 = phone ; break; // 일치하면 폰넘버 배열에 저장하고 예매내역 출력
		}//if 끝
	}//for 끝
	if(num == 0) {//틀렸을때 if 문 시작
		alert('없는 휴대폰 번호입니다.') // 일치하지 않으면 알림
		return;
	}//if 문 끝
	
	let t_collect3 = document.querySelector('.t_collect3') // 안산->도착지 저장
	let collect3 = `<h4>안산</h4> <div> → </div> <h4> ${티켓리스트[t].도착지} </h4>`
	
	let t_collect4 = document.querySelector('.t_collect4')//티켓 일자와 연령대 저장
	let collect4 = `<div> <h4> 일자 </h4> <div> ${티켓리스트[t].일자} </div> </div> <div> <h4> 연령 </h4> <div> ${티켓리스트[t].연령} </div> </div>` 
	
	let t_collect5 = document.querySelector('.t_collect5')//좌석 번호와 탑승구 저장
	let collect5 = `<div> <h4> 좌석 </h4> <div> ${티켓리스트[t].좌석} </div> </div>  <div> <h4>  타는곳 </h4> <div> 탑승구05 </div> </div> ` 
	
	let t_collect6 = document.querySelector('.t_collect6') // 호차 번호와 큐알코드 저장 //큐알코드 텍스트는 임시입니다!
	let collect6 = `<div> <h4> 호차번호 </h4> <div> 5호차 </div> </div> <div>큐알코드</div>`
	
	let ticketNumber1 = parseInt(Math.random()*99999+1000)
	let ticketNumber2 = parseInt(Math.random()*99999+1000)
	let ticketNumber3 = parseInt(Math.random()*99999+1000)
	let ticketNumber4 = parseInt(Math.random()*99999+1000)//승차권 번호 생성 //1000단위부터 10000단위까지 무작위 생성
	
	let t_collect7 = document.querySelector('.t_collect7')
	let collect7 = `<h3> 승차권 번호 </h3> 
					<div> ${ticketNumber1}-${ticketNumber2}-${ticketNumber3}-${ticketNumber4} </div>`//승차권 번호 저장
	
	t_collect3.innerHTML = collect3// 안산->도착지 출력
	t_collect4.innerHTML = collect4//티켓 일자와 연령대 출력
	t_collect5.innerHTML = collect5//좌석 번호와 탑승구 출력
	t_collect6.innerHTML = collect6 // 호차 번호와 큐알코드 출력
	t_collect7.innerHTML = collect7//승차권 번호 출력
}// 예매확인 함수 끝  
	
	


function 정기권(){//정기권 클릭하면 알림만 띄움
	
	alert('확인된 정기권이 없습니다.')
	
}




// 수정 -- 김찬희

function 수정() {
	let phone = prompt('휴대번호를 입력해주세요.');
	if( 폰넘버 != phone ){//if 시작
		alert('맞지 않습니다.');
		return;
	}
		
	for( i = 0; i<티켓리스트.length ; i++){//for 시작
		if(티켓리스트[i].휴대폰번호 == phone) t = i;
	}//for 끝
		
	let 일자 = 티켓리스트[t].일자;
	let 좌석 = 티켓리스트[t].좌석;
	
	let t_collect3 = document.querySelector('.t_collect3')
	let collect3 = `<h4>안산</h4> <div> → </div> <h4> ${티켓리스트[t].도착지} </h4>`
	
	let t_collect4 = document.querySelector('.t_collect4')
	let collect4 = `<h4> 일자 </h4> <div> <input class="일자In" type="text" value="${티켓리스트[t].일자}"/> </div> <h4> 연령 </h4> <div> ${티켓리스트[t].연령} </div>` 
	
	let t_collect5 = document.querySelector('.t_collect5')
	let collect5 = `<h4> 좌석 </h4> <div> <input class="좌석In" type="text" value="${티켓리스트[t].좌석}"/> </div> <h4> 타는곳 </h4> <div> 탑승구05 </div>` 
	
	let t_collect6 = document.querySelector('.t_collect6')
	let collect6 = `<h4> 호차번호 </h4> <div> 5호차 </div> <div>큐알코드</div>`
	
	let t_modify_space = document.querySelector('.modify_space');
	let modify_space = `<button class="modify_btn" onclick="수정완료(t)" >변경 완료</button>
					<button class="delete_btn" onclick="환불()" >반환</button>`;
	
	t_collect3.innerHTML = collect3;
	t_collect4.innerHTML = collect4;
	t_collect5.innerHTML = collect5;
	t_collect6.innerHTML = collect6;
	t_modify_space.innerHTML = modify_space;
	
}

function 수정완료(t) {
	
	let 일자In = document.querySelector('.일자In').value;
	let 좌석In = document.querySelector('.좌석In').value;
	
	if(좌석In == '') {
		alert('좌석을 선택해주시길 바랍니다')
		return;
	}
	
	if(parseInt(좌석In)<1||parseInt(좌석In)>28) {
		alert('알맞은 좌석을 선택해주시길 바랍니다.')
		return;
	}
	
	for(let i = 0; i < 티켓리스트.length; i++) {
		if(parseInt(좌석In)==티켓리스트[i].좌석) {
			if(티켓리스트[t].좌석 != parseInt(좌석In)) {
				alert('이미 예매되어 있는 좌석입니다. 다른 좌석을 선택해주시길 바랍니다.')
				return;
			}
		}
	}
	
	for(let i = 0; i<티켓리스트.length ; i++){//for 시작
		if(티켓리스트[i].phone == 폰넘버) t = i;
	}//for 끝
	
	티켓리스트[t].일자 = 일자In;
	티켓리스트[t].좌석 = 좌석In;
	
	alert('변경 완료되었습니다.')
	
	let t_collect3 = document.querySelector('.t_collect3') // 안산->도착지 저장
	let collect3 = `<div>안산</div> <div> → </div> <div> ${티켓리스트[t].도착지} </div>`	
	
	let t_collect4 = document.querySelector('.t_collect4')//티켓 일자와 연령대 저장
	let collect4 = `<div> 일자 <br/> ${티켓리스트[t].일자} </div> <div> 연령 <br/> ${티켓리스트[t].연령} </div>` 
	
	let t_collect5 = document.querySelector('.t_collect5')//좌석 번호와 탑승구 저장
	let collect5 = `<div> 좌석 <br/> ${티켓리스트[t].좌석} </div> <div> 타는곳 <br/> 탑승구05 </div>` 
	
	let t_collect6 = document.querySelector('.t_collect6') // 호차 번호와 큐알코드 저장 //큐알코드 텍스트는 임시입니다!
	let collect6 = `<div> 호차번호 <br/> 5호차 </div> <div>큐알코드</div>`
	
	let ticketNumber1 = parseInt(Math.random()*99999+1000)
	let ticketNumber2 = parseInt(Math.random()*99999+1000)
	let ticketNumber3 = parseInt(Math.random()*99999+1000)
	let ticketNumber4 = parseInt(Math.random()*99999+1000)//승차권 번호 생성 //1000단위부터 10000단위까지 무작위 생성
	
	let t_collect7 = document.querySelector('.t_collect7')
	let collect7 = `<h3> 승차권 번호 </h3> 
					<div> ${ticketNumber1}-${ticketNumber2}-${ticketNumber3}-${ticketNumber4} </div>`//승차권 번호 저장
	
	t_collect3.innerHTML = collect3// 안산->도착지 출력
	t_collect4.innerHTML = collect4//티켓 일자와 연령대 출력
	t_collect5.innerHTML = collect5//좌석 번호와 탑승구 출력
	t_collect6.innerHTML = collect6 // 호차 번호와 큐알코드 출력
	t_collect7.innerHTML = collect7//승차권 번호 출력
	
	좌석()
}







// 환불 -- 박민재
function 환불(){//환불 함수 시작
	
	
	let phone = prompt("핸드폰 번호를 입력해주세요( - (구분선)제외 )") //입력받은 핸드폰 번호 값 저장
	
	let num = 0;
	
	if( 폰넘버 == phone ){//if 시작 //예매확인에서 입력한 번호와 같다면 승차권 취소
		num = 1; 
		
	}
	if(num == 0) {
		alert('휴대폰 번호가 일치하지 않습니다.')//번호가 같지 않다면 알림
		return;
	}
	for(i = 0 ; i < 티켓리스트.length ; i++ ){
		if(티켓리스트[i].휴대폰번호 == phone ) {break;}
	}
	티켓리스트.splice( i , 1);
	//취소된 승차권 화면 표시는 ( -- )
	document.querySelector('.t_collect3').innerHTML = `<div> -- </div> <div> → </div> <div> -- </div>`
	document.querySelector('.t_collect4').innerHTML = `<div> 일자 <br/> -- </div> <div> 연령 <br/> -- </div>`
	document.querySelector('.t_collect5').innerHTML = `<div> 좌석 <br/> -- </div> <div> 타는곳 <br/> -- </div>`
	document.querySelector('.t_collect6').innerHTML = `<div> 호차번호 <br/> -- </div> <div> -- </div>`
	document.querySelector('.t_collect7').innerHTML = `<div> 승차권 번호 </div> <div> -- </div> `
	alert('승차권이 취소되었습니다.')
	
	let s_eat = document.querySelector('.seat')
	s_eat.innerHTML = `` 
	
	let con_firm = document.querySelector('.confirm')
	con_firm.innerHTML = ``
	상세()
	
	
	

	
}//환불 끝
	









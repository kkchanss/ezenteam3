// 관리자 계정
let admin = { id : 'admin', pw : 1234};

let finishOrder = []

//사전 주문 데이터
let orderList = [ { ono : 1, 
				  name : '김찬희',
				  phone : '01012341234', 
				  date : '2023-07-05 13:30', 
				  status : 2 , 
				  category : 0 , 
				  product : '에그마요',         	
				  bread : '화이트',  
				  cheese : '슈레드',   
				  toasting : 'true',    
				  vegetable : [ '피망', '할라피뇨'],  
				  sauce : '랜치',  	
				  pay : '5500' }
				, { ono : 2, name : '신예지', phone : '01011111234', date : '2023-07-05 15:30' , status : 2 , category : 2 , product : '치킨 베이컨 미니 랩 ', 	bread : '',      cheese : '',       toasting : 'false',   vegetable : [ ],      	  sauce : '',    	pay : '3500' }
				, { ono : 3, name : '박민재', phone : '01022221234', date : '2023-07-06 11:30', status : 0 , category : 2 , product : '이탈리안 비엔티 샐러드',   	bread : '',      cheese : '슈레드',   toasting : 'false',   vegetable : [ '할라피뇨' ],	  sauce : '핫칠리',	pay : '8500' }
	   	  	 	, { ono : 4, name : '이성호', phone : '01033331234', date : '2023-07-06 17:30' , status : 1 , category : 2 , product : '이탈리안 비엔티 샐러드',	bread : '',      cheese : '슈레드',   toasting : 'false',   vegetable : [ '할라피뇨' ],   	  sauce : '핫칠리',	pay : '8500' }
	   	  	 	, { ono : 2, name : '신예지', phone : '01011111234', date : '2023-07-05 15:30' , status : 2 , category : 2 , product : '치킨 베이컨 미니 랩 ', 	bread : '',      cheese : '',       toasting : 'false',   vegetable : [ ],      	  sauce : '',    	pay : '3500' }
				, { ono : 3, name : '박민재', phone : '01022221234', date : '2023-07-06 11:30', status : 0 , category : 2 , product : '이탈리안 비엔티 샐러드',   	bread : '',      cheese : '슈레드',   toasting : 'false',   vegetable : [ '할라피뇨' ],	  sauce : '핫칠리',	pay : '8500' }
	   	  	 	, { ono : 4, name : '이성호', phone : '01033331234', date : '2023-07-06 17:30' , status : 1 , category : 2 , product : '이탈리안 비엔티 샐러드',	bread : '',      cheese : '슈레드',   toasting : 'false',   vegetable : [ '할라피뇨' ],   	  sauce : '핫칠리',	pay : '8500' }
	   	  	 	, { ono : 2, name : '신예지', phone : '01011111234', date : '2023-07-05 15:30' , status : 2 , category : 2 , product : '치킨 베이컨 미니 랩 ', 	bread : '',      cheese : '',       toasting : 'false',   vegetable : [ ],      	  sauce : '',    	pay : '3500' }
				, { ono : 3, name : '박민재', phone : '01022221234', date : '2023-07-06 11:30', status : 0 , category : 2 , product : '이탈리안 비엔티 샐러드',   	bread : '',      cheese : '슈레드',   toasting : 'false',   vegetable : [ '할라피뇨' ],	  sauce : '핫칠리',	pay : '8500' }
	   	  	 	, { ono : 4, name : '이성호', phone : '01033331234', date : '2023-07-06 17:30' , status : 1 , category : 2 , product : '이탈리안 비엔티 샐러드',	bread : '',      cheese : '슈레드',   toasting : 'false',   vegetable : [ '할라피뇨' ],   	  sauce : '핫칠리',	pay : '8500' }
	   	  	 	
	  		  ];
let 주문상태 = [ 0 , 1 , 2 ] // 0 = 주문완료 1 = 주문취소 2 = 픽업완료
console.log('admin js 열림 ')

//주문 불러오고 사이드바에 출력하는 함수
order()
function order() {//order() 함수 시작
	//obList 공간 불러오기
	let obList = document.querySelector('.obList')
	

	//html 데이터 설정
	let html =``
	//주문 출력하기
	for(let i = 0 ; i<orderList.length ; i++){//for 시작
		
		html += `
				<div onclick="detailOd( ${i} )" class="orderBottom">
					<ul class="orNumber"> 주문번호 : ${ orderList[i].ono } 번 </ul>
					<ul>${orderList[i].product}</ul>
					<button onclick="finishOd( ${i} )" class="orFinish">완료</button>
				</div>	
				`
	}//for 끝
		obList.innerHTML = html	
}//order() 함수 끝

//사이바 메뉴 클릭하면 상세 정보 확인 함수
function detailOd( detali ){//detailOd() 시작 
	console.log('디테일오더 시작')
	//공간 불러오기
	let odSpace = document.querySelector('.odSpace')
	
	html =``
	
	//선택한 메뉴 유효성 검사
	for(let i = 0 ; i<orderList.length ; i++){//for 시작
		
		if( detali == i ){
			html +=`
					<table class="odDlist">
					<tr>
						<th>재료 </th><th>:</th><th>확인사항</th>
					</tr>
					<tr>
						<td>주문번호 </td><td>:</td><td> ${orderList[detali].ono} 번 </td>
					</tr>
					<tr>
						<td>메뉴</td><td>:</td><td>${orderList[detali].product} </td>
					</tr>
					<tr>
						<td>bread</td><td>:</td><td>${orderList[detali].bread}</td>
					</tr>
					<tr>
						<td>cheese</td><td>:</td><td>${orderList[detali].cheese}</td>
					</tr>
					<tr>
						<td>toasting</td><td>:</td><td>${orderList[detali].toasting}</td>
					</tr>
					<tr>
						<td>제외야채</td><td>:</td><td>${orderList[detali].vegetable}</td>
					</tr>
					<tr>
						<td>sauce</td><td>:</td><td>${orderList[detali].sauce}</td>
					</tr>
					<tr>
						<td>결제금액</td><td>:</td><td>${parseInt(orderList[detali].pay).toLocaleString()} 원 </td>
					</tr>
					<tr>
						<td>주문시간</td><td>:</td><td>${orderList[detali].date}</td>
					</tr>
					<tr>
						<td>연락처</td><td>:</td><td>${orderList[detali].phone}</td>
					</tr>
				</table>
				<div class="finishBtn">  
					<button onclick="dodDelete( ${i} )" class="refundBtn">환불</button>
					<button onclick="finishOd( ${i} )" class="realFn">완료</button>
				</div>
					`
					break;
		}//if 끝
		
	}//for 끝
	odSpace.innerHTML = html;
	
}// detailOd() 함수 끝

//주문 완료처리되는 함수(주문 완료 배열로 푸쉬)
function finishOd( finishN ){//함수 시작
	
	let odSpace = document.querySelector('.odSpace')
	
	for( let i = 0 ; i<orderList.length ; i++){//for st
		if( i == finishN  ){//if st
			
			let fO = orderList[i]
			
			let fnOder = { ono : fO.ono ,
				  name : fO.name ,
				  phone : fO.phone , 
				  date :  fO.date , 
				  product : fO.product ,         	
				  pay : fO.pay }
				
			finishOrder.push( fnOder )
			
			orderList.splice( finishN , 1 )

			console.log(finishOrder)
			odSpace.innerHTML = ``
			alert('픽업 완료되었습니다!')
			break;
		}//if end
	}//for end
	order()
	
}// 함수 끝

//환불처리 함수-주문리스트와 화면에서 삭제함
function dodDelete( refundN ){// 함수시작
	
	let odSpace = document.querySelector('.odSpace')
	
	for( let i = 0 ; i<orderList.length ; i++){//for st
		if( i == refundN  ){//if st
			orderList.splice( refundN , 1 )
			odSpace.innerHTML = ``
			alert('환불 되었습니다.')
			break;
		}//if end
	}//for end
	
	order()
}//함수 끝

finishView()

function finishView(){ console.log('함수함수함수')
	
	let totalPrice = 0;
	
	 for( let i = 0 ;i<finishOrder.length; i++ ){
		
		totalPrice += parseInt(finishOrder[i].pay)
		
	};
	
	let odSpace =document.querySelector('.odSpace')
	
	let	html = `
		<div class="finSpace">
			<div>
				<table class="finHaed">
					<tr>
						<th>번호</th><th>메뉴</th><th>금액</th>
					</tr>
				</table>
			</div>
			<div class="biilSpace">
				<table class="finContspa">
							
							
				</table>
			</div>
			<div>
				<table class="totalMoney">
					<tr>
						<th>총매출</th><th>:</th><th>${totalPrice.toLocaleString()}원</th>
					</tr>
				</table>
			</div>
		</div>
			`
	
	odSpace.innerHTML = html;
	
	let finContspa = document.querySelector('.finContspa')
	
	for(let i = 0 ; i<finishOrder.length ; i++){
		let html = ``
		html = `
				<tr>
					<td>${i+1}</td>
					<td>${finishOrder[i].product}</td>
					<td>${parseInt(finishOrder[i].pay).toLocaleString()} 원</td>
				</tr>
				`
		finContspa.innerHTML += html
		
	}	
	
	let biilSpace = document.querySelector('.biilSpace')
	
	biilSpace.scrollTop = biilSpace.scrollHeight ;
}
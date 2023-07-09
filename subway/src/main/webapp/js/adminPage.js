// 관리자 계정
let admin = { id : 'admin', pw : 1234};


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
					<button onclick="dodDelete( ${i} )" class="refundBtn">환불</button><button onclick="finishOd( ${i} )" class="realFn">완료</button>
				</div>				
					`
					break;
		}//if 끝
		
	}//for 끝
	odSpace.innerHTML = html;
}// detailOd() 함수 끝

function finishOd( finishN ){
	
	let odSpace = document.querySelector('.odSpace')
	
	for( let i = 0 ; i<orderList.length ; i++){
		if( i == finishN  ){
			
			odSpace.innerHTML = ``
			alert('픽업 완료되었습니다!')
			break;
		}
	}
	
	order()
}
function dodDelete( refundN ){
	
	let odSpace = document.querySelector('.odSpace')
	
	for( let i = 0 ; i<orderList.length ; i++){
		if( i == refundN  ){
			orderList.splice( refundN , 1 )
			odSpace.innerHTML = ``
			alert('환불 되었습니다.')
			break;
		}
	}
	
	order()
}

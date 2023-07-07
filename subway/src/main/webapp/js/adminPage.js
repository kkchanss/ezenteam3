// 관리자 계정
let admin = { id : 'admin', pw : 1234};


//사전 주문 데이터
let 주문리스트 = [ { ono : 1, name : '김찬희',
				  phone : 01012341234, 
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
				, { ono : 2, name : '신예지', phone : 01011111234, date : '2023-07-05 15:30' , status : 2 , category : 2 , product : '치킨 베이컨 미니 랩 ', 	bread : '',      cheese : '',       toasting : 'false',   vegetable : [ ],      	  sauce : '',    	pay : '3500' }
				, { ono : 3, name : '박민재', phone : 01022221234, date : '2023-07-06 11:30', status : 0 , category : 2 , product : '이탈리안 비엔티 샐러드',   	bread : '',      cheese : '슈레드',   toasting : 'false',   vegetable : [ '할라피뇨' ],	  sauce : '핫칠리',	pay : '8500' }
	   	  	 	, { ono : 3, name : '이성호', phone : 01033331234, date : '2023-07-06 17:30' , status : 1 , category : 2 , product : '이탈리안 비엔티 샐러드',	bread : '',      cheese : '슈레드',   toasting : 'false',   vegetable : [ '할라피뇨' ],   	  sauce : '핫칠리',	pay : '8500' }
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
	for(let i = 0 ; i<주문리스트.length ; i++){//for 시작
		
		html += `
				<div onclick="detailOd( ${i} )" class="orderBottom">
					<ul class="orNumber"> 주문번호 : ${ 주문리스트[i].ono } 번 </ul>
					<ul>${주문리스트[i].product}</ul>
					<button class="orFinish">완료</button>
				</div>	
				`
	}//for 끝
		obList.innerHTML = html	
}//order() 함수 끝

function detailOd( detali ){//detailOd() 시작
	//공간 불러오기
	let odDlist = document.querySelector('.odDlist')
	
	html =``
	
	//선택한 메뉴 유효성 검사
	for(let i = 0 ; i<주문리스트.length ; i++){//for 시작
		
		if(주문리스트[i] == detali){
			html +=`
					
					`
		}
	}

}// detailOd() 함수 끝
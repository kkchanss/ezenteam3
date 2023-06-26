let 그릇 = []
let 물온도 = []
let 인덕션온도 = []
let 타이머 = []

function 전원(){
	// 재료를 입력 받기.
	for ( let i = 0 ; ture ; i++){
		let 재료 = prompt('넣고 싶은 재료를 입력해주세요.')
		 if (재료 == ` `){
			 alert('재료를 다시 입력해주세요.')
		 } 
		 else {
			그릇.push(재료); break;
		 }
	}


	// 라면조리 시작하기 (실행)
	for ( let i = 0 ; true ; i++ ) {
		let 실행 = prompt( '1. 실행' )
		if( 재료.length >= 1){
			if(  실행 == 1) break;
		}
	}	
	
	//물 온도가 95도가 될때까지
	for ( let i = 0; true ; 물온도++){
		if (물온도 >= 95) break;
	}
	
	//가열된 물 그릇에 넣기
	그릇.push(물_온도)
	
	
	// 인덕션온도가 8단계가 될때까지
	for ( let i = 0; true ; 인덕션온도++){
		if (인덕션온도 != 8) break;
	}
	
	// 180초가 지날때까지 반복하기
	
	
	
	
	console.log('종료합니다.')
	
}
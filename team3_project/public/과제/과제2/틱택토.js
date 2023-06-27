/**
 * 
 */

 
// 1. 게임판함수










// 2. 클릭함수









// 3. 판단함수


// 4. 난수함수
function 난수함수(){
	for(;;){
		let computer = parseInt(Math.random()*8);
		if (gameBox[computer] != 0) {}
		
		else{
			gameBox[computer] == 2	 
			document.querySelector(`.btn${computer}`).innerHTML = 'X'
		break;
		}	
	}
}



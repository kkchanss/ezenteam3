/*

 */

 
// 1. 게임판함수
let gameBox = [0,0,0,0,0,0,0,0,0];









// 2. 클릭함수

function 클릭함수(index) {
	//let btn_check = document.querySelector('.btn${i}');
	if(gameBox[index] != 0) {
		alert('이미 선택된 칸입니다. 다시 선택해주세요.')
		return;
	}
	
	gameBox[index] == 1;
	document.querySelector('.btn${i}').innerHTML = "O";
	
}






// 3. 판단함수


// 4. 난수함수
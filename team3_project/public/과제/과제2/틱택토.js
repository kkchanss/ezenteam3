/**
 * 
 */

 
// 1. 게임판함수










// 2. 클릭함수









// 3. 판단함수
function 판단함수(){//판단함수 시작
	//무승부판단
	if(gameBox.indexOf[0]==-1)
	{alert('무승부입니다.'); 게임판함수(); return;}
	
	//가로승리 판단
	for( i = 0 ; i < 7 ; i+=3 ){//for문 시작
				//겜박스0				0+1=1				0+2=2
		if(gameBox[i] ==1 && gameBox[i+1] == 1 && gameBox[i+2] == 1)
		{alert('플레이어 승리!'); 게임판함수(); return;}
		
		else if(gameBox[i] ==2 && gameBox[i+1] == 2 && gameBox[i+2] == 2)
		{alert('컴퓨터 승리...'); 게임판함수(); return; }
		}//for문 끝
	
	//세로승리 판단
	for( i = 0 ; i < 2 ; i+=1 ){//for문 시작
		
		if(gameBox[i] == 1 && gameBox[i+3] == 1 && gameBox[i+6] == 1)
		{alert('플레이어 승리!'); 게임판함수(); return;}
		else if(gameBox[i] == 2 && gameBox[i+3] == 2 && gameBox[i+6] == 2)
		{alert('컴퓨터 승리...'); 게임판함수(); return;}
		}//for문 끝
		
	//대각선승리 판단
	if(gameBox[0] == 1 && gameBox[4] == 1 && gameBox[8] == 1)
	{alert('플레이어 승리'); 게임판함수(); return;}
	
	else if(gameBox[2] == 1 && gameBox[4] == 1 && gameBox[6]==1)
	{alert('플레이어 승리'); 게임판함수(); return;}
	
	else if(gameBox[0] == 2 && gameBox[4] == 2 && gameBox[8] == 2)
	{alert('컴퓨터 승리'); 게임판함수(); return;}
	
	else if(gameBox[2] == 2 && gameBox[4] == 2 && gameBox[6] == 2)
	{alert('컴퓨터 승리'); 게임판함수(); return;}

}//판단함수 끝

// 4. 난수함수
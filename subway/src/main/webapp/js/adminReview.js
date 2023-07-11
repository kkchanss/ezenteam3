
console.log('리뷰 열림')
 
let reviewList = JSON.parse(sessionStorage.getItem('reviewList'));
if ( reviewList == null )
reviewList = [ ];
 
reviewPrint() //리뷰 출력함수
function reviewPrint() {//함수시작
	 let review_list = document.querySelector('.review_list');
	 let html = `<tr> 
                  <th class="no"> 번호 </th>
                  <th class="name"> 작성자 </th>
                  <th class="menu"> 상품명 </th>
                  <th class="content"> 내용 </th>
                  <th class="star"> 별점 </th>
                  <th class="time"> 날짜 </th>
               </tr>`;
     for(let i = 0; i < reviewList.length; i++) {//for sta
		 html+=`<tr>
                  <td class="noa"> ${reviewList[i].no}<img onclick="reportRv( ${i} )" class="siren" src ="../img/siren.png"/></td>
                  <td class="name"> ${reviewList[i].name} </td>
                  <td class="menu"> ${reviewList[i].menu} </td>
                  <td class="content"> ${reviewList[i].content} </td>
                  <td class="star">${reviewList[i].star} </td> 
                  <td class="time">${reviewList[i].time} </td>                
               </tr>`;
	 }//for end
	 review_list.innerHTML = html;
}//함수끝

//리뷰신고 함수
function reportRv( sirenN ){//함수 시작
	console.log(sirenN)
	
	let pw = prompt('관리자 비밀번호를 입력하세요')
	 if(pw == '1234'){//if sta
		 for(let i = 0 ; i< reviewList.length ; i++){//for sta
			 
			 if(sirenN == i){//if2 sta
			 	reviewList[i].name = ' ? '
			 	reviewList[i].menu = ' ??? '
				reviewList[i].content = `신고된리뷰입니다. &#91; 열람불가 &#93; `
				reviewList[i].star = ' ? '
				sessionStorage.setItem('reviewList' , JSON.stringify(reviewList))
			 }//if2 end
		 }//for end
	 }//if end
	 else{ alert('비밀번호가 틀렸습니다.[신고불가]')
	 		}
	
	reviewPrint() 
}//함수 끝
 

/*
	1. 아이템 페이지에서 선택된 제품의 이미지와 제품명 전달 받아서 innerHTML출력하기
	2. 주문하기 버튼 누르면 옵션 모두 선택된 내용 객체에 저장후 주문내역 배열에 저장하고 세션에 저장

	
	★ 카테고리 넘버 0: 샌드위치 / 1: 랩 / 2: 샐러드
 */

 console.log ('orderPage JS 실행')
 
 // ★☆★☆★☆★☆  제품 페이지에서 선택된 아이템 임시 설정 수정해야함 ★☆★☆★☆★☆ 
 /*let selectIime = JSON.parse(localStorage.getItem('selectIime', selectIime));*/
 let selectIime = {category: 2, img: 'eggmayo.png', product: '에그마요'}
 

 // -------------------------출력--------------------------------------------------
 // -------------------------출력--------------------------------------------------
 
 // 받아온 데이터(제품이미지, 제품명) 출력하기
 itemPrint()
 function itemPrint(){ //f s
	 //어디
	 let productinfo = document.querySelector('.productinfo')
	 //무엇
	 let html = `<div class="productImgBox"><img class="productImg" src="../img/${selectIime.img}"/></div>
			<div class="productNameBox"><h3 class="productName"> ${selectIime.product} </h3></div>`
	 //대입
	 productinfo.innerHTML = html 
	 
	 optionPrint(selectIime.category)
 } //f e
 
 //커스텀 옵션 출력하기
 function optionPrint(categoryNo){ //f s
	 //어디
	 let customBox = document.querySelector('.customBox')
	 //무엇
	 if( categoryNo == 0){
		 let html_0 = `<div class="customBread customlist"> <!-- 커스텀 : 빵 -->
				<div> <img src="../img/빵.PNG"/> </div>
				<div><h3> 빵 </h3></div>
				<div> <!-- 빵 옵션 -->
					<input type ="radio" name="breadOption"> 화이트
					<input type ="radio" name="breadOption"> 위트
					<input type ="radio" name="breadOption"> 허니오트
					<input type ="radio" name="breadOption"> 플랫브레드
				</div>
			</div> <!-- 커스텀 : 빵 end -->
			
			<div class="customCheese customlist"> <!-- 커스텀 : 치즈 -->
				<div> <img src="../img/치즈.PNG"/> </div>
				<div><h3> 치즈 </h3></div>
				<div> <!-- 치즈 옵션 --> 
					<input type ="radio" name="cheeseOption"> 아메리칸
					<input type ="radio" name="cheeseOption"> 슈레드
					<input type ="radio" name="cheeseOption"> 모차렐라
					<input type ="radio" name="cheeseOption"> 선택 안 함
				</div>
			</div> <!-- 커스텀 : 치즈 end -->
			
			<div class="customToasting customlist"> <!-- 커스텀 : 토스팅 -->
				<div> <img src="../img/토스팅.PNG"/> </div>
				<div><h3> 토스팅 </h3></div>
				<div> <!-- 토스팅 옵션 true, false --> 
					<input type ="radio" name="toastingOption"> 토스팅
					<input type ="radio" name="toastingOption"> 토스팅 안 함
				</div>
			</div> <!-- 커스텀 : 토스팅 end -->
			
			
			<div class="customVegetable customlist"> <!-- 커스텀 : 야채제외 -->
				<div> <img src="../img/야채.PNG"/> </div>
				<div><h3> 야채제외 </h3></div>
				<div> <!-- 야채제외 옵션 --> 
					<input type ="checkbox" name="vegetableOption"> 피망
					<input type ="checkbox" name="vegetableOption"> 할라피뇨
					<input type ="checkbox" name="vegetableOption"> 올리브
					<input type ="checkbox" name="vegetableOption"> 피클
					<input type ="checkbox" name="vegetableOption"> 양파
					<input type ="radio" name="vegetableOption"> 제외 안 함
				</div>
			</div> <!-- 커스텀 : 야채제외 end -->
			
			<div class="customSauce customlist"> <!-- 커스텀 : 소스 -->
				<div> <img src="../img/소스.PNG"/> </div>
				<div><h3> 소스 </h3></div>
				<div> <!-- 소스 옵션 --> 
					<input type ="radio" name="sauceleOption"> 핫칠리
					<input type ="radio" name="sauceleOption"> 랜치
					<input type ="radio" name="sauceleOption"> 바베큐
					<input type ="radio" name="sauceleOption"> 스위트어니언
					<input type ="radio" name="sauceleOption"> 선택 안 함
				</div>
			</div> <!-- 커스텀 : 소스 end -->`
		//대입	
		customBox.innerHTML = html_0
		
	 }else if (categoryNo == 1){
		 let html_1 = ``
		//대입	
		customBox.innerHTML = html_1
		
	 }else if (categoryNo == 2){
		 let html_2 = `			
			<div class="customCheese customlist"> <!-- 커스텀 : 치즈 -->
				<div> <img src="../img/치즈.PNG"/> </div>
				<div><h3> 치즈 </h3></div>
				<div> <!-- 치즈 옵션 --> 
					<input type ="radio" name="cheeseOption"> 아메리칸
					<input type ="radio" name="cheeseOption"> 슈레드
					<input type ="radio" name="cheeseOption"> 모차렐라
					<input type ="radio" name="cheeseOption"> 선택 안 함
				</div>
			</div> <!-- 커스텀 : 치즈 end -->	
			
			<div class="customVegetable customlist"> <!-- 커스텀 : 야채제외 -->
				<div> <img src="../img/야채.PNG"/> </div>
				<div><h3> 야채제외 </h3></div>
				<div> <!-- 야채제외 옵션 --> 
					<input type ="checkbox" name="vegetableOption"> 피망
					<input type ="checkbox" name="vegetableOption"> 할라피뇨
					<input type ="checkbox" name="vegetableOption"> 올리브
					<input type ="checkbox" name="vegetableOption"> 피클
					<input type ="checkbox" name="vegetableOption"> 양파
					<input type ="radio" name="vegetableOption"> 제외 안 함
				</div>
			</div> <!-- 커스텀 : 야채제외 end -->
			
			<div class="customSauce customlist"> <!-- 커스텀 : 소스 -->
				<div> <img src="../img/소스.PNG"/> </div>
				<div><h3> 소스 </h3></div>
				<div> <!-- 소스 옵션 --> 
					<input type ="radio" name="sauceleOption"> 핫칠리
					<input type ="radio" name="sauceleOption"> 랜치
					<input type ="radio" name="sauceleOption"> 바베큐
					<input type ="radio" name="sauceleOption"> 스위트어니언
					<input type ="radio" name="sauceleOption"> 선택 안 함
				</div>
			</div> <!-- 커스텀 : 소스 end -->`
		//대입	
		customBox.innerHTML = html_2
	 } 
 }//f e
 
 
 // -------------------------주문하기 버튼--------------------------------------------------
 // -------------------------주문하기 버튼--------------------------------------------------
 
 function order(){
	 
	 
	 
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
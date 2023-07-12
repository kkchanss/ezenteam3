/*
	1. 아이템 페이지에서 선택된 제품의 이미지와 제품명 전달 받아서 innerHTML출력하기
	2. 주문하기 버튼 누르면 옵션 모두 선택된 내용 객체에 저장후 주문내역 배열에 저장하고 세션에 저장
	
	★ 카테고리 넘버 0: 샌드위치 / 1: 랩 / 2: 샐러드
 */

 console.log ('orderPage JS 실행')
 
 // ★☆★☆★☆★☆  제품 페이지에서 선택된 아이템 임시 설정. 추후에 수정해야함 ★☆★☆★☆★☆ 
 /*let selectIime = JSON.parse(localStorage.getItem('selectIime', selectIime));*/
 let selectItem = {category: 0, img: 'eggmayo.png', product: '에그마요', product_English: 'eggmayo', calory: '416kcal', pay: 5500}
 

 // -------------------------출력--------------------------------------------------
 // -------------------------출력--------------------------------------------------
 
 // 받아온 데이터(제품이미지, 제품명) 출력하기
 itemPrint()
 function itemPrint(){ //f s
	 //어디
	 let productinfo = document.querySelector('.productinfo')
	 //무엇
	 let html = `<div class="productImgBox"><img class="productImg" src="../img/${selectItem.img}"/></div>
			<div class="productNameBox"><h3 class="productName"> ${selectItem.product} </h3></div>`
	 //대입
	 productinfo.innerHTML = html 
	 
	 optionPrint(selectItem.category)
 } //f e
 
 //커스텀 옵션과 주문하기 버튼 출력하기
 function optionPrint(categoryNo){ //f s
	 //어디
	 let customBox = document.querySelector('.customBox')
	 //무엇
	 if( categoryNo == 0){
		 let html_0 = `<div class="customBread customlist"> <!-- 커스텀 : 빵 -->
				<div> <img src="../img/빵.PNG"/> </div>
				<div><h3> 빵 </h3></div>
				<div> <!-- 빵 옵션 -->
					<input type ="radio" class="breadOption" name="bread" value="화이트"> 화이트
					<input type ="radio" class="breadOption" name="bread" value="위트"> 위트
					<input type ="radio" class="breadOption" name="bread" value="허니오트"> 허니오트
					<input type ="radio" class="breadOption" name="bread" value="플랫브레드"> 플랫브레드
				</div>
			</div> <!-- 커스텀 : 빵 end -->
			
			<div class="customCheese customlist"> <!-- 커스텀 : 치즈 -->
				<div> <img src="../img/치즈.PNG"/> </div>
				<div><h3> 치즈 </h3></div>
				<div> <!-- 치즈 옵션 --> 
					<input type ="radio" class="cheeseOption" name="cheese" value="아메리칸"> 아메리칸
					<input type ="radio" class="cheeseOption" name="cheese" value="슈레드"> 슈레드
					<input type ="radio" class="cheeseOption" name="cheese" value="모차렐라"> 모차렐라
					<input type ="radio" class="cheeseOption" name="cheese" value="선택 안 함"> 선택 안 함
				</div>
			</div> <!-- 커스텀 : 치즈 end -->
			
			<div class="customToasting customlist"> <!-- 커스텀 : 토스팅 -->
				<div> <img src="../img/토스팅.PNG"/> </div>
				<div><h3> 토스팅 </h3></div>
				<div> <!-- 토스팅 옵션 true, false --> 
					<input type ="radio" class="toastingOption" name="toasting" value="토스팅"> 토스팅
					<input type ="radio" class="toastingOption" name="toasting" value="토스팅 안 함"> 토스팅 안 함
				</div>
			</div> <!-- 커스텀 : 토스팅 end -->
			
			
			<div class="customVegetable customlist"> <!-- 커스텀 : 야채제외 -->
				<div> <img src="../img/야채.PNG"/> </div>
				<div><h3> 야채제외 </h3></div>
				<div> <!-- 야채제외 옵션 --> 
					<input type ="checkbox" class="vegetableOption" name="vegetable" value="피망"> 피망
					<input type ="checkbox" class="vegetableOption" name="vegetable" value="할라피뇨"> 할라피뇨
					<input type ="checkbox" class="vegetableOption" name="vegetable" value="올리브"> 올리브
					<input type ="checkbox" class="vegetableOption" name="vegetable" value="피클"> 피클
					<input type ="checkbox" class="vegetableOption" name="vegetable" value="양파"> 양파
					<input type ="radio" class="vegetableOption" name="vegetable" value="제외 안 함"> 제외 안 함
				</div>
			</div> <!-- 커스텀 : 야채제외 end -->
			
			<div class="customSauce customlist"> <!-- 커스텀 : 소스 -->
				<div> <img src="../img/소스.PNG"/> </div>
				<div><h3> 소스 </h3></div>
				<div> <!-- 소스 옵션 --> 
					<input type ="radio" class="sauceOption" name="sauce" value="핫칠리"> 핫칠리
					<input type ="radio" class="sauceOption" name="sauce" value="랜치"> 랜치
					<input type ="radio" class="sauceOption" name="sauce" value="바베큐"> 바베큐
					<input type ="radio" class="sauceOption" name="sauce" value="스위트어니언"> 스위트어니언
					<input type ="radio" class="sauceOption" name="sauce" value="선택 안 함"> 선택 안 함
				</div>
			</div> <!-- 커스텀 : 소스 end -->`;
		//대입	
		customBox.innerHTML = html_0
		
	 }else if (categoryNo == 1){
		 let html_1 = ``;
		//대입	
		customBox.innerHTML = html_1
		
	 }else if (categoryNo == 2){
		 let html_2 = `			
			<div class="customCheese customlist"> <!-- 커스텀 : 치즈 -->
				<div> <img src="../img/치즈.PNG"/> </div>
				<div><h3> 치즈 </h3></div>
				<div> <!-- 치즈 옵션 --> 
					<input type ="radio" class="cheeseOption" name="cheese" value="아메리칸"> 아메리칸
					<input type ="radio" class="cheeseOption" name="cheese" value="슈레드"> 슈레드
					<input type ="radio" class="cheeseOption" name="cheese" value="모차렐라"> 모차렐라
					<input type ="radio" class="cheeseOption" name="cheese" value="선택 안 함"> 선택 안 함
				</div>
			</div> <!-- 커스텀 : 치즈 end -->	
			
			<div class="customVegetable customlist"> <!-- 커스텀 : 야채제외 -->
				<div> <img src="../img/야채.PNG"/> </div>
				<div><h3> 야채제외 </h3></div>
				<div> <!-- 야채제외 옵션 --> 
					<input type ="checkbox" class="vegetableOption" name="vegetable" value="피망"> 피망
					<input type ="checkbox" class="vegetableOption" name="vegetable" value="할라피뇨"> 할라피뇨
					<input type ="checkbox" class="vegetableOption" name="vegetable" value="올리브"> 올리브
					<input type ="checkbox" class="vegetableOption" name="vegetable" value="피클"> 피클
					<input type ="checkbox" class="vegetableOption" name="vegetable" value="양파"> 양파
					<input type ="radio" name="vegetable" class="vegetableOption"> 제외 안 함
				</div>
			</div> <!-- 커스텀 : 야채제외 end -->
			
			<div class="customSauce customlist"> <!-- 커스텀 : 소스 -->
				<div> <img src="../img/소스.PNG"/> </div>
				<div><h3> 소스 </h3></div>
				<div> <!-- 소스 옵션 --> 
					<input type ="radio" class="sauceOption" name="sauce" value="핫칠리"> 핫칠리
					<input type ="radio" class="sauceOption" name="sauce" value="랜치"> 랜치
					<input type ="radio" class="sauceOption" name="sauce" value="바베큐"> 바베큐
					<input type ="radio" class="sauceOption" name="sauce" value="스위트어니언"> 스위트어니언
					<input type ="radio" class="sauceOption" name="sauce" value="선택 안 함"> 선택 안 함
				</div>
			</div> <!-- 커스텀 : 소스 end -->`;
		//대입	
		customBox.innerHTML = html_2
	 } 
	 
	 // 버튼 출력하기
	 let orderBtnBox = document.querySelector('.orderBtnBox')
	 orderBtnBox.innerHTML = `<button onclick="order()" class="orderBtn"> 주문하기 </button>`;
	 
 }//f e
 
 
 // -------------------------주문하기--------------------------------------------------
 // -------------------------주문하기--------------------------------------------------
 // orderList = 주문내역 객체가 들어가는 주문리스트 배열명
 // 속성명 종류 ( ono, name, phone, date, status, category, product, bread, cheese, toasting, vegetable, sauce, pay )
 orderList = []
 function order(){ // f s
 	 // 세션에 있는 값 배열에 넣어놓고 그 이후에 받는 입력값을 저장해서 누적시키기
	 orderList = JSON.parse(sessionStorage.getItem('orderList'))
	 if ( orderList == null ) { orderList = [] }
	 
	 //저장할 주문 정보들 선언하기, 만약에 넣을 값이 없다면 공백으로 저장하기
	 let ono = orderList.length == 0 ? 1 :  orderList[orderList.length-1].ono +1
	 let name = prompt('주문자명을 입력해 주세요. : ');
	 let phone = prompt('휴대폰번호를 입력해 주세요. ("-" 제외) : ');
	 let date = `${new Date().getFullYear()}-${new Date().getMonth()+1 }-${new Date().getDate() }`;
	 let status = 0;
	 let category = selectItem.category;
	 let product = selectItem.product;
	 let bread = '';
	 if(category == 0)					{bread = document.querySelector('input[name="bread"]:checked').value;} 
	 console.log (bread)
	 let cheese = '';
	 if(category == 0 || category == 2) {cheese = document.querySelector('input[name="cheese"]:checked').value;}
	 console.log (cheese)
	 let toasting = '';
	 if(category == 0) 					{toasting = document.querySelector('input[name="toasting"]:checked').value;}
	 console.log (toasting)
	 let vegetable = [];
	 if(category == 0 || category == 2) {vegetable = document.querySelectorAll('input[name="vegetable"]:checked').value;}
	 console.log (vegetable)
	 let sauce = '';
	 if(category == 0 || category == 2) {sauce = document.querySelector('input[name="sauce"]:checked').value;}
	 console.log (sauce)
	 let pay = selectItem.pay
	 

	 // 주문 객체 만들기
	 let order = { ono: ono, name: name, phone: phone, date: date, status: status, category: category, 
	 				product: product, bread: bread, cheese: cheese, toasting: toasting, 
	 				vegetable: vegetable, sauce: sauce, pay: pay  }
	 // 주문을 주문리스트배열에 푸쉬 및 세션에 올리기
	 orderList.push(order); console.log (order);
	 sessionStorage.setItem('orderList', JSON.stringify(orderList));
	 
	 // 버튼 삭제하기
	 let orderBtnBox = document.querySelector('.orderBtnBox')
	 orderBtnBox.innerHTML = ``;
	 
	 // 주문 후 주문완료 페이지 띄우기
	 let customBox = document.querySelector('.customBox')
	 customBox.innerHTML = `<div class="orderConfirm">
								<div><h3 class="orderConfirmH"> 감사합니다. <span class="customer"> ${name}</span> 고객님 <br/> 주문이 완료 되었습니다. </h3></div>
								<div>
									<p class="orderConfirmI">
										고객님이 주문하신 주문번호는 <span class="customer"> ${ono} </span>입니다.
									</p>
								</div>
							</div>`;
 }// f e
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
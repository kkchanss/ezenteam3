
let categoryList = [ '샌드위치' , '랩', '샐러드'
	// { 상위 : 샌드위치 ,  하위 : [클래식, 프리미엄] 	}, 
    // { 상위 : 랩 ,		 하위 : [시그니처랩, 미니랩] 	}, 
    // { 상위 : 샐러드 ,	 하위 : [클래식, 프리미엄] 	}, 
];

let MenuList = [
	{product : '에그마요',				product_English : 'eggmayo' ,					calory : '416kcal', pay : 5500, img : 'eggmayo.png', category :0 },
	{product : '참치',				product_English : 'tuna',						calory : '316kcal', pay : 5800, img : 'tuna.png', category :0 },
	{product : '햄',					product_English : 'ham',						calory : '262kcal', pay : 5800, img : 'ham.png', category : 0},
	{product : '쉬림프',				product_English : 'shrimp',						calory : '241kcal', pay : 7600, img : 'shrimp.png', category : 0},
	{product : '바비큐',				product_English : 'BBQ',						calory : '372kcal', pay : 7300, img : 'BBQ.png', category : 0},
	{product : '치킨데리야끼', 			product_English : 'chicken_teriyaki',			calory : '314kcal', pay : 7000, img : 'chicken_teriyaki.png', category : 0},
	{product : '스테이크&치즈아보카도랩',	product_English :'steak_n_cheese_avocado_wrap',	calory : '478kcal', pay : 5000, img : 'steak_n_cheese_avocado_wrap.jpg', category :1 },
	{product : '쉬림프 에그마요 랩', 		product_English: 'shrimp_egg_mayo_wrap',		calory : '516kcal', pay : 4600, img : 'shrimp_egg_mayo_wrap.jpg', category : 1},
	{product : '치킨 베이컨 미니 랩',	 	product_English : 'chicken_bacon_mini_wrap' ,	calory : '391kcal', pay : 3500, img : 'chicken_bacon_mini_wrap.jpg', category : 1},
	{product : '이탈리안 비엠티', 		product_English: 'S_italian_BMT',				calory : '226kcal', pay : 8500, img : 'S_italian_BMT.png', category :2 },
	{product : '비엘티',				product_English : 'S_BLT',						calory : '153kcal', pay : 8000, img : 'S_BLT.png', category :2 },
	{product : '햄', 				product_English : 'S_ham',						calory : '99.5kcal',pay : 7600, img : 'S_ham.png', category :2 },
	{product : '풀드포크바비큐',			product_English : 'S_pulled_pork_BBQ',			calory : '165kcal', pay : 9000, img : 'S_pulled_pork_BBQ.png', category : 2},
	{product : '스파이시 이탈리안', 		product_English: 'S_spicy_italian',				calory : '302kcal', pay : 8700, img : 'S_spicy_italian.png', category : 2},
]

let cartList = [ ]

categoryPrint(0);
function categoryPrint(selectNo){
	// 함수의 목적 : 카테고리 출력 함수
	// 함수의 사용조건 : 사용자가 웹 실행 했을 때
	// 함수의 하는 순서도 1단계~10단계 : 
	//1. 카테고리 함수 정의한다
	//2. 어떤 데이터를 어느곳에 어떻게 출력 
	// categoryList 배열안에 있는 데이터를 categorymenu_top에 리스트아이템으로 전부다 출력
		// 1. 나는 카테고리배열을 출력하고 한다.
		// 2. categorymenu_top 이라는 ul 태그 안에 하고 싶다.
		// 3. 카테고리배열에 있는 모두 하나씩 li 태그 구성해서 출력한다.
		
	let categorymenu_top = document.querySelector('.categorymenu_top'); console.log(categorymenu_top)
	let html = ``;
	for(let i=0; i<categoryList.length; i++){
		html += `<li onclick="categorySelect( ${i} )"> ${ categoryList[i] } </li>`
	}
	categorymenu_top.innerHTML = html;
}

function categorySelect(selectNo){	// 카테고리 클릭 함수
	console.log(selectNo);
	let category_topli = document.querySelectorAll('.categorymenu_top li');
	console.log(category_topli)
	
	for(let i = 0; i<categoryList.length; i++){
		if (selectNo==i){
			category_topli[i].classList.add('categoryselect');
		}else{
			category_topli[i].classList.remove('categoryselect')
		}
	}
	productPrint(selectNo);
}

productPrint(0);
function productPrint(categoryNo){	// 제품 출력 함수
	let kioskcontent = document.querySelector('.kioskcontent');	console.log(kioskcontent)
	let html = '';	console.log(html)
		for(let i= 0; i<MenuList.length; i++){
			if(MenuList[i].category==categoryNo){	
				
				
				html+=
					`<div onclick="productSelect(${i})" class="productbox">
							<div  class="product">
								<img src="../img/${MenuList[i].img}">
								<div class="Product_Name">${MenuList[i].product}</div>
								<div class="Product_Name_English">${MenuList[i].product_English}</div>
								<div class="calory">${MenuList[i].calory}</div>
							</div>
						</div>`}
		}	
	kioskcontent.innerHTML = html;	console.log(productbox)
}

function productSelect( productNo ){ 
   console.log(MenuList[productNo].product);
   localStorage.setItem('selectIime' , JSON.stringify(
      
      {category: MenuList[productNo].category, 
      img: MenuList[productNo].img,
       product: MenuList[productNo].product, 
       product_English: MenuList[productNo].product_English,
        calory: MenuList[productNo].calory,
         pay: MenuList[productNo].pay}
      
     ) )
}




//let selectIime = JSON.parse(localStorage.setItem('selectIime', selectIime));
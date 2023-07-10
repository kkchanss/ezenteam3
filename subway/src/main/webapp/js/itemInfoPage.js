
let categoryList = [ '샌드위치' , '랩', '샐러드'
	// { 상위 : 샌드위치 ,  하위 : [클래식, 프리미엄] 	}, 
    // { 상위 : 랩 ,		 하위 : [시그니처랩, 미니랩] 	}, 
    // { 상위 : 샐러드 ,	 하위 : [클래식, 프리미엄] 	}, 
];

let MenuList = [
	{name : '에그마요', price : 5500, img : 'eggmayo.png', category :0 },
	{name : '참치', price : 5800, img : 'tuna.png', category :0 },
	{name : '햄', price : 5800, img : 'ham.png', category : 0},
	{name : '쉬림프', price : 7600, img : 'shrimp.png', category : 0},
	{name : '바비큐', price : 7300, img : 'BBQ.png', category : 0},
	{name : '치킨데리야끼', price : 7000, img : 'chicken_teriyaki.png', category : 0},
	{name : '스테이크&치즈아보카도랩', price : 5000, img : 'steak_n_cheese_avocado_wrap.jpg', category :1 },
	{name : '쉬림프 에그마요 랩', price : 4600, img : 'shrimp_egg_mayo_wrap.jpg', category : 1},
	{name : '치킨 베이컨 미니 랩', price : 3500, img : 'chicken_bacon_mini_wrap.jpg', category : 1},
	{name : '이탈리안 비엠티', price : 8500, img : 'S_italian_BMT.png', category :2 },
	{name : '비엘티', price : 8000, img : 'S_BLT.png', category :2 },
	{name : '햄', price : 7600, img : 'S_ham.png', category :2 },
	{name : '풀드포크바비큐', price : 9000, img : 'S_pulled_pork_BBQ.png', category : 2},
	{name : '스파이시 이탈리안', price : 8700, img : 'S_spicy_italian.png', category : 2},
	{name : '쉬림프', price : 9400, img : 'S_shrimp.png', category :2 },
]

let cartList = [ ]

categoryPrint(0);
function categoryPrint(selectNo){
	let categorymenu_top = document.querySelector('.categorymenu_top'); console.log('categorymenu_top')
	let html = ``;
	for(let i = 0; i<categoryList.length; i++){
		// 선택된카테고리(selectNo) 와 i 와 같으면 i번재 인덱스 선택된 카테고리
		if( i == selectNo){html +=`<li onclick="categoryselect(${i})" class="categoryselect"> ${categoryList[i]} </li>`}
		else{html +=`<li onclick="categorySelect( ${ i } )" >${ categoryList[i] }</li>`}
		
	}
	categorymenu_top.innerHTML = html;
	
}

function categorySelect(selectNo){
	console.log(selectNo);
	let category_topli = document.querySelectorAll('.category_topli');
	console.log(category_topli)
	
	for(let i = 0; i<categoryList.length; i++){
		if (selectNo==i){
			category_topli[i].classList.add('categoryselect');
		}else{
			category_topli[i].classList.remove('')
		}
	}
	productPrint(selectNo);
}

//let selectIime = JSON.parse(localStorage.setItem('selectIime', selectIime));
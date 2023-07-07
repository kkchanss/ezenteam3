<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>orderPage</title>
	<link href="../css/orderPage.css" rel="stylesheet">
	<link href="../css/header.css" rel="stylesheet">
	<link href="../css/footer.css" rel="stylesheet">
</head>
<body style="background-color: #F2F2F2;">

	<%@ include file="../header.jsp" %>

	<div class="wrap"> <!---------------- 커스텀오더 페이지 전체 ---------------->

		<div class="productinfo"> <!---------------- 제품이미지 ---------------->

		</div> <!---------------- 제품이미지 end ---------------->
		
		<div class="customBox"> <!---------------- 커스텀 항목 ---------------->
		
			<div class="customBread customlist"> <!-- 커스텀 : 빵 -->
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
			</div> <!-- 커스텀 : 소스 end -->
			
		</div> <!---------------- 커스텀 항목 end ---------------->
		
		<div class="orderBtnBox"> <!---------------- 주문하기 버튼 ---------------->
			<button onclick="order()" class="orderBtn"> 주문하기 </button>
		</div> <!---------------- 주문하기 버튼 end ---------------->

	</div> <!---------------- 커스텀오더 페이지 전체 end ---------------->
	
	<%@ include file="/footer.jsp" %>
	<script src="../js/orderPage.js"></script>
</body>
</html>
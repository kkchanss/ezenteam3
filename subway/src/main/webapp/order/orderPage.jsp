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

		<div class="productinfo"> <!---------------- 제품이미지 및 제품명 ---------------->
			<!-- itemPrint 함수로 출력  -->
		</div> <!---------------- 제품이미지 및 제품명 end ---------------->
		
		<div class="customBox"> <!---------------- 커스텀 항목 ---------------->
			<!-- optionPrint 함수로 출력 -->
					
		</div> <!---------------- 커스텀 항목 end ---------------->
		
		<div class="orderBtnBox"> <!---------------- 주문하기 버튼 ---------------->
			<!-- optionPrint 함수로 출력 -->
		</div> <!---------------- 주문하기 버튼 end ---------------->

	</div> <!---------------- 커스텀오더 페이지 전체 end ---------------->
	
	<%@ include file="/footer.jsp" %>
	<script src="../js/orderPage.js"></script>
</body>
</html>
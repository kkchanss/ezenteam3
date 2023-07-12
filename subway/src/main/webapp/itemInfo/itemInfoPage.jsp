<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Subway Product Information</title>
	<link href="../css/header.css" rel="stylesheet">
	<link href="../css/footer.css" rel="stylesheet">
	<link href="/subway/css/itemInfoPage.css" rel="stylesheet">
</head>
<body style="background-color: #F2F2F2;">

	<%@ include file="../header.jsp" %>
	
	<div class="wrap"><!-- 제품 정보 페이지 시작 -->
		<div><!-- 카테고리 시작 -->
			<img id="wrapimg" src="\subway\img\main_h_img02.jpg" style="width: 100%;"/> 
			<div class="category_top"><!-- 상단카테고리 시작 -->
				<ul class="categorymenu_top"><!-- 상단카테고리 시작 -->
					<li onclick="categoryPrint(0)" class="categoryselect"> 샌드위치 </li>
					<li onclick="categoryPrint(1)"> 랩 </li>
					<li onclick="categoryPrint(2)"> 샐러드 </li>
				</ul><!-- 상단카테고리 끝 -->
			</div><!-- 상단카테고리 end -->
		</div><!-- 카테고리 end -->
		
		<div class="kioskcontent"><!-- 제품구역 시작 -->
			<!-- productPrint 함수에서 출력 -->
		</div><!-- 제품구역 end -->

	</div><!-- 제품 정보 페이지 end -->
	<script src="/subway/js/itemInfoPage.js" type="text/javascript"></script>
	
	<%@ include file="/footer.jsp" %>
	
</body>
</html>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>review</title>
<link href="../css/header.css" rel="stylesheet">
<link href="../css/footer.css" rel="stylesheet">
<link href="../css/reviewPage.css" rel="stylesheet">
</head>
<body>
	<%@include file = "../header.jsp" %>
	<div class="wrap">
		<h1 class="reviewTitle">리뷰 작성</h1>
		<div class="reviewContent">
			<input class="inputName" type="text" placeholder="작성자"> </br></br>
			메뉴 선택 : <select class="menuSelect">
							<option> 에그마요 샌드위치 </option>
							<option> 참치 샌드위치 </option>
							<option> 햄 샌드위치 </option>
							<option> 쉬림프 샌드위치 </option>
							<option> 바비큐 샌드위치 </option>
							<option> 치킨데리야끼 샌드위치 </option>
							<option> 스테이크&치즈아보카도 랩 </option>
							<option> 쉬림프 에그마요 랩 </option>
							<option> 치킨 베이컨 미니 랩 </option>
							<option> 이탈리안 비엠티 샐러드 </option>
							<option> 비엘티 샐러드 </option>
							<option> 햄 샐러드 </option>
							<option> 풀드포크바비큐 샐러드 </option>
							<option> 스파이시 이탈리안 샐러드 </option>
							<option> 쉬림프 샐러드 </option>
						</select>
			<h3>한줄 리뷰를 작성해주세요!</h3>
			<input class="oneReview" type="text" placeholder="리뷰를 작성해주세요">
			<div class="starSelect">
				별점 : <select class="stars">
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
						
					</select>
			</div>
		</div>
		<button onclick="reviewWrite()" class="writeBtn"> 작성 완료 </button>
	</div>
	<%@include file = "../footer.jsp" %>
	<script src="../js/reviewPage.js" type="text/javascript"></script>
</body>
</html>
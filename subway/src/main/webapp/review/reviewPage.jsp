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
			<input class="inputName" type="text" placeholder="작성자">
			<h3>한줄 리뷰를 작성해주세요!</h3>
			<input class="oneReview" type="text" placeholder="리뷰를 작성해주세요">
			<div class="starSelect">
				별점 : <select>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
						
					</select>
			</div>
		</div>
		<button onclick="" class="writeBtn"> 작성 완료 </button>
	</div>
	<%@include file = "../footer.jsp" %>
	<script src="../js/reviewPage.js" type="text/javascript"></script>
</body>
</html>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>review</title>
<link href="../css/header.css" rel="stylesheet">
<link href="../css/footer.css" rel="stylesheet">
</head>
<body>
	<%@include file = "../header.jsp" %>
	<div>
		<h1>리뷰 작성</h1>
		<div>
			<input type="text" placeholder="작성자">
			<p>한줄 리뷰를 작성해주세요!</p>
			<input type="text">
			<div>
				별점 : <input type="text">
			</div>
		</div>
		<button onclick="" class="write"> 작성 완료 </button>
	</div>
	<%@include file = "../footer.jsp" %>
</body>
</html>
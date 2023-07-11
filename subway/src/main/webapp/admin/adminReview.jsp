<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link href="../css/adminReview.css" rel="stylesheet">
<link href="../css/header.css" rel="stylesheet">
<link href="../css/footer.css" rel="stylesheet">
<link href="../css/adminPage.css" rel="stylesheet">
</head>
<body>
<%@ include file="../header.jsp" %>

	<div class="reviewList"> <!-- 리뷰 페이지 / 번호 작성자 내용 별점 날짜 -->
		<h1>한줄 리뷰 (관리자용)</h1>
			
		<div class="review_list_box">
			<table class="review_list"> <!-- review 리스트 -->
				<tr> 
					<th class="no"> 번호 </th>
					<th class="name"> 작성자 </th>
					<th class="menu"> 상품명 </th>
					<th class="content"> 내용 </th>
					<th class="star"> 별점 </th>
					<th class="time"> 날짜 </th>
				</tr>
			</table> <!-- qna 리스트 end -->
		</div>
	</div>

<%@ include file="../footer.jsp" %>
<script src="../js/adminReview.js" type="text/javascript"></script>
</body>
</html>
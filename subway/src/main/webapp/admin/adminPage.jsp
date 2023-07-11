<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link href="../css/header.css" rel="stylesheet">
<link href="../css/footer.css" rel="stylesheet">
<link href="../css/adminPage.css" rel="stylesheet">
</head>
<body>
<%@ include file="../header.jsp" %>

	<!-- 주문내역 확인 페이지 -->
	<div id="adminwrap"><!-- 주문내역 확인 페이지 전체 공간 -->
		
		<div id="adminHeader"><!-- 페이지 상단 -->
			<div class="orderToplist"><h3>주문목록</h3></div>
			<div class="orderDetail"><h3>주문상세</h3> 			
				<button onclick="finishView()" class="billBtn" >주문관리</button>
				<button onclick="reviewAdmin()" class="review">리뷰관리</button>
			</div>
		</div><!-- 페이지 상단 끝 -->
		
		<div id="adminBottom"><!--주문내역페이지 하단 공간 -->
			
			<div class="obList"><!-- 주문 간략 확인 사이드바 -->
				<!-- 주문 들어오면 간략정보 출력되는 공간임 -->
				
			</div><!-- 주문 간략 확인 사이드바 끝 -->
			
			<div class="odSpace"><!-- 주문 상세 확인 오른쪽 공간 -->
				<!-- 사이드바에서 메뉴 누르면 
					해당 주문 상세정보 확인 출력과
					환불, 완료 버튼 출력 됨 -->
				<div class="finSpace">
					
				</div>
			</div><!-- 주문 상세 확인 오른쪽 공간 끝 -->
		</div><!-- 주문내역 페이지 하단공간 끝 -->
	</div><!-- 주문내역 확인 페이지 전체 공간 끝 -->
 
<%@ include file="../footer.jsp" %>
<script src="../js/adminPage.js" type="text/javascript"></script>
</body>
</html>
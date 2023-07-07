<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link href="../css/adminPage.css" rel="stylesheet">
</head>
<body>
<%@ include file="../header.jsp" %>

	<!-- 주문내역 확인 페이지 -->
	<div id="adminwrap"><!-- 주문내역 확인 페이지 전체 공간 -->
		
		<div id="adminHeader"><!-- 페이지 상단 -->
			<div class="orderToplist"><h3>주문목록</h3></div>
			<div class="orderDetail"><h3>주문상세</h3> <button>리뷰관리</button></div>
		</div><!-- 페이지 상단 끝 -->
		
		<div id="adminBottom"><!--주문내역페이지 하단 공간 -->
			<div class="obList"><!-- 주문 간략 확인 사이드바 -->
				
				
			</div><!-- 주문 간략 확인 사이드바   -->
			<div class="odSpace"><!-- 주문 상세 학인 오른쪽 공간 -->
				<table class="odDlist">
					<tr>
						<th>재료 </th><th>:</th><th>확인사항</th>
					</tr>
					<tr>
						<td>주문번호 </td><td>:</td><td>1 </td>
					</tr>
					<tr>
						<td>메뉴</td><td>:</td><td>에그마요 </td>
					</tr>
					<tr>
						<td>bread</td><td>:</td><td>화이트</td>
					</tr>
					<tr>
						<td>cheese</td><td>:</td><td>슈레드</td>
					</tr>
					<tr>
						<td>toasting</td><td>:</td><td>true</td>
					</tr>
					<tr>
						<td>제외야채</td><td>:</td><td>피망, 할라피뇨</td>
					</tr>
					<tr>
						<td>sauce</td><td>:</td><td>랜치</td>
					</tr>
					<tr>
						<td>결제금액</td><td>:</td><td>5500 원 </td>
					</tr>
					<tr>
						<td>주문시간</td><td>:</td><td>2023-07-05 13:30</td>
					</tr>
					<tr>
						<td>연락처</td><td>:</td><td>01012341234 </td>
					</tr>
				</table>
				<div class="finishBtn">  
					<button class="refundBtn">환불</button><button class="realFn">완료</button>
				</div>				
			</div><!-- 주문 상세 확인 오른쪽 공간 끝 -->
		
		</div><!-- 주문내역 페이지 하단공간 끝 -->
	</div><!-- 주문내역 확인 페이지 전체 공간 끝 -->
 
<%@ include file="../footer.jsp" %>
<script src="../js/adminPage.js" type="text/javascript"></script>
</body>
</html>
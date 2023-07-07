<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>header</title>
<link href="css/header.css" rel="stylesheet">
</head>
<body>
	<div id = "headerAll">
	
		<div id = "header">
			<div class="headerTop">
				<a href="/subway/mainPage.jsp"><img class="header_logo"  src="\subway\img\header_logo.PNG"></a>
				<div class="header_right">
					<a href="#">로그인</a> <span class="point"> · </span> <a href="#">회원가입</a>
					<a href="#"><img class="global_icon" src="\subway\img\header_global_icon.PNG"></a>
				</div>
			</div>
			
			<ul class="headerBottom">
				<li class="drop_menu">
					<a href="#">메뉴소개</a>
						<ul class="sub_menu">
							<li><a href="#">샌드위치</a></li>
							<li><a href="#">랩</a></li>
							<li><a href="#">샐러드</a></li>
						</ul>
				</li>
				<li class="drop_menu">
					<a href="#">이용방법</a>
						<ul class="sub_menu">
							<li><a href="#">써브웨이 이용방법</a></li>
							<li><a href="#">단체메뉴 이용방법</a></li>
							<li><a href="#">신선한 재료 소개</a></li>
						</ul>
				</li>
				<li class="drop_menu">
					<a href="#">관리자</a>
						<ul class="sub_menu">
							<li><a href="#">주문확인</a></li>
							<li><a href="#">리뷰관리</a></li>
						</ul>
				
				</li>
			</ul>
		</div>
	</div>
	
	
	
	
	
	
	<script src="js/header.js" type="text/javascript"></script>
</body>
</html>
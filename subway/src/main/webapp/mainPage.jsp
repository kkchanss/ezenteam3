<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link href="css/header.css" rel="stylesheet">
<link href="css/footer.css" rel="stylesheet">
<link href="css/mainPage.css" rel="stylesheet">
<title>MainPage</title>
</head>
<body>
	<%@include file = "header.jsp" %>
	<div id = wrap>
		<img class="mainImg" src="img/main_h_img01.jpg">
		 
		<div class="mainMid">
			<img src="img/main_subwayMenu.PNG">
			<ul class="midUl">
				<!-- <li>클래식 <sapn class="line">|</sapn></li><li>클래식 <sapn class="line">|</sapn></li>
				<li>클래식 <sapn class="line">|</sapn></li>  <li>클래식</li> -->
			</ul>
		</div>
		
		<div class="products">	
			<div class="product"> 
					<img src="img/eggmayo.png"/>
					<div class="pinfo">
						<div class="pname"> 에그마요 </div>
						<div class="pcontent"> 부드러운 달걀과 고소한 마요네즈의 조합 </div>
					</div>
			</div>
			<div class="product"> 
					<img src="img/eggmayo.png"/>
					<div class="pinfo">
						<div class="pname"> 에그마요 </div>
						<div class="pcontent"> 부드러운 달걀과 고소한 마요네즈의 조합 </div>
					</div>
			</div>
			<div class="product"> 
					<img src="img/eggmayo.png"/>
					<div class="pinfo">
						<div class="pname"> 에그마요 </div>
						<div class="pcontent"> 부드러운 달걀과 고소한 마요네즈의 조합 </div>
					</div>
			</div>
			<div class="product"> 
					<img src="img/eggmayo.png"/>
					<div class="pinfo">
						<div class="pname"> 에그마요 </div>
						<div class="pcontent"> 부드러운 달걀과 고소한 마요네즈의 조합 </div>
					</div>
			</div>
		</div>
	</div>
	<%@include file = "footer.jsp" %>
	
	<script src="js/mainPage.js" type="text/javascript"></script>
</body>
</html>
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
	<div id = wrap> <!-- 전체 구역 -->
		<img class="mainImg" src="img/main_h_img01.jpg"> <!-- 메인 광고 -->
		 
		<div class="mainMid"> <!--  메인 중간 부분 -->
			<img src="img/main_subwayMenu.PNG">
			<ul class="midUl">
				<!-- <li>클래식 <sapn class="line">|</sapn></li><li>클래식 <sapn class="line">|</sapn></li>
				<li>클래식 <sapn class="line">|</sapn></li>  <li>클래식</li> -->
			</ul>
		</div> <!--  메인 중간 부분 end -->
		
		<div class="products">	<!-- 제품들  -->
		<!-- 	<div class="product"> 
					<img src="img/eggmayo.png"/>
					<div class="pinfo">
						<div class="pname"> 에그마요 </div>
						<div class="pcontent"> 부드러운 달걀과 고소한 마요네즈의 조합 </div>
					</div>
			</div> -->
		</div> <!-- 제품들 end  -->
		
		<div class="reviewList"> <!-- 리뷰 페이지 / 번호 작성자 내용 별점 날짜 -->
			<h1>한줄 리뷰</h1>
			
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
               
     <!--           <tr>
                  <td class="no"> 1 </td>
                  <td class="name"> 찬희 </td>
                  <td class="content"><a href="#"> 사장님이 친절해요 </a> </td>
                  <td class="star"> 1 </td> 
                  <td class="time"> 2023-07-09 </td>                
               </tr>
               
               <tr>
                  <td class="no"> 2 </td>
                  <td class="name"> 찬희 </td>
                  <td class="content"><a href="#"> 에그마요 추천합니다 </a> </td>
                  <td class="star"> 2 </td>   
                  <td class="time"> 2023-07-09 </td>              
               </tr> -->
               
            </table> <!-- qna 리스트 end -->
         </div>
			
			
		</div>
	</div> <!-- 전체 구역 end  -->
	<%@include file = "footer.jsp" %>
	
	<script src="js/mainPage.js" type="text/javascript"></script>
</body>
</html>
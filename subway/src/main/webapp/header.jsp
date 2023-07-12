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
                  <a class="title" href="\subway\itemInfo\itemInfoPage.jsp">메뉴소개</a>
               </li>
               <li class="drop_menu">
                  <a class="title" href="#">이용방법</a>
               </li>
               <li class="drop_menu">
                  <a class="title" href="#">새소식</a>
               </li>
               <li class="drop_menu">
                  <a class="title" href="#">써브웨이</a>
               </li>
               <li class="drop_menu">
                  <a class="title" href="\subway\review\reviewPage.jsp">리뷰 작성</a>
               </li>
               <li class="drop_menu">
                  <a class="title" href="\subway\admin\adminPage.jsp">관리자</a>
               </li>
               <li class="sub_menuBox">
               		<div class="sub_menuDiv">
                        <ul class="sub_menu">
                           <li><a href="\subway\itemInfo\itemInfoPage.jsp">샌드위치</a></li>
                           <li><a href="\subway\itemInfo\itemInfoPage.jsp">랩</a></li>
                           <li><a href="\subway\itemInfo\itemInfoPage.jsp">샐러드</a></li>
                        </ul>
                        
                        <ul class="sub_menu">
                           <li><a href="#">써브웨이 이용방법</a></li>
                           <li><a href="#">단체메뉴 이용방법</a></li>
                           <li><a href="#">신선한 재료 소개</a></li>
                        </ul>
                        
                        <ul class="sub_menu">
                           <li><a href="#">이벤트 / 프로모션</a></li>
                           <li><a href="#">뉴스 / 공지사항</a></li>
                           <li><a href="#">광고 영상</a></li>
                        </ul>
                        
                        <ul class="sub_menu">
                           <li><a href="#">써브웨이 역사</a></li>
                           <li><a href="#">써브웨이 약속</a></li>
                           <li><a href="#">매장 찾기</a></li>
                        </ul>
                        
                        <ul class="sub_menu">
                           <li><a href="\subway\review\reviewPage.jsp">리뷰 작성</a></li>
                        </ul>
                        
                    	<ul class="sub_menu">
                           <li><a href="\subway\admin\adminPage.jsp">주문확인</a></li>
                           <li><a href="\subway\admin\adminPage.jsp">리뷰관리</a></li>
                        </ul>
                   </div>
               </li>
            </ul>
      </div>
   </div>
   
   
   
   
   
   
   <script src="js/header.js" type="text/javascript"></script>
</body>
</html>
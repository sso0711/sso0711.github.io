---
layout: post
title: Web1 - Javascript
color: rgb(255,178,217)
tags: [web,javascript]
---

# Javascript
사용자가 웹페이지와 동적으로 상호작용하기 위한 언어
<br>

##### HTML언어로 제작된 웹페이지에 Javascript를 이용해 사용자와 상호작용
<br>
<br>
<br>
<br>
<br>
<br>
<br>

##### (1~4) HTML과 JavaScript의 만남
 <br>

## `1.버튼 만들기` (night 버튼과 day 버튼)
night 버튼을 누르면 검은 배경에 흰 글씨, day 버튼을 누르면 흰 배경에 검은 글씨가 나타나도록 만들기

 
```
<input type="button" value="night" onclick "
 document.querySelector('body').style.backgroundColor='black';
       (문서의 body태그를 선택한다.)

 document.querySelector('body').style.color='white';
 ">
```
 
```
<input type="button" value="day" onclick "
 document.querySelector('body').style.backgroundColor='white';
            
 document.querySelector('body').style.color='black';
 ">
```

* onclick의 값은 javascript로 써야함

* 버튼을 누르면 onclick 값이 실행되고 <body> 태그가 <body style="background-color: black; color: white,"> 로 바뀐다.

* style의 값은 css로 나타난다.
<br>
<br>
<br>
<br>
<br>


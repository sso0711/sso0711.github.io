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
<br>
 <br>
 <br>

<`input` type="button" `value="night"` onclick "
 document.querySelector('body').style.backgroundColor='black';<br>
       (문서의 body태그를 선택한다.)

 document.querySelector('body').style.color='white';<br>
 ">
<br>
 <br>
 <br>


<input `type="button"` value="day" `onclick"
 document.querySelector('body').style.backgroundColor='white';<br>
 document.querySelector('body').style.color='black';`
 <br>
 ">
<br>
<br>
<br>

* onclick의 값은 javascript로 써야함

* 버튼을 누르면 onclick 값이 실행되고 <body> 태그가 <body style="background-color: black; color: white,"> 로 바뀐다.

* style의 값은 css로 나타난다.
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## `2.<script>태그`
HTML코드로 Javascript가 시작됨을 알려줌.
<br>
<br>

`<script>`<br>
   document.write('helloworld');<br>
`</script>`
<br>
<br>

`<script>`<br>
   document.write(1+1);<br>
`</script>`

*HTML과는 다르게 계산 기능을 가짐.

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## `3.event들`
HTML 의 \<input> 태그 속성 중에 JavaScript 문법만을 사용하는 속성<br> 
(onclick, onchange, onkeydown)
<br>
 <br>

\<input type="button" value="hi" `onclick="alert('hi')"`>    
: hi 버튼 클릭 시 hi라는 알림창이 뜸

\<input type="text" `onchange="alert('changed')"`>         
: 사용자가 입력한 텍스트가 변하면 changed라는 알림창이 뜸

\<input type="text" `onkeydown="alert('key down!')"`>      
: 입력창에 무언가 입력되면 key down!이라는 알림창이 뜸
<br>
<br>

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FA5qKT%2FbtqPe2aQ87l%2FOaS4lxmMquU29VG92NUZm0%2Fimg.png)
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## `4.콘솔`
: 파일을 만들지 않고도 JavaScript 코드를 즉석에서 실행하는 방법

   * 콘솔창에서 실행되는 JavaScript는 웹페이지를 대상으로 실행된다.
<br>
<br>
<br>
 

(1) 콘솔창 열기

      마우스 우클릭 - 검사 - console
<br>
<br>

(2) JavaScript 코드 작성

   `alert('본문 내용'.length)`<br>
       -> 본문 내용의 글자 수를 알림창에 나타낸다.

<br>
<br>
<br>

```
*마우스 우클릭 - 검사 - elements  
 : 웹페이지의 소스코드를 볼 수 있다.

*마우스 우클릭 - 검사 - elements - esc키
 : 웹페이지의 소스코드 아래 콘솔창이 뜬다.
```

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## `5.자료형`
 (총 6개의 자료형 있음)  
 <br>

<u>1.숫자</u>

  산술연산자 :  +, -, *, /
<br>
<br>
<br>

<u>2.문자열</u>

   properties : `str.length`, `str.toUpperCase()`
<br>
<br>
<br>
 

<u>3.Boolean</u>

     true, false

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## `6.변수(variable)와 대입연산자`
`var` name = 1<br>
<br>

- 변수의 유용성 : 변수의 값을 바꿈으로써 반복 작업을 한번에 처리할 수 있음.
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## `7.비교연산자`
=== 같다(=)
&lt; 작다(<)
&gt; 크다(>)

```
<script>
    document.write(1===1) ;
</script>
```
- 위는 true를 출력함.
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## `8.조건문`
```
<script>
if (true) {
    document.write("t<br>") ;
} else {
    document.write("f<br>") ;
}
</script>
```
- if ()안의 값에 따라 if문이나 else문 중 하나가 선택됨.
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## `9.리팩토링(refactoring)`
가독성, 유지보수 위함.<br>
코딩하면서 틈틈이 필요.
<br>
<br>
<br>

document.querySelector('#id')`.value` = night
<br>

this`.value` = night
<br>

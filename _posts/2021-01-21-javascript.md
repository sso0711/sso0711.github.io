---
layout: post
title: Web2 - Javascript
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

```javascript
<script>
   document.write('helloworld');
</script>


<script>
   document.write(1+1);
</script>
```

- HTML과는 다르게 계산 기능을 가짐.
- body 태그의 최하단에 위치하는 것이 좋음

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

## input 태그 총정리
---
1. <input> : 평범하게 글자나 텍스트칸을 넣을 수있는 공간이 생기죠.
2. <input type=""> : 기존의 input에다가 type를 지정하여 type의 옵션을 넣으면,
다양한 모양이 됩니다. 단 입력이나 기타 등등의 모양 꼴로 변하죠.

3. <input type="text"> : 이건 <input>과 동일한 것인데, text를 넣을 수 있습니다.
4. <input type="password">: 이건 1번과 2번과 3번과 동일한데, 비밀번호로 지정되어 글자를 넣든 숫자를 넣든 **** <-이렇게 표시됩니다.

4. <input type="checkbox"> : 이건 체크박스로 나타납니다.
5. <input type="checkbox" checked> : 이건 체크박스의 선택된 것으로 나오죠.
6. <input type="checkbox" checked disabled> : 이건 체크되었다가 다시는 선택 못하게 하는거죠

7. <input type="radio"> : 이건 라디오 버튼으로 나타납니다.
8. <input type="radio" checked> : 이건 라디오 버튼의 선택된 것으로 나오죠.
9. <input type="radio" checked disabled> : 이건 선택되었다가 다시는 선택 못하게 하는거죠

10. <input type="hidden"> : 이건 숨김필드입니다. 값을 넘겨받을때 숨김속성으로 몰래 감춰지죠.
대부분 form태그의 중요한 속성을 사용할 때 하더군요.

11. <input type="image" src="이미지 경로및 주소"> 이건 이미지의 경로를 넣어 일반<img>태그 처럼 할 수 있습니다.
단 버튼이 이미지의 경로로 바뀌고,form 태그의 submit 태그와 함께 포함되어 있습니다.

12. <input type="reset"> : 이건 초기화 하는 버튼(영어로 submit 또는 초기화라고 나옴)
13. <input type="reset" value="초기화"> :  value값에 초기화라고하면 초기화라고 만들어줌

14. <input type="submit"> : 이건 전송버튼
15. <input type="submit" value="전송함"> : 전송버튼인데다가 버튼이름을 전송함 이라고 할 수있음.
16. <input type="file"> : 파일을 첨부할 때 사용하며, CSS와 곁들어서 사용 가능

＃ 기타 1
1. <input type="text" value="텍스트"> : 이렇게 사용하면 텍스트 칸에 텍스트 라고 글자가 이미 나와버림
2. <input type="text" value="텍스트 사이즈 지정" size="20"> : 텍스트 사이즈를 20만큼 지정
3. <input type="text" value="" name="text"> : php이나, 자바스크립트를 사용할때 변수를 넘거나 받을때 text라는
값을 받도록 name의 갑을 text라 지정하고 이 버튼의 태그 이름을 text라고 지정함
4. <input type="text" value="" name="text" style="border:1;color;red"> : 이건 CSS인데 여러모로 사용 할수있음.
굳이 설명을 하지 않겠음 CSS에서 color;red 라고 지정해주면, 텍스트칸의 글자색을 빨간색으로 지정해줌

＃ 기타2
특히 value는 <input>태그의 텍스트의 이름을 부여 할때 사용함
예를 들면, <input>과 <input value="텍스트칸 이에요"> 와 차이점을 알게 될 것임

각버튼마다 name값을 부여 할 수있음(name값은 자기마음대로 지정가능)
예를 들면) <input name="button">

각버튼마다, type를 지정할수 있다. 위의 설명을 보면 알겠죠?
type="text/password/hidden/radio/checkbox/file/submit/reset/image"

＃ 기타3
버튼에 CSS를 첨가하여 이쁘게 꾸밀 수있다.
<input name="button" style="background-color:purple;border-color:red;font-face:굴림;font-size:9pt;">
↑위의 처럼

# 기타4

disabled의 속성과 maxlength="15"의 속성
disabled속성은 input의 선택을 못하게 막아준다
<input type="text" value="" disabled>
<input type="text" value="ㅋㅋㅋ 금지욧" disabled>
<input type="radio" value="" checked disabled>
<input type="checkbox" value="" checked disabled>

그리고 maxlength 속성은 최대 글자 입력넣을 수있는 제한수입니다.
<input type="text" value="" maxlength="20"> <--이렇게 하면 글자 입력수를 20자리만 입력가능
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
- 동작하는 것은 똑같지만 효율적인 코드로 바꾸는 것
- 가독성, 유지보수 위함.<br>
- 코딩하면서 틈틈이 필요.
<br>
<br>
<br>

document.querySelector('#id')`.value` = night
<br>

this`.value` = night
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## `10. 배열과 반복문`
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## `11. 함수 (=메소드)`
---
<br>

- 반복되는 코드가 연속적이지 않을 때 반복문 대신 함수 사용  
\<script>태그 안에 

```javascript
function 함수이름(매개변수) {
   return a+b;
}
```
<br>
<br>
<br>

```javascript
const 함수이름 = (매개변수) => {a + b}
```
- `화살표함수` {}가 없을 경우에만 return
- 함수이름(매개변수)를 선언함으로써 코드 내용을 불러옴.

```javascript
function nightDayHandler(self) {
   self.value
}

<input onclick="
nightDayHandler(this) 
```
- this가 \<input> 태그를 선택

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## `12.객체(object)`
- 함수 기반.
- 정리정돈의 수단.
- 서로 연관된 함수와 변수를 그루핑
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## `13.파일로 묶어서 정리하기`
연관된 코드들을 파일로 묶어서 정리


#include <stdio.h>

int main(void)
{
   char name[];
   printf("Enter a first and last name:");
   scanf_s("%s",&name);
}



	


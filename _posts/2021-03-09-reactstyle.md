---
layout: post
title: React 스타일
color: rgb(242,85,44)
tags: [reactstyle]
---
*노마드 코더 유튜브 강의
<br>
<br>
<br>

## 강의 내용
SASS코드를 SASS설치 없이 사용하고, css파일 없이 css코드를 짜고, 클래스명 없이 css 작업하고, 미디어 쿼리,  css 코드를 React Native 앱으로 공유하는 방법




- 코드 재활용, webpack 건들지 않음, variable,mixins 사용 가능
- React Native에 작업한 css코드는 javascript object이다.

<br>
<br>
<br>
<br>
<br>
<br>

## 1.setup

1. create-react-app
2. App.css, App.test.js, index.css, logo.svg, registerService 파일 삭제
3. `App.css` 파일 생성
4. App.js파일에 `import "./App.css";`
```
class App extends Component {
    render() {
        return
    }
}
```
5. App.css파일에 버튼 속성을 적용해줌.
```
.button{
    border-radius:50px;
    padding:5px;
    min-width:120px;
    color:white;
    font-weight:600;
    -webkit-appearance:none;
    cursor:pointer;
    }

.button--success {
    background-color: #2ecc71;
}

.button--danger {
    background-color: #e74c3c;
}
```
6. 
prop에 따라 배경을 바꿔야 함.


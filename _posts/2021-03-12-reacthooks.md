---
layout: post
title: ReactHooks
color: rgb(242,85,44)
tags: [reacthooks]
---
노마드코더 https://nomadcoders.co/react-fundamentals/lectures/1546
<br>
<br>
<br>
<br>

## 선행지식
- movieApp 또는 React관련 다른 강의
- setState(), props
- terminal에 react와 nodejs가 설치되어 있어야 함

## 강의내용
- use state와 use effect와 같은 숨겨진 이론을 연습
- hooks library를 build
- hooks들을 npm package에 등록

## CodeSandbox 사용
- 코드를 저장하면 우측 브라우저가 자동으로 바뀜.
<br>
<br>
<br>
<br>
<br>
<br>

## Hooks
- react의 state machine에 연결하는 기본적인 방법
- functional component에서 state를 가질 수 있게 해줌
- class를 작성할 필요 없이 상태값과 여러 React의 기능을 사용할 수 있다.
- import {} from "react";
- use-interval, use-input, use-in-view...
---

- `useState()` 초기에 Initial State 세팅할 수 있는 옵션 제공 (괄호 안)  
&emsp; &emsp; &emsp; &emsp; &emsp;array로 2개의 value(값, 값을 변경)를 return

```

```

- `useTitle` react document의 title을 몇 개의 hooks와 함께 바꿈
- `useInput` input 역할
- `usePageLeave` 유저가 page를 벗어나는 시점을 발견하고 함수를 실행
- `useClick` 누군가 element를 클릭하는 시점을 발견
- `useFadeIn` 어떤 element든 상관없이 애니메이션을 element안으로 서서히 사라지게 만듦
- `useFullscreen` 어떤 element든 풀스크린으로 만들거나 일반 화면으로 돌아가게 함
- `useHover` 어떤 것에 마우스를 올렸을 때 감지
- `useNetwork` Online인지 Offline인지 감지
- `useNotification` notification API를 사용할 때 유저에게 알림 보내줌
- `useScroll` 스크롤을 사용할 때를 감지해 알려줌
- `useTabs` 웹사이트에 메뉴 또는 무엇이든간에 tab을 사용하기 쉽게 만들어줌
- `usePreventLeave` 유저가 변경사항이나 무엇이든간에 저장하지 않고 페이지를 벗어나길 원할 때 확인을 함
- `useConfirm` 
- `useAxios` HTTP requests client axios를 위한 wrapper



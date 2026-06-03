---
layout: post
title: Firebase
color: rgb(242,85,44)
tags: [solution challenge, firebase]
---

## Firebase란?

> 모바일 앱 개발을 위한 도구를 제공하는 Baas(Backend-as-a-service) 플랫폼이다. 자주, 반복되어 사용되는 기능들(인증, 데이터베이스 등) 을 서비스로 제공한다.

![스크린샷 2024-04-13 013143](https://github.com/sso0711/sso0711.github.io/assets/74605283/07e167f1-225b-4782-8693-09160d8e2b2f)

`cloud Firestore`
`cloud storage` 이미지,오디오,동영상 등 사용자 제작 콘텐츠를 저장하고 제공
`Authentication`

<br>
<br>
<br>

## 실시간 데이터베이스 (Realtime Database)

> NoSQL을 며, 데이터는 JSON 형식으로 저장된다.
> 연결된 모든 클라이언트에서 실시간으로 데이터 동기화
> 오프라인에서도 데이터 사용 가능

    네트워크 연결이 유실되면, 데이터베이스 SDK는 클라이언트 기기의 로컬 캐시를 이용해 변화를 저장한다. 다시 연결이 되면 이 로컬 데이터는 자동으로 동기화 된다.

데이터베이스 규칙을 설정하여 데이터 구조와 형식,사용자별 데이터 접근권한을 설정할 수 있다.

참고
https://medium.com/firebase-developers/what-is-firebase-the-complete-story-abridged-bcc730c5f2c0
https://firebase.google.com/docs/database?hl=ko

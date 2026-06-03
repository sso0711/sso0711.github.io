---
layout: post
title: docker, vm
color: rgb(242,85,44)
tags: [docker]
---

## Docker engine 실행 오류

![스크린샷 2024-09-30 232223](https://github.com/user-attachments/assets/27c102cf-8889-4890-9197-aeb9cd9377a1)

wsl환경에 문제가 생겨 docker engine이 실행이 되지 않았다.
아래의 방법들을 시도

1. wsl, docker 재설치
2. Windows 기능에서 `hyper-v` 켜기

다음과 같이 WSL의 network mode 수정
3-1. C:\Users\qkrth 디렉터리 하위의 `.wslconfig` 파일에 networkingMode=None 를 추가해주었다.
![image](https://github.com/user-attachments/assets/e2e2e560-d589-4b3c-8d76-483acda8a560)
(network-less mode로 변환)

3-2. `wsl --shutdown` wsl관련 모든 프로세스를 종료하고, 새로운 설정을 적용.

위의 오류 메시지를 보면 networkingmode가 NAT모드로 설정되어 있어서 (가상머신을 활용한 다른 프로젝트 진행 중에 )

# vm과 wsl의 차이점

![image](https://github.com/user-attachments/assets/bb62fdbd-6754-43ec-a177-89793b663260)
(출처:위키피디아)

`하이퍼바이저`란, 하드웨어 위에서 하드웨어 자원을 다른 가상머신에게 할당해주는 프로그램

`타입1 hyper-v` bare metal, native 하이퍼바이저는 "하드웨어 위에서 직접 구동됩니다
`타입2 hypervisor` hosted 하이퍼바이저는 "하드웨어 위의 호스트 OS위에서 구동됩니다

---
layout:            post
title:             "서버 다운시 원인 파악하기(Tomcat)"
menutitle:         "서버 다운시 원인 파악하기(Tomcat)"
tags:              server
category:          Mistakes & Tips
author:            geunyoung
cover:             /assets/mountain-alternative-cover.jpg
published:         true
cover:             /assets/mountain-alternative-cover.jpg
language:          KO
comments:          true
---

## 공부하게된 계기

개발을 하여 고객들에게 서비스를 제공하기 위해서

'공인IP를 열어 도메인을 매핑'시킨다고 한다.

이말을 처음 듣고 생겼던 의문들은

1) IP는 서비스되는 고유한 위치인데 어떻게 다른 IP에 매핑을 시킬까?

2) 공인으로 수정시 어짜피 모든 사람에게 오픈이 되는 것인데 공인IP를 통한 접근과 특정 포트를 오픈하는게 보안적으로 어떻게 다른 것인가?

였다.

여기에 대한 의문점을 풀기 위해 찾아보았다.

## 공인IP로 매핑한다?

역시 해결이 안되었다...

단순히 maven업데이트를 못받은 것인가?

maven 디렉토리에 존재하느 라이브러 삭제 및 업데이트 받기를 몇번째...

결과는 동일하게 실패...


## 오류 파악 하기 (성공)

문제는 pom.xml 설정에 있었다.

pom.xml 태그들에 대해 정확히 알아보지 않고 인터넷에 있는 그대로 쓰다가 크게 데였다.

scope의 특성때문에 에러가 났던것이었다.

## 원인 정리

 - compile : 컴파일 할때 필요. 테스트 및 런타임에도 클래스 패스에 포함 된다. scorp 을 설정 하지 않는 경우 기본값이다.
 - runtime : 런타임에 필요. JDBC 드라이버 등이 예가 된다. 컴파일 시에는 필요하지 않지만, 실행 시에 필요한 경우.
 - provided : 컴파일 시에 필요하지만, 실제 런타임 때에는 컨테이너 같은 것에서 제공되는 모듈. servlet, jsp api 등이 이에 해당. 배포시 제외된다.
 - test : 테스트 코드를 컴파일 할때 필요. 테스트시 클래스 패스에 포함되며, 배포시 제외된다.
 
나의 세팅은 provided로 되어 있어 로컬에서 구동시 적용이 안되었던 것이었다.

pom.xml태그에 대해 다시 공부하여 되는 계기가 되었다.

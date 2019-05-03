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

## 에러 발생

잘 되고 있던 서비스가 갑작스럽게 죽었다는 문의가 왔다.

서버 환경은 Nginx/Tomcat이 었으며,
서비스의 인프라는 Web Server 2대, WAS 2대였다.

잘되던 서버가 갑자기 죽었다?

원인을 파악하기 시작했다.


## 문제 접근 1

우선 서비스 로그를 확인하였다. WAS한대에서는 로그가 있는 반면에 다른 WAS에서는 서비스 로그가 없는 것을 확인하였다.

거기서 파악할 수 있는 것은 우선 WebServer(Nginx)에서 문제가 있었다면 WAS 2대 다 서비스 로그가 안찍혀야하지만 한대에 찍혀있다는 것에서 WebServer에는 문제가 없다고 생각했으며, WAS가 제대로 종료되었으면 클러스터링으로 인해 문제가 되지 않았을텐데 계속해서 사용자가 불편함을 겪었다면 서버가 온전한 상태로 켜져 있지 않은 상태라고 생각하였다.


## 문제 접근 2

WAS 문제로 인식 후에 catalina의 로그를 확인.

<aside>
<figure>
<img src="{{ "/media/img/Mistakes/server_error01.png" | absolute_url }}" />>
</figure>
</aside>

```text


```

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

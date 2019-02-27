---
layout:            post
title:             "WebtoB - 도메인을 통해 여러 Application 서비스 하기"
menutitle:         "WebtoB - 도메인을 통해 여러 Application 서비스 하기"
tags:              WebtoB
category:          Server
author:            geunyoung
cover:             /assets/mountain-alternative-cover.jpg
published:         true
redirect_from:     "/server1/"
cover:             /assets/mountain-alternative-cover.jpg
language:          KO
comments:          true
math:		   false
---

하나의 도메인에 여러 어플케이션들을 서비스를 해야할때가 있다.
하나의 도메인에 하나의 서버에 여러개의 서비스를 세팅하거나
하나의 도메인에 여러개의 서버레 여러개의 서비스 세팅하는 방법을 알아보자

## 설정파일

전체적인 WebtoB설정은 ${웹투비홈}/config/http.m 에서 한다.
해당 설정파일에는 아래의 내용에 대해 설정을 해야한다.
 - 노드(NODE) : 개별적인 HOST Machine에 대한 기능 정의
 - 쓰레드(HTH_THREAD) : 쓰레드 설정
 - 가상호스트(VHOST) : 실제로는 하나의 WebtoB가 동작하지만 각지 다른 URL로 다른 문서를 제공하도록 함으로서 마치 여러 개의 Server가 Service를 제공하는 것처럼 보이도록 함
 - 서버그룹(SVRGROUP) : Service Process의 논리적 연관성에 따라 그룹으로 관리
 - 서버(SERVER) : Service를 제공하는 Process
 - URI : 서비스가 링크될 URI
 
## 서비스 분산시키기

```xml

*NODE
SAPWBBN1	
	WEBTOBDIR="/jeus/webtob", 
	SHMKEY = 54000,
	DOCROOT="/jeus/webtob/docs",
	PORT = "8088", 
	HTH = 1,
	#Group = "nobody",
	#User = "nobody",
	NODENAME = "$(NODENAME)",
	ERRORDOCUMENT = "503",
	#Options="IgnoreExpect100Continue",
	JSVPORT = 9900,
	IPCPERM = 0777,
	LOGGING = "log1",
	ERRORLOG = "log2",
	SYSLOG = "syslog"

*HTH_THREAD
hth_worker
	SendfileThreads = 4,
	AccessLogThread = Y,
	#ReadBufSize=1048576, #1M
	#HtmlsCompression="text/html",
	#SendfileThreshold=32768,
	WorkerThreads=8

*VHOST
호스트명
	DOCROOT="/jeus/webtob/docs",
	HOSTNAME = :"도메인명",
	HOSTALIAS = "해당 도메인에 매핑될 IP혹은 도메인",
	PORT = "포트",
	ServiceOrder = "uri,ext",
	ERRORDOCUMENT = "400,401,403,404,405,406,503",
	METHOD = "GET, POST, HEAD, -OPTIONS",
	LOGGING = "acc_App",
	ERRORLOG = "err_App"

*SVRGROUP
htmlg		   SVRTYPE = HTML
서버그룹1		SVRTYPE = JSV, VhostName = "호스트명"
서버그룹2		SVRTYPE = JSV, VhostName = "호스트명"
서버그룹3		SVRTYPE = JSV, VhostName = "호스트명"

*SERVER
서버1 	SVGNAME = 서버그룹1,   MinProc = 30, MaxProc = 30
서버2 	SVGNAME = 서버그룹2,   MinProc = 30, MaxProc = 30
서버3 	SVGNAME = 서버그룹3,   MinProc = 30, MaxProc = 30

*URI
URL이름1  	Uri = "/루트컨텍스트1", Svrtype = JSV, SVRNAME = 서버1, VHOSTNAME ="호스트명"
URL이름2	Uri = "/루트컨텍스트2", Svrtype = JSV, SVRNAME = 서버2, VHOSTNAME ="호스트명"
URL이름3	Uri = "/루트컨텍스트3", Svrtype = JSV, SVRNAME = 서버3, VHOSTNAME ="호스트명"
URL이름4	Uri = "/루트컨텍스트4", Svrtype = JSV, SVRNAME = 서버3, VHOSTNAME ="호스트명"

...이후 생략...

```

도메인/루트컨텍스트3을 통해서 통신이 들어오면 서버3에 서비스되고 있는 투트컨텍스트가 루트컨텍스트3인 서비스와 매핑이 된다.

## 해당 환경설정 적용시키기

리눅스 기준 명령어
컴파일(wscfl -i http.m) 웹서비스 껏다가(wsdown -i) 다시 켜면(wsboot -i) 적용완료




---
layout:            post
title:             "공인IP와 도메인이란?"
menutitle:         "공인IP와 도메인이란?"
tags:              domain
category:          Network
author:            geunyoung
cover:             /assets/mountain-alternative-cover.jpg
published:         true
cover:             /assets/mountain-alternative-cover.jpg
language:          KO
comments:          true
---

## 오류 현상 1

pom.xml에 아래의 라이브러리를 추가했더니
```xml
		<dependency>
			<groupId>commons-net</groupId>
			<artifactId>commons-net</artifactId>
			<version>3.5</version>
      <scope>provided</scope>
		</dependency>
```

로컬 구동시 아래와 같은 에러가 발생하였다.
```text
... noClassDefFound error on ftp client: org.apache.commons.net.ftp.FTPClient

```

으잉? 왜 그러지...

## 오류 파악하기 (실패)

역시 처음에는 단순히 라이브러리가 추가가 안된거겠지 하면서,
project explorer에서 해당 라이브러리를 찾았았더니 존재하였다...

음... java build path에 안 잡힌것 인가?

찾아봤더니 역시나 잡혀있었다...


해당 라이브러리는 서버켤때부터 적용이 되어야 하나?
deploy assembly에 따로 추가!

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

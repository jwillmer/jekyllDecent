---
layout:            post
title:             "UTF-8 Encoding 하기"
menutitle:         "UTF-8 Encoding 하기"
tags:              Spring Encoding
category:          Spring
author:            geunyoung
cover:             /assets/mountain-alternative-cover.jpg
published:         true
cover:             /assets/mountain-alternative-cover.jpg
language:          KO
comments:          true
math:		   false
---

## 소스 세팅 전에...

인코딩 관련하여 설정을 할때 한부분만 설정한다고 되는것이 아니라 여러 부분에서 바꿔줘야한다. 어디를 바꿔야하는지는 데이터들이 어떤 경로를 통해 주고받는지 알면 어디를 설정해줘야하는지 더 쉽게 알 수 있다.

<aside>
<figure>
<img src="{{ "/media/img/Spring/UTF8.PNG" | absolute_url }}" />
</figure>
</aside>

위의 그림으로 보면서 인코딩이 필요한 부분들을 알아보자.

우선 필요한 작업이 WebServer/WAS를 통과할 때 인코딩이 되어있는지,
두번째가 어플리케이션에 들어올 때 인코딩이 되어있는지,
세번째가 JSP컴파일시 인코딩이 되어 있는지이다.

그래도 안된다면 받은 Request를 프로토콜이 UTF-8이 되어있는지 확인해보자.

## 세팅

### Webserver(Apache/Tomcat) 기준 UTF-8 수정

Server의 server.xml을 아래와 같이 수정

```xml

<Connector connectionTimeout="20000" port="8080" protocol="HTTP/1.1" redirectPort="8443" URIEncoding="UTF-8"/>
<Connector port="8009" protocol="AJP/1.3" redirectPort="8443" URIEncoding="UTF-8"/>

```

### 어플리케이션 UTF-8수정

Application에 있는 web.xml을 아래와 같이 수정
 
```xml

	<filter>
    	<filter-name>encodingFilter</filter-name>
    	<filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
    	<init-param>
    	  	<param-name>encoding</param-name>
      		<param-value>UTF-8</param-value>
    	</init-param>
  	</filter>
  	<filter-mapping>
    	<filter-name>encodingFilter</filter-name>
    	<url-pattern>/*</url-pattern>
  	</filter-mapping>

```
  
### 세번째 시도

 그 다음으로 확인한 것은 JEUS세팅이었다. JEUS Setting관련하여 인터넷 검색해보니 JSP 파일의 변화를 인식하고 적용시켜주는 기능이 있었다.
 

 
해당 부분이 체크가 되어 있으면 된다. 체크후 재배포를 하였지만 결과는 동일...
다음으로 찾은 것은 JSP가 반영되면 compile된 소스는 $JEUS_HOME/webhome/컨테이너명/generated/어플리케이션/jeus_jspwork 저장된다는 내용이며,
여기의 파일들을 지우고 다시 배포해보라는 것이었다. 이것도 해보았지만 역시 실패. 하지만 컴파일된 경로에 로그에서 보던 800_previewUseDevice_5fjsp.java 파일을 찾았고 디컴파일해서 소스확인해보니 정말 B에 대해서 찾는 로직이 있었던 것이었다.


## 문제 해결

왜 800_previewUseDevice_5fjsp.java에서 B라는 값을 찾을까? 해답은 JSP 라이플 사이클에서 찾을 수 있었다. 

<aside>
<figure>
<img src="{{ "/media/img/Mistakes/jsplifecycle.png" | absolute_url }}" />
</figure>
</aside>

에러 원인은 서블릿이 아닌 서블릿 호출 후 리턴되는 JSP파일의 컴파일이 잘못되어 있던 것이었다.
호출하는 JSP가 아닌 리턴되는 JSP확인해보니 B라는 값에 대해서 "c:set에서 B가 빈값이면 영역을 hide()"라는 로직이 컴파일되면서 B.equals("")로 변환되었고 그곳에서 null point exception이 난 것이다. 해당 로직을 수정하면서 문제가 해결되었다.

그럼 왜 로컬에선 잘되었고 반영시 문제가 되었을까?

로컬에서는 JVM을 1.8로 세팅을 하였고 JEUS는 기본적으로 JVM을 1.6기반으로 만든다고 한다. 그래서 JVM의 버전이 달라 컴파일 방식이 다른것으로 판단된다.


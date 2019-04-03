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
  
### JSP수정

jsp 맨 위의 페이지에 아래 내용 추가

```jsp

<%@ page session="false" pageEncoding="UTF-8" contentType="text/html; charset=UTF-8" %>

```

### Request 프로토콜 추가

보통 저기 3단계까지하면 인코딩이 제대로 되었다. 근데 페이지를 redirect할 때나 값을 다시 JSP 페이지로 넘어갈때 인코딩이 안될때가 있다. 그럼 타고있는 Controller를 찾아서 UTF-8 프로토콜을 추가해준다. 

ex)

```java

@GetMapping(value = "/test", produces = "text/plain;charset=UTF-8")
public String test(@Valid JavaBean bean, BindingResult result) {
	return "hello world"
}


```

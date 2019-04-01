---
layout:            post
title:             "Apach/Tomcat - SSL 등록 및 교체"
menutitle:         "Apach/Tomcat - SSL 등록 및 교체"
tags:              Server
category:          Server
author:            geunyoung
cover:             /assets/mountain-alternative-cover.jpg
published:         true
redirect_from:     "/server2/"
cover:             /assets/mountain-alternative-cover.jpg
language:          KO
comments:          true
math:		   false
---

## 환경파일 찾기

우선 Apache 파일 위치부터 찾아보자.

필자의 해당 서비스 인프라는

OS : Windows

Server : Apache/Tomcat

이다.

<aside>
<figure>
<img src="{{ "/media/img/Server/apache.png" | absolute_url }}" />
</figure>
</aside>

```xml

<![CDATA[
	SELECT
]]>			
	<foreach collection="list" item="item" index="index" separator=",">
		#{item}
	</foreach>	
<![CDATA[
	FROM 
    테이블명
]]>

```

## 원인

분명 문제가 없어보이는데 왜 안되는 거지? 혹시 foreach문이 잘못되었나? 하며 루프문에 대해 검색해가며 원인을 찾아보려했지만 해결이 할 수 없었다.
원인을 바로바로!!!
변수를 받는 #{item}에 있었다. #{}로 선언을 하면 mybatis문법상 ''를 붙여서 쿼리가 실행이 된다는 것이다.
즉, select 'a','b','c' from BBB으로 인식이 된것이다.
${}으로 수정하니 정상작동하였다.




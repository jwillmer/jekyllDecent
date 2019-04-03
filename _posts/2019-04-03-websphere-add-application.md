---
layout:            post
title:             "Websphere - 도메인 매핑이 안됨"
menutitle:         "Websphere - 도메인 매핑이 안됨"
tags:              Websphere
category:          Mistakes & Tips
author:            geunyoung
cover:             /assets/mountain-alternative-cover.jpg
published:         true
cover:             /assets/mountain-alternative-cover.jpg
language:          KO
comments:          true
---

콘솔을 통해 애플리케이션을 설치를 완료를 하고 도메인을 통해 호출을 하려했는데 404에러가 발생하였다.

분명 Web Server, WAS, vhost, root Context 등 다 제대로 값이 들어갔는데 안되는 것이었다.

예시)
select columnName from AAA으로  a, b, c, d를 뽑았으면
select a,b,c,d from BBB라는 쿼리를 날려야한다.

## 오류가 났던 XML

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


---
layout:            post
title:             "ORA-00923: FROM 키워드가 필요한 위치에 없습니다."
menutitle:         "ORA-00923: FROM 키워드가 필요한 위치에 없습니다."
date:              2019-02-11 00:40:00 +0300
tags:              ORACLE 오류
category:          Mistake
author:            geunyoung
cover:             /assets/mountain-alternative-cover.jpg
published:         true
redirect_from:     "/mistake1/"
cover:             /assets/mountain-alternative-cover.jpg
language:          KO
comments:          true
math:		   false
---
이번 추가개발 건에서 MSSQL과 Oracle을 같이 쓸 일이 생겼는데
분명 Tool을 통해 잘만 실행이 되면 쿼리가 서버 내에선 아래와 같은 에러를 뱉었습니다

Caused by: org.apache.commons.dbcp.SQLNestedException: Cannot create PoolableConnectionFactory (ORA-00923: FROM 키워드가 필요한 위치에 없습니다.
)

몇시간을 헤매하다 알고보니 너무 허무한 에러였습니다.ㅋㅋㅋㅋㅋ
validation query 에서 오류가 났던 것이었습니다. 

```xml
<bean id="oracle" class="org.apache.commons.dbcp.BasicDataSource">
        <property name="driverClassName" value="oracle.jdbc.driver.OracleDriver" />
        <property name="validationQuery" value="SELECT 1" />
</bean>
```

또 다시 같은 실수를 반복하지 않기 위해 남깁니다...

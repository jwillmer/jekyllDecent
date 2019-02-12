---
layout:            post
title:             "Telnet과 Ping의 차이"
menutitle:         "Telnet과 Ping의 차이"
tags:              Tenet Ping
category:          Network
author:            geunyoung
cover:             /assets/mountain-alternative-cover.jpg
published:         true
redirect_from:     "/mistakes1/"
cover:             /assets/mountain-alternative-cover.jpg
language:          KO
comments:          true
math:		   false
---

저도 그랬고 많은 사람들이 
Telnet은 포트 열였는지 확인을,
Ping은 IP가 열였는지 확인하는 용도 정도로만 알고 있습니다.

이전에 시스템 개발을 할 때,
OS(CentOS) 방화벽 및 WS/WAS(WebtoB/JEUS) 방화벽 까지 세팅을 마치고
Ping과 Telnet을 테스트 하는데
Ping 테스트를 할때 응답이 잘오는데 Telnet 테스트를 할때는 응답이 오지않아 
"뭐가 이상한거지?"하면 엄한 곳을 수정하면서 시간을 엄청 투자한 경험이 있습니다.

또, 다른 시스템과 연동시 방화벽 해제나 인프라 세팅 관련해서
요청을 하거나 어디서 막히고 있는지 파악하여 그 개발자와 이야기를 해야하는데
이럴때 ping과 telnet의 개념를 알면 이유를 들으며 여기가 문제가 되고 있다고 말할 수 있을 것입니다.



'분명 내가 개발한 쿼리에선 FROM절이 필요없는데 뭐지?'

몇시간을 헤매다 알고보니 너무 허무한 에러였습니다.ㅋㅋㅋㅋㅋ
validation query 에서 오류가 났던 것이었습니다. 

```xml
<bean id="oracle" class="org.apache.commons.dbcp.BasicDataSource">
        <property name="driverClassName" value="oracle.jdbc.driver.OracleDriver" />
        <property name="validationQuery" value="SELECT 1" />
</bean>
```
MSSQL이나 MySQL에선 해당 쿼리가 지원하지만 Oracle에서 지원하지 않는다는 사실!
validation query를 select 1 from dual로 바꾸고 해결~

또 다시 같은 실수를 반복하지 않기 위해 남깁니다!


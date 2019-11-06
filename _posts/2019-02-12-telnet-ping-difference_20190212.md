---
layout:            post
title:             "Telnet과 Ping의 차이"
menutitle:         "Telnet과 Ping의 차이"
tags:              Tenet Ping
category:          Network
author:            geunyoung
cover:             /assets/mountain-alternative-cover.jpg
published:         true
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
"뭐가 이상한거지?"하며 엄한 곳을 수정하면서 시간을  투자한 경험이 있습니다.

또, 다른 시스템과 연동시 방화벽 해제나 인프라 세팅 관련해서
요청을 하거나 어디서 막히고 있는지 파악하여 그 개발자와 이야기를 해야하는데
이럴때 ping과 telnet의 개념를 알면 이유를 들으며 여기가 문제가 되고 있다고 말할 수 있을 것입니다.

## Telnet과 Ping의 개념

우선 통신을 할때 아래의 7단계에 따라 통신을 하게 됩니다.

<aside>
<figure>
<img src="{{ "/media/img/network/7layer.PNG" | absolute_url }}" />
<figcaption>OSI 7 Layer Model</figcaption>
</figure>
</aside>

Sender에서 Reciever에서 통신을 할 때 
Sender의 7 Layer에서 1 Layer로, Reciever의 1 Layer에서 7Layer로 가치게 됩니다.

Ping은 3 Layer를 확인을 하고 Telnet은 5 Layer를 확인하는 거죠.

## 경험

즉, ping에서 응답이 오지 않는다면 장비(H/W, OS, NETWORK)에 대한 확인을
telnet에 대해 응답이 없으면 해당 서비스에 대한 확인이 필요합니다.

이것을 토대로 인프라 세팅을 하거나 요청할때 작업을 하였고,
제가 이전에 말했던 문제 원인은 Ping은 잘가는데 Telnet이 응답하지 않은 원인은 Telnet에 대한 정의에서 찾을 수 있었습니다.
Telnet은 말그대로 서.비.스! 를 체크를 합니다.
저는 OS, Server세팅을 마무리하고 잘 뚫렸나 확인하려 Telnet 테스트를 했지만, 이 당시 instance를 올려지 않아 
해당 IP 및 PORT는 열려있었지만 서.비.스! 가 실행되고 있지 않아 응답이 없었던 것입니다.

지금보면 참 어이없는 실수인데
그 당시 위의 개념을 몰랐을때 얼마나 고생을 했는지....ㅋㅋㅋ

이 글을 저보고 저와 같은 실수를 하지 않길 바랍니다~


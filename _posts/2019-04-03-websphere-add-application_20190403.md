---
layout:            post
title:             "Websphere - 도메인 매핑이 안됨"
menutitle:         "Websphere - 도메인 매핑이 안됨"
tags:              Websphere
category:          Mistakes & Tips
author:            geunyoung
cover:             /assets/mountain-alternative-cover.jpg
published:         true
language:          KO
comments:          true
---

## 오류 현상

콘솔을 통해 애플리케이션을 설치를 완료를 하고 도메인을 통해 호출을 하려했는데 404에러가 발생하였다.
분명 Web Server, WAS, vhost, root Context 등 다 제대로 값이 들어갔는데 안되는 것이었다.
이미 서비스 되고 있는 웹서버 및 어플리케이션서버에 어플리케이션만 추가했는데 왜 안되는거지?
조금 더 자세히 살펴보니, vhost에 매핑되어 있는 포트에 관해서 서비스가 실행되지 않았고, 실제 서비스가 실행되고 있는 포트로는 호출이 잘되었다.

<aside>
<figure>
<img src="{{ "/media/img/Mistakes/host1.PNG" | absolute_url }}" />
<figcaption>위의 포트가 실제 HTTP 요청 포트</figcaption>
</figure>
</aside>

더욱 미궁속으로 빠져드는데....


## 오류 원인

일반적으로 어플리케이션을 설치하면서 가상호스트, 웹서버, WAS를 매핑하면 자동적으로 웹서버, WAS에서도 매핑이 되야하는데 웹서버에 해당 어플리케이션이 제대로 되지 않은 것이다. 

파악은 아래 사진의 설정에서 

<aside>
<figure>
<img src="{{ "/media/img/Mistakes/websphere10.png" | absolute_url }}" />>
</figure>
</aside>

보기를 눌러서 나온 설정에서 추가한 내용이 빠져있는 것이었다.

## 오류 해결

엇, 그럼 적용하려면 웹서버를 꺼야하나? 해당 웹스피어는 운영서버도 같이 반영되어 있어 끄면 운영서비스도 죽게 되는데...?

그렇게 이것저것 찾아보다 웹서버를 죽이지 않고 설정을 추가하는법이 있었다.

<aside>
<figure>
<img src="{{ "/media/img/Mistakes/websphere11.PNG" | absolute_url }}" />>
</figure>
</aside>

그림에서처럼 웹서버 선택 후 플러그인 생성 후, 플러그인 전파 클릭하면 된다.

이후 웹브라우저를 통해 호출되는 것을 확인하였다.

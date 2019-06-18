---
layout:            post
title:             "JsonNode와 ObjectNode 차이"
menutitle:         "JsonNode와 ObjectNode 차이"
tags:              JsonNode ObjectNode
category:          Java
author:            geunyoung
cover:             /assets/mountain-alternative-cover.jpg
published:         true
cover:             /assets/mountain-alternative-cover.jpg
language:          KO
comments:          true
---

## JsonNode와 ObjectNode

자바 프로젝트를 진행하면 Json Data를 주고 받을 때 JsonNode객체와 ObjectNode객체를 자주사용한다.

그러면 둘이 어떤 차이가 있고 어떻게 활용하는지 알아보자

### 개념

개념적으로 따저본다면, ObjectNode는 JsonNode의 상위 개념이다.

ObjectNode의 하위 객체로는 JsonNode 외에도 ArrayNode 등이 존재한다.

즉, JsonNode의 생김새를 보면 {}와 같이 생겼고 ArrayNode는 []와 같이 생겼으며,

ObjectNode는 두 생김새를 다 받일 수 있다.

다르게 말하자면 JsonNode를 ObjectNode로 일반적으로 캐스팅시에 에러가 날 확률이 적(없)지만,

ObjectNode를 JsonNode로 캐스팅 시엔 에러가 날 수 있다.<--무조건 나는 것은 아니고...


### 활용 예


JsonNode의 메소드를 본다면 값을 넣는 용도가 아닌 주고 받는 용도로 보인다.

메소드들이 대체적으로 get을 해오거나 is를 통해 맞는지 아닌지 boolean값을 주는 것들로 이루어져있다.

반면 ObjectNode는 그런 메소드뿐만 아니라 put이나 remove 등과 같이 값을 추가하거나 제거할 수 있는 메소드들이 존재한다.

그래서 필자는 Json형태로 데이터를 보내고 싶을 때 ObjectNode를 통해 Json형식으로 만들 후 JsonNode로 변환 후 전달하는 형식의 코드를 자주 사용한다.

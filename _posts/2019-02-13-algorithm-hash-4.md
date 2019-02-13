---
layout:            post
title:             "베스트앨범"
menutitle:         "해시를 이용한 알고리즘 4"
tags:              Algorithm Hash
category:          Algorithm
author:            geunyoung
cover:             /assets/mountain-alternative-cover.jpg
published:         true
redirect_from:     "/algoith4/"
cover:             /assets/mountain-alternative-cover.jpg
language:          KO
comments:          true
math:		   false
---



## 문제설명

스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.

1.속한 노래가 많이 재생된 장르를 먼저 수록합니다.
2.장르 내에서 많이 재생된 노래를 먼저 수록합니다.
3.장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.

노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때, 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.

## 제한사항
 - genres[i]는 고유번호가 i인 노래의 장르입니다.
 - plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
 - genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.
 - 장르 종류는 100개 미만입니다.
 - 장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
 - 모든 장르는 재생된 횟수가 다릅니다.


## 입출력 예
입출력 예 #1 앞headgear에 해당하는 의상이 yellow_hat, green_turban이고 eyewear에 해당하는 의상이 blue_sunglasses이므로 아래와 같이 5개의 조합이 가능합니다.

입출력 예 #2 face에 해당하는 의상이 crow_mask, blue_sunglasses, smoky_makeup이므로 아래와 같이 3개의 조합이 가능합니다.



## 본인답안

```java
import java.util.HashMap;
import java.util.Iterator;
import java.util.Set;

class Solution {
    public int solution(String[][] clothes) {
    	HashMap<String, Integer> hashmap = new HashMap<String, Integer>();
    	for(String clothe[] :clothes){
    		if(!hashmap.containsKey(clothe[1])){
    			hashmap.put(clothe[1],2); //안 입는 경우 포함해서 
    		}else{
    			hashmap.put(clothe[1], hashmap.get(clothe[1]).intValue() +1);
    		}
    	}
    	
    	Set set = hashmap.keySet();
    	Iterator iterator = set.iterator();
    	
    	int choices = 1;
    	while(iterator.hasNext()){
    		String key = iterator.next().toString();
    		choices = choices*hashmap.get(key).intValue();
    	}
    	
    	choices -= 1;  //다 안입는 경우 제거
        return choices;
    }
}
```


## 점수가 높았던 답안

```java
import java.util.HashMap;
import java.util.Iterator;
class Solution {
    public int solution(String[][] clothes) {
        int answer = 1;
        HashMap<String, Integer> map = new HashMap<>();
        for(int i=0; i<clothes.length; i++){
            String key = clothes[i][1];
            if(!map.containsKey(key)) {
                map.put(key, 1);
            } else {
                map.put(key, map.get(key) + 1);
            }
        }
        Iterator<Integer> it = map.values().iterator();
        while(it.hasNext()) {
            answer *= it.next().intValue()+1;
        }
        return answer-1;
    }
}
```

## 알게된 점 및 아쉬운 점

 - Iterator를 통해 key와 value를 가져올 때 불필요한 코드가 많아 보이네요

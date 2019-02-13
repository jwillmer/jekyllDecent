---
layout:            post
title:             "완주하지 못한 선수"
menutitle:         "해시를 이용한 알고리즘 1"
tags:              Algorithm Hash
category:          Algorithm
author:            geunyoung
cover:             /assets/mountain-alternative-cover.jpg
published:         true
redirect_from:     "/algorith1/"
cover:             /assets/mountain-alternative-cover.jpg
language:          KO
comments:          true
math:		   false
---



## 문제설명
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

## 제한사항
 - 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
 - completion의 길이는 participant의 길이보다 1 작습니다.
 - 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
 - 참가자 중에는 동명이인이 있을 수 있습니다.


## 입출력 예
예제 #1 leo는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
예제 #2 vinko는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
예제 #3 mislav는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.

participant	                            completion	                      return
[leo, kiki, eden]                      	[eden, kiki]	                    leo
[marina, josipa, nikola, vinko, filipa]	[josipa, filipa, marina, nikola]	vinko

## 본인답안

```java
class Solution {
    public String solution(String[] participant, String[] completion) {
        for(int i = 0; i < participant.length; i++){
            boolean finish = true;
            
            for(int j = 0; j < completion.length; j++){
                if(completion[j].equals(participant[i])){
                    completion[j] = "";
                    finish = false;
                    break;
                }
            }
            
            if(finish){
                return participant[i];
            }
        }      
        return "문제에 맞지 않는 현상이 발견 되었습니다.";
    }
}
```

## 알게된 점 및 아쉬운 점

 - 자꾸 String배열에 length함수가 아닌 size함수를 사용한다. 베열은 length, 리스트가 size()!
 - equals() 만족하면 배열에서 제거하고 팠지만 찾지 못해서 ""값으로 대체. 개인적으로 위험하다고 판단되
 - 푸는 것만 급급해 해쉬를 사용할 생각을 못했네요.

## 점수가 높았던 답안

```java
import java.util.HashMap;

class Solution {
    public String solution(String[] participant, String[] completion) {
        String answer = "";
        HashMap<String, Integer> hm = new HashMap<>();
        for (String player : participant) hm.put(player, hm.getOrDefault(player, 0) + 1);
        for (String player : completion) hm.put(player, hm.get(player) - 1);

        for (String key : hm.keySet()) {
            if (hm.get(key) != 0){
                answer = key;
            }
        }
        return answer;
    }
}
```


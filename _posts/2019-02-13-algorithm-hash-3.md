---
layout:            post
title:             "위장"
menutitle:         "해시를 이용한 알고리즘 3"
tags:              Algorithm Hash
category:          Algorithm
author:            geunyoung
cover:             /assets/mountain-alternative-cover.jpg
published:         true
redirect_from:     "/algoith3/"
cover:             /assets/mountain-alternative-cover.jpg
language:          KO
comments:          true
math:		   false
---



## 문제설명

스파이들은 매일 다른 옷을 조합하여 입어 자신을 위장합니다.

예를 들어 스파이가 가진 옷이 아래와 같고 오늘 스파이가 동그란 안경, 긴 코트, 파란색 티셔츠를 입었다면 다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스를 착용하거나 해야 합니다.

종류	이름
얼굴	동그란 안경, 검정 선글라스
상의	파란색 티셔츠
하의	청바지
겉옷	긴 코트

스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요.

## 제한사항
 - clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다.
 - 스파이가 가진 의상의 수는 1개 이상 30개 이하입니다.
 - 같은 이름을 가진 의상은 존재하지 않습니다.
 - clothes의 모든 원소는 문자열로 이루어져 있습니다.
 - 모든 문자열의 길이는 1 이상 20 이하인 자연수이고 알파벳 소문자 또는 '_' 로만 이루어져 있습니다.
 - 스파이는 하루에 최소 한 개의 의상은 입습니다.


## 입출력 예
입출력 예 #1 앞headgear에 해당하는 의상이 yellow_hat, green_turban이고 eyewear에 해당하는 의상이 blue_sunglasses이므로 아래와 같이 5개의 조합이 가능합니다.

입출력 예 #2 face에 해당하는 의상이 crow_mask, blue_sunglasses, smoky_makeup이므로 아래와 같이 3개의 조합이 가능합니다.



## 본인답안

```java
import java.util.HashMap;
import java.util.Iterator;
import java.util.Set;

class Solution {
    public boolean solution(String[] phone_book) {
        HashMap<String, Integer> temMap = new HashMap<>();
        for(String phone_number : phone_book){
        	Set set = temMap.keySet();
        	Iterator iterator = set.iterator();
        	while(iterator.hasNext()){
        		Object object = iterator.next();
        		int result = phone_number.indexOf(object.toString());
        		if(result == 0){
        			return false;
        		}
        		
        		result = object.toString().indexOf(phone_number);
        		if(!(result == 0)){
        			return false;
        		}
        	}
        	temMap.put(phone_number, 0);
        }
        return true;
    }
}
```


## 점수가 높았던 답안

```java
import java.util.HashMap;

4
5
6
7
8
9
10
11
12
class Solution {
    public boolean solution(String[] phoneBook) {
       for(int i=0; i<phoneBook.length-1; i++) {
            for(int j=i+1; j<phoneBook.length; j++) {
                if(phoneBook[i].startsWith(phoneBook[j])) {return false;}
                if(phoneBook[j].startsWith(phoneBook[i])) {return false;}
            }
        }
        return true;
    }
}
```

## 알게된 점 및 아쉬운 점

 - 문제를 제대로 읽지 않아 시간 낭비가 길었습니다.(접두어인 경우인데 존재하는 지 여부로 생각하고 풀었습니다. )
 - 해시맵이라 해서 억지로 해시맵을 만든 느낌이 강하네요...
 - 배열 함수중 startsWith라는 게 있네요

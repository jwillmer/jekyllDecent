---
layout:            post
title:             "쇠막대기"
menutitle:         "스택/큐를 이용한 알고리즘 1"
tags:              Algorithm Queue Stack
category:          Algorithm
author:            geunyoung
cover:             /assets/mountain-alternative-cover.jpg
published:         true
language:          KO
comments:          true
math:		   false
---



## 문제설명

여러 개의 쇠막대기를 레이저로 절단하려고 합니다. 효율적인 작업을 위해서 쇠막대기를 아래에서 위로 겹쳐 놓고, 레이저를 위에서 수직으로 발사하여 쇠막대기들을 자릅니다. 쇠막대기와 레이저의 배치는 다음 조건을 만족합니다.

 - 쇠막대기는 자신보다 긴 쇠막대기 위에만 놓일 수 있습니다.
 - 쇠막대기를 다른 쇠막대기 위에 놓는 경우 완전히 포함되도록 놓되, 끝점은 겹치지 않도록 놓습니다.
 - 각 쇠막대기를 자르는 레이저는 적어도 하나 존재합니다.
 - 레이저는 어떤 쇠막대기의 양 끝점과도 겹치지 않습니다.

이러한 레이저와 쇠막대기의 배치는 다음과 같이 괄호를 이용하여 왼쪽부터 순서대로 표현할 수 있습니다.

(a) 레이저는 여는 괄호와 닫는 괄호의 인접한 쌍 '()'으로 표현합니다. 또한 모든 '()'는 반드시 레이저를 표현합니다.
(b) 쇠막대기의 왼쪽 끝은 여는 괄호 '('로, 오른쪽 끝은 닫힌 괄호 ')'로 표현됩니다.
위 예의 괄호 표현은 그림 위에 주어져 있습니다.
쇠막대기는 레이저에 의해 몇 개의 조각으로 잘리는데, 위 예에서 가장 위에 있는 두 개의 쇠막대기는 각각 3개와 2개의 조각으로 잘리고, 이와 같은 방식으로 주어진 쇠막대기들은 총 17개의 조각으로 잘립니다.

쇠막대기와 레이저의 배치를 표현한 문자열 arrangement가 매개변수로 주어질 때, 잘린 쇠막대기 조각의 총 개수를 return 하도록 solution 함수를 작성해주세요.

## 제한사항
 - arrangement의 길이는 최대 100,000입니다.
 - arrangement의 여는 괄호와 닫는 괄호는 항상 쌍을 이룹니다.


## 입출력 예
arrangement	            return
()(((()())(())()))(())	  17

## 본인답안

```java
    import java.util.Stack;

    public static int solution(String arrangement) {
    	char[] charArray = arrangement.toCharArray();
    	
    	int stickCount = 0;
    	char tempChar = 'x';
    	
    	Stack<Character> stack = new Stack<Character>();
    	for(char word : charArray ){
    		if(stack.empty()){
    			stack.push(word);
    		}else{    			
    			if(word == ')'){
    				stack.pop();
    				
    				if(tempChar == '('){
    					stickCount += stack.size();
    				}else{
    					stickCount += 1;
    				}
    			}else{
    				stack.push(word);
    			}
    		}
    		tempChar = word;
    	}
        return stickCount;
    }
```


## 점수가 높았던 답안

```java
import java.util.*;

class Solution {
    public static int solution(String arrangement) {
        int answer = 0;
        Stack<Integer> st = new Stack<>();
        for (int i = 0; i < arrangement.length(); i++) {
            if (arrangement.charAt(i) == '(') {
                st.push(i);
            } else if (arrangement.charAt(i) == ')') {
                if (st.peek() + 1 == i) {
                    st.pop();
                    answer += st.size();
                } else {
                    st.pop();
                    answer += 1;
                }
            }
        }
        return answer;
    }
}
```

## 알게된 점 및 아쉬운 점



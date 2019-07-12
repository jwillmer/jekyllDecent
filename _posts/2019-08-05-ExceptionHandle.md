---
layout:            post
title:             "Spring Exception Handling 하기"
menutitle:         "Spring Exception Handling 하기"
tags:              Exception Handle
category:          Spring
author:            geunyoung
cover:             /assets/mountain-alternative-cover.jpg
published:         true
cover:             /assets/mountain-alternative-cover.jpg
language:          KO
comments:          true
---

## Exception Handling에 들어가기 앞서...

학교에서도 Exception에 관한 개념과 사용법에 대해 배웠고 프로젝트를 관리하거나 개발하다보면 당연스럽게 사용하고 있다. 하지만 정작 에러메세지가 원하는대로 안나오거나 예외가 발생하면 어디까지 throw가 되어야 하고 어떻게 로그를 남기면 좋을지 고민을 하다가 포스팅과 함께 다시 한번 더 Exception에 대해 개념을 정리해야겠다는 생각을 하게 되었다.


## Git의 Branch란?

첫 포스팅에서 Brnach의 기능이 Git의 꽃이라 표현했는데 사실상 많은 형상관리 시스템에서 사용하고 있는 개념이다.

브랜치란 독립적으로 어떤 작업을 진행하기 위한 개념이다. 필요에 의해 만들어지는 각각의 브랜치는 다른 브랜치의 영향을 받지 않기 때문에, 여러 작업을 동시에 진행할 수 있게 만든다.

또한 이렇게 만들어진 브랜치는 다른 브랜치와 병합(Merge)함으로써, 작업한 내용을 다시 새로운 하나의 브랜치로 모을 수 있다.

일반적으로 여러 명이서 동시에 작업을 할 때에 다른 사람의 작업에 영향을 주거나 받지 않도록, 먼저 메인 브랜치에서 자신의 작업 전용 브랜치를 만든다. 그리고 각자 작업을 진행한 후, 작업이 끝난 사람은 메인 브랜치에 자신의 브랜치의 변경 사항을 적용한다. 이렇게 함으로써 다른 사람의 작업에 영향을 받지 않고 독립적으로 특정 작업을 수행하고 그 결과를 하나로 모아 나가게 된다. 이러한 방식으로 작업할 경우 '작업 단위', 즉 브랜치로 그 작업의 기록을 중간 중간에 남기게 되므로 문제가 발생했을 경우 원인이 되는 작업을 찾아내거나 그에 따른 대책을 세우기 쉬워진다.


### Git 실습하기 1(브랜치 생성)

리눅스 명령어는 따로 설명하지 않고 진행하겠다.

현재 프로젝트에서 다른 기능을 추가하는 예시로 실습을 해보겠다 

1. Git bash를 실행 후 자신이 init한 디렉토리로 이동

2. 명령어 **git branch 브랜치명**을 통해 브랜치 생성

<aside>
<figure>
<img src="{{ "/media/img/Git/practice21.PNG" | absolute_url }}" />
</figure>
</aside>


3. 명령어 **git branch**를 통해 브랜치 생성된 것을 확인

<aside>
<figure>
<img src="{{ "/media/img/Git/practice22.PNG" | absolute_url }}" />
</figure>
</aside>

여기서 master란 **git init**을 할때 생성돠는 기본이 되는 브랜치이고 초록색으로 표시된 브랜치가 현재 작업하는 브랜치이다.


4. 명령어 **git checkout branch명**을 통해 새로 생성한 브랜치로 이동(참고로 **git checkout -b branch명**을 통해 생성후 바로 이동이 가능)

<aside>
<figure>
<img src="{{ "/media/img/Git/practice23.PNG" | absolute_url }}" />
</figure>
</aside>

5. 새로운 기능에 대한 파일을 추가 후 커밋

<aside>
<figure>
<img src="{{ "/media/img/Git/practice24.PNG" | absolute_url }}" />
</figure>
</aside>
<aside>
<figure>
<img src="{{ "/media/img/Git/practice25.PNG" | absolute_url }}" />
</figure>
</aside>
<aside>
<figure>
<img src="{{ "/media/img/Git/practice26.PNG" | absolute_url }}" />
</figure>
</aside>


### Git 실습하기 2(브랜치 로그 확인)

다양한 방법을 로그를 확인 할 수 있다.

1. **git log --branches --decorate**

<aside>
<figure>
<img src="{{ "/media/img/Git/practice27.PNG" | absolute_url }}" />
</figure>
</aside>

2. **git log --branches --decorate --graph**

<aside>
<figure>
<img src="{{ "/media/img/Git/practice28.PNG" | absolute_url }}" />
</figure>
</aside>

3. **git log --branches --decorate --graph --oneline**

<aside>
<figure>
<img src="{{ "/media/img/Git/practice29.PNG" | absolute_url }}" />
</figure>
</aside>

형상 관리하다 보면 아래의 사진과 같이 나타난다.

<aside>
<figure>
<img src="{{ "/media/img/Git/practice30.PNG" | absolute_url }}" />
</figure>
</aside>



### Git 실습하기 3(병합하기)

주축이 될 브랜치로 이동 후

1. **git merge 병합시키고픈 브랜치명**

<aside>
<figure>
<img src="{{ "/media/img/Git/practice31.PNG" | absolute_url }}" />
</figure>
</aside>

2. 커밋된 브랜치 **git branch -d 브랜치명**을 통해 삭제

<aside>
<figure>
<img src="{{ "/media/img/Git/practice32.PNG" | absolute_url }}" />
</figure>
</aside>


### branch 개념 응용

Git의 공식홈페이지인 https://git-scm.com/doc에서 설명이 너무 잘되어있어 블로그에 따로 정리하지 않았지만 보다 더 깊게 git을 활용할 수 있게 만드는 중요한 내용들을 따로 리스트업 해둔다.

 - Fast-Forword와 recursive strategy의 이해(3way merge)
 - stash의 활용
 - auto-merge의 기본적 정책
 - working copy&index&repository의 이해

 
 ### 참고 사이트
  - https://backlog.com/git-tutorial/kr/stepup/stepup1_1.html
  - https://www.youtube.com/watch?v=P-EJ-Tkb5FM&list=PLuHgQVnccGMA8iwZwrGyNXCGy2LAAsTXk&index=29
  - https://git-scm.com/doc


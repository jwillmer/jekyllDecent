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


### Exception과 Error

Exception과 error에 대해 제대로 개념이 안잡혀있는 사람도 많고 Error와 exception에 대해서 뭉퉁그려서 말하는 사람이 많은데 exception과 error는 엄연히 다른다.

erorr란 **컴파일 시** 문법적인 오류와 **런타임 시** 널포인트 참조와 같은 오류로 프로세스에 심각한 문제를 야기시켜 프로세스가 종료되는 그런 문제들을 말한다.

exception은 프로젝트가 진행 도중 예기치 않았던 이상 상태가 발생하여 수행 중인 프로그램이 영향을 받는 받거나 원하는 결과가 나오지 않을 때, 강제로 주는 것을 말한다. 예를 들면, 연산 도중 overflow가 발생했다던가, 연산을 하였는데 원하는 값이 아니면 강제로 exception을 만들 수 있다.

프로젝트를 개발하는 개발자들은 일반적으로 exception에 대해서만 고민을 하고 handling을 한다.


### Spring Exception Handling 방식

우선 Java에서 try catch finally문을 이용하여 Exception을 잡는다는 것은 안다는 전제하에 진행하겠다.

Spring에서는 Exception에 대한 소스를 개발할때 일반적으로 3가지 정도를 생각하며 정리한다.

1. 예외별로 - Exception을 커스텀마이즈하여 그 Exception의 Error Status Code를 매핑하여 처리할 때 사용.

2. 컨트롤러별로 - Spring으로 프로젝트를 진행하다보면 기능에 따라 묶다보면 여러개의 컨트롤러가 생긴다. 컨트롤러에 따라 Excption을 처리해준다.

3. 전역별로 - 전역적으로 발생하는 예외들에 대해 처리한다.

## 자 이제 소스로 구현하는 방법을 알아보자

### 1. 예외별로

예외별 방식부터 살펴보자

예를 들어 id에 0~100사이가 아닐 시 IdFotFoundException이란 커스터마이즈된 Exception을 발생시키고 그 Exception은 RuntimeException으로 처리하고 싶다고 가정하자

```java

@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "No such order")
public class IdNotFoundException extends RuntimeException {

	/**
	 * Unique ID for Serialized object
	 */
	private static final long serialVersionUID = -6184044926029805156L;

	public IdNotFoundException(int orderId) {
		super(orderId + " not found");
	}
}

```

```java

@RestController
public class ExceptionController {

	@GetMapping(value="/checkIdValidation/{id}") 
	public String checkIdValidation(@PathVariable("id") int id) { 
		
		if (id < 0 || id > 100 ) throw new IdNotFoundException(id); 
		return "it's valid Id"; 
	}
}

```
위와 같이 생성한다면 IdNotFoundException을 통하여 404 에러를 만들 것이다. 

### 2. 컨트롤별 예외처리

@RestController를 통해 컨트롤를 만들 때, 그 안에서 @ExceptionHandler를 활용하여 해당 컨트롤러에서 일어나는 Exception들을 컨트롤하는 방식이다.


```java

@RestController
public class ExceptionController {

	@GetMapping("/localException")
	public String exception() {
		throw new IllegalStateException("Sorry!");
	}
	
	@ExceptionHandler
	public String handle(IllegalStateException e) {
		return "IllegalStateException handled!";
	}

}

```
와 같은 형식이다.

### 3. 글로벌 예외처리

따로 @RestControllerAdvice을 활용하여 @ExceptionHandler을 통해 프로젝트 전체에 일어나는 예외들을 핸들링하는 방식이다.

```java

package com.myproject.spring5.mvc.exceptions;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler
	public String handleBusinessException(BusinessException ex) {
		return "Handled BusinessException";
	}

}


```

```java

package com.myproject.spring5.mvc.exceptions;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ExceptionController {

	@GetMapping("/global-exception")
	public String businessException() throws BusinessException {
		throw new BusinessException();
	}

}


```


## Exception Handling 하며 느낀점, 깨달았던 부분, 실수했던 부분

try catch 문에서 catch 구문은 순차적임을 잊지 말아야한다. 즉, 2개의 catch문에 해당되더라도 위의 것에만 걸린다는 뜻이다.

예를 들어

```java

try{

	//로직
}catch(CustomException1 e){
	//CustomException1 발생시 로직
}catch(CustomException2 e){
	//CustomException2 발생시 로직
}

```

에서 CustomException1와 CustomException2에 해당되더라도 CustomException1의 로직만 수행된다.

그 성질을 이용해 나는 글로벌 예외로서는 Exception이나 시스템적 에러 발생시 


 - Fast-Forword와 recursive strategy의 이해(3way merge)
 - stash의 활용
 - auto-merge의 기본적 정책
 - working copy&index&repository의 이해

 
 ### 참고 사이트
  - https://backlog.com/git-tutorial/kr/stepup/stepup1_1.html
  - https://www.youtube.com/watch?v=P-EJ-Tkb5FM&list=PLuHgQVnccGMA8iwZwrGyNXCGy2LAAsTXk&index=29
  - https://git-scm.com/doc


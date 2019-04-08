---
layout:            post
title:             "javax/el/ELManager 오류"
menutitle:         "javax/el/ELManager 오류"
tags:              ELManager
category:          Mistakes & Tips
author:            geunyoung
cover:             /assets/mountain-alternative-cover.jpg
published:         true
cover:             /assets/mountain-alternative-cover.jpg
language:          KO
comments:          true
---

## 오류 현상 1

SPRING 버전 5.XX에 대해 셀프스터디를 진행하면서 @Validation을 사용하기 위해 pom.xml에 아래의 dependency 추가하여 테스트하는데 결과가 false가 나와야하는데 true 나오는 것이었다.

```xml

		<dependency>
			<groupId>javax.validation</groupId>
			<artifactId>validation-api</artifactId>
			<version>2.0.1.Final</version>
		</dependency>

```

으잉? 왜 그러지...

## 오류 원인 및 해결 1

validation-api의 @Validation는 일종의 인터페이스화 되어 있는 것이고 검증하는 로직은 빈이나 클래스를 따로 구현하여 사용하는 것이여서 true가 나온것이었다. 로직은 빈이나 클래스가 구현이 되어 있는 라이브러리는 따로 있다. 아래의 디펜던시 추가하니 위의 문제는 해결되었다.  

```xml

    <dependency>
    		<groupId>org.hibernate.validator</groupId>
    		<artifactId>hibernate-validator</artifactId>
    		<version>6.0.2.Final</version>
		</dependency>
		<dependency>
    		<groupId>org.hibernate.validator</groupId>
    		<artifactId>hibernate-validator-annotation-processor</artifactId>
    		<version>6.0.2.Final</version>
		</dependency>
		<dependency>
    		<groupId>javax.el</groupId>
    		<artifactId>javax.el-api</artifactId>
    		<version>3.0.0</version>
		</dependency>
		<dependency>
		    <groupId>org.glassfish.web</groupId>
		    <artifactId>javax.el</artifactId>
		    <version>2.2.6</version>
		</dependency>

```

## 오류 현상 2

해당 디펜던시를 추가해주니 이번에는 에러가 떨어졌다.

```text
Caused by: java.lang.NoClassDefFoundError: javax/el/ELManager
	at org.hibernate.validator.messageinterpolation.ResourceBundleMessageInterpolator.buildExpressionFactory(ResourceBundleMessageInterpolator.java:88)
	at org.hibernate.validator.messageinterpolation.ResourceBundleMessageInterpolator.<init>(ResourceBundleMessageInterpolator.java:47)
	at org.hibernate.validator.internal.engine.ConfigurationImpl.getDefaultMessageInterpolator(ConfigurationImpl.java:474)
	at org.springframework.validation.beanvalidation.LocalValidatorFactoryBean.afterPropertiesSet(LocalValidatorFactoryBean.java:271)
	at org.springframework.validation.beanvalidation.OptionalValidatorFactoryBean.afterPropertiesSet(OptionalValidatorFactoryBean.java:40)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1692)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1630)
	... 58 common frames omitted
```

분명 ELManager 클래스가 존재하는데 왜 가는거지...?

## 오류 원인 및 해결 2

원인은 톰캣 버전에 있었다. 

<aside>
<figure>
<img src="{{ "/media/img/Mistakes/tomcat78difference.PNG" | absolute_url }}" />>
</figure>
</aside>

내가 사용하고 있는 톰캣은 7.0인데 ELManager의 버전은 3.X였던것이다.

ELManager의 버전을 낮출지 톰캣버전을 올릴지 고민하다 셀프스터디용도라 톰캣을 올리기로 결정~
이후 잘되는 것을 확인 하였다.

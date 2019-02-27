---
layout:            post
title:             "AES방식을 통한 data 암호화/복호화(소스)"
menutitle:         "AES방식을 통한 data 암호화/복호화(소스)"
tags:              data encrypt
category:          Java
author:            geunyoung
cover:             /assets/mountain-alternative-cover.jpg
published:         true
redirect_from:     "/server1/"
cover:             /assets/mountain-alternative-cover.jpg
language:          KO
comments:          true
math:		   false
---

데이터를 주고 받을 때 해킹방지를 위해 암호화하여 보내곤 한다.
AES(Advanced Encryption Standard) 방식을 통한 암호화 소스이다.



## 소스

```java

public class AES_EnDecode {
	private static final String KEY = "주고받을 쪽과 약속된 키";

	private static byte[] hexToByteArray(String hex) {
		if (hex == null || hex.length() == 0) {
			return null;
		}
		byte[] byteArray = new byte[hex.length() / 2];
		for (int i = 0; i < byteArray.length; i++) {
			byteArray[i] = (byte) Integer.parseInt(hex.substring(2 * i, 2 * i + 2), 16);
		}
		return byteArray;
	}

	private static String byteArrayToHex(byte[] ba) {
		if (ba == null || ba.length == 0) {
			return null;
		}
		StringBuffer sb = new StringBuffer(ba.length * 2);
		String hexNumber;
		for (int x = 0; x < ba.length; x++) {
			hexNumber = "0" + Integer.toHexString(0xff & ba[x]);
			sb.append(hexNumber.substring(hexNumber.length() - 2));
		}
		return sb.toString();
	}

	public static String encrypt(String message) throws NoSuchAlgorithmException, NoSuchPaddingException, InvalidKeyException, IllegalBlockSizeException, BadPaddingException {

		SecretKeySpec skeySpec = new SecretKeySpec(KEY.getBytes(), "AES");

		Cipher cipher = Cipher.getInstance("AES");
		cipher.init(Cipher.ENCRYPT_MODE, skeySpec);
		byte[] encrypted = null;
		try {
			encrypted = cipher.doFinal(message.getBytes());
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return byteArrayToHex(encrypted);
	}

	public static String decrypt(String encrypted) throws NoSuchAlgorithmException, NoSuchPaddingException, InvalidKeyException, IllegalBlockSizeException, BadPaddingException, UnsupportedEncodingException {
		SecretKeySpec skeySpec = new SecretKeySpec(KEY.getBytes(), "AES");
		Cipher cipher = Cipher.getInstance("AES");
		cipher.init(Cipher.DECRYPT_MODE, skeySpec);
		byte[] original = cipher.doFinal(hexToByteArray(encrypted));
		String originalString = new String(original);
		return originalString;
	}

}

```

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


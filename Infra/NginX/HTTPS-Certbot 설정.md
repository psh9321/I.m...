# Certbot 을 사용한 HTTPS 적용 

1. Certbot 설치 
 ```
    $ sudo snap install --classic certbot
    $ sudo ln -s /snap/bin/certbot /usr/bin/certbot
 ```


2. HTTPS 인증서 발급받기
 ```
    $ sudo certbot --nginx -d <도메인 주소>

    # 예시
    $ sudo certbot --nginx -d mbti.psh9321.cloud
    $ sudo certbot --nginx -d exhibition.psh9321.cloud
 ```
 - 위와 같이 도메인을 먼저 연결한 뒤에 위 명령어를 쳐야 정상작동한다.
 - successfully received certificate. (인증서 발급 이 성공/완료)


3. 접속 확인
 - 정상적으로 https 적용이 됐을 시 http 로 접근해도 https 로 리다이렉트 됨
## K6 Webpack을 이용한 성능테스트 


1. npm i . 명령어를 실행하여 관련 모듈을 설치합니다.
2. drivers-location-k6.js에 필요한 변수값을 추가합니다.
3. npm run webpack 명령어를 실행하여 build 작업을 진행합니다.
4. k6 run -u [사용자명 ex) 1] -i [원하는 실행횟수 ex) 10] build/app.bundle.js 명령어를 실행합니다.

<a href ='https://github.com/grafana/k6-template-es6'>참고</a>
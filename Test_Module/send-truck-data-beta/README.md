# Truck Data Send to Kinesis

트럭 별 이동 데이터를 API Gateway 엔드포인트를 통해 전송하기 위한 테스트

## 양식

- 폴더명 : `truck번호_test_data`
- 파일명 : `truck번호_route01.json`

** 현재 test data는 `realtime-driver-test/test_data`에 들어있습니다. 폴더 위치에 맞게 경로 변경 부탁드립니다

## 실행 방법

1. `npm install` 실행
2. `send_truck_data.js`에 필요한 변수들 입력

```js
const url = 'input your url' // Input API Gateway URL
const test_num = "01"; // Input truck num
```

3. 보낼 데이터의 번호에 맞춰 `max` 변수와 반복자 `i`의 number 수정
4. `node ./send_truck_data.js` 명령을 통해 실행

## 주의 사항

보낼 데이터의 개수가 50개를 초과하면 `Internal Server Error`가 뜨면서 데이터가 전송되지 않습니다
즉, 1부터 200번까지의 데이터를 보내고 싶다면 1번부터 50번까지, 51번부터 100번까지.. 처럼 나눠서 작업 부탁드립니다
# 실시간 배송 기사 위치 정보 전송 시뮬레이터

1. `exe_files`에 있는 실행 파일들 중 자신의 실행환경에 맞는 파일을 터미널(MacOS, Linux), Powershell 혹은 CMD(Windows) 상에서 실행해주세요. Mac M1의 경우 `서명하지 않은 개발자 이슈`를 해결해야 실행 가능해집니다. m1을 제외한 나머지 실행파일은 `amd64` 환경에서만 작동됩니다.
    * `realtime-driver-test-m1`    : Mac M1 Platform 64bits
    * `realtime-driver-test-mac`   : Mac not M1 chip Platform 64bits
    * `realtime-driver-test-linux` : Linux OS 64bits
    * `realtime-driver-test-win64.exe` : Windows OS 64bits

2. `test_data`에 포함된 폴더에 다음의 스키마를 가진 `*.json` 에 의해 작동 됩니다.
    ```json
    {
        "truckId" : "uint64",
        "timestamp": "uint64",
        "location" : {
            "lon" : "float64",
            "lat" : "float64"
        }
    }
    ```
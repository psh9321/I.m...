# winston 
 - Winston은 Node.js에서 가장 많이 사용되는 로깅(Logger) 라이브러리 중 하나이다.
 - console.log() 대신 구조화된 로그를 기록할 수 있으며, 로그 레벨 관리, 파일 저장, 로그 포맷팅 등의 기능을 제공한다.
 - 운영(Production) 환경에서 오류 추적, 서버 모니터링, 디버깅을 위해 주로 사용된다.
설치

## 설치
 - npm i winston winston-daily-rotate-file
 - pnpm add winston winston-daily-rotate-file


## 사용 이유
 - 로그 레벨별 관리(error, warn, info 등)
 - 콘솔과 파일에 동시에 로그 저장 가능
 - 로그 포맷(JSON, Timestamp 등) 설정 가능
 - 예외(Exception) 및 Promise Rejection 기록 가능
 - 운영 환경에서 로그 분석 및 장애 추적이 용이하다.


## 로그 레벨
| 레벨       | 용도                         | 예시                           
| --------- | --------------------------  | ---------------------------- 
| `error`   | 애플리케이션 오류, 예외           | DB 연결 실패, API 오류, 인증 실패    
| `warn`    | 오류는 아니지만 주의가 필요한 상황   | Deprecated API 사용, 디스크 용량 부족 
| `info`    | 일반적인 동작 정보               | 서버 시작, 로그인, 회원가입, 요청 처리 완료
| `http`    | HTTP 요청 로그                 | `GET /users 200` 
| `verbose` | `info`보다 상세한 정보           | 서비스 내부 처리 과정     
| `debug`   | 개발 및 디버깅용                 | 변수 값, 함수 호출 순서   
| `silly`   | 가장 상세한 로그                 | 모든 내부 상태 출력  


## 로그 레벨 우선순위
|      레벨 | 우선순위 |
| ------: | :--- |
|   error | 0    |
|    warn | 1    |
|    info | 2    |
|    http | 3    |
| verbose | 4    |
|   debug | 5    |
|   silly | 6    |


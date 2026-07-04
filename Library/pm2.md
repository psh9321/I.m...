# pm2
 - PM2(Process Manager 2) 는 Node.js 애플리케이션을 실행하고 관리하는 프로세스 매니저(Process Manager) 이다.
 - 애플리케이션이 종료되면 자동으로 재시작하고, 로그 관리, 모니터링, 무중단 재시작 등의 기능을 제공한다.
 - 주로 운영(Production) 환경에서 Node.js 서버를 실행할 때 사용된다.


## 사용이유
 - 터미널을 종료해도 서버가 계속 실행된다.
 - 서버가 비정상 종료되면 자동으로 재시작한다.
 - 로그를 저장하고 조회할 수 있다.
 - 서버 상태를 모니터링할 수 있다.

## 설치
 - npm i pm2
 - pnpm add pm2
 - (전역으로 설치하는게 일반적) npm i -g pm2
 - (전역으로 설치하는게 일반적) pnpm add -g pm2


## ecosystem.config.js
```js
    module.exports = {
        apps: [
            {
                name: "text-server", /** 애플리케이션(서버) 이름 */
                script: "index.js", /** 실행할 파일 및 명령어 */
                cwd: "desktop/my-project/test-backend", /** 애플리케이션을 실행할 기준 디렉토리 */
                autorestart: true, /** 애플리케이션이 비정상 종료되면 자동으로 다시 실행할지 여부를 설정 */
                watch: false, /** 파일 변경을 감지하여 자동으로 재시작할지 여부를 설정 */

                /** 애플리케이션 실행 시 사용할 환경 변수 */
                env: {
                    NODE_ENV: "production",
                },
            },
        ],
    };
```


## pm2 관련 명령어 
 | 명령어                  | 설명                        |
| -------------------- | ------------------------- |
| `pm2 stop <name>`    | 프로세스만 중지                  |
| `pm2 restart <name>` | 프로세스 재시작                  |
| `pm2 reload <name>`  | 무중단 재시작(Cluster 모드에서 효과적) |
| `pm2 reload all`     | 모든 프로세스를 가능한 경우 무중단으로 다시 로드 |
| `pm2 delete <name>`  | 프로세스 제거                   |
| `pm2 delete all`     | 모든 프로세스 제거                |
| `pm2 kill`           | 모든 프로세스와 PM2 데몬 종료        |
| `pm2 save`           | 현재 프로세스 목록 저장             |
| `pm2 resurrect`      | 저장된 프로세스 목록 복원            |
# NestJS
- NestJS는 Node.js 기반의 서버(백엔드) 프레임워크이다.
- 내부적으로 Express를 기본 HTTP 서버로 사용하며, Fastify로도 변경할 수 있다.
- TypeScript를 기본 지원하며 객체지향(OOP), 의존성 주입(DI), 데코레이터 기반 구조를 제공한다.
- Angular의 구조와 철학을 참고하여 만들어졌으며, 대규모 프로젝트에서도 유지보수하기 쉬운 아키텍처를 제공한다.

## 특징
- TypeScript를 기본 지원한다.
- 모듈(Module) 단위로 기능을 분리하여 관리한다.
- Controller, Service 등 역할을 명확하게 분리한다.
- Dependency Injection(DI)을 통해 객체 생성과 의존성을 관리한다.
- 데코레이터를 이용해 코드를 직관적으로 작성할 수 있다.
- Express 또는 Fastify를 선택하여 사용할 수 있다.
- JWT, Passport, Validation 등 다양한 공식 패키지를 제공한다.
- 테스트(Jest) 환경이 기본 제공된다.

## 설치
- npm i -g @nestjs/cli : Nest CLI 설치
- nest new {project-name} : NestJS 프로젝트 생성
- class-validator class-transformer : DTO 유효성 검증(ValidationPipe)을 위한 라이브러리

## DB에 따라 설치
- PostgreSQL → pg + typeorm + @nestjs/typeorm
- MySQL → mysql2 + typeorm + @nestjs/typeorm
- MongoDB → mongoose + @nestjs/mongoose

## Resource 생성
- nest g resource {name} --no-spec
- Module, Controller, Service, DTO 등을 자동으로 생성한다.
- app.module.ts에 Module을 자동으로 등록(import)한다.
- --no-spec 옵션은 테스트 파일(*.spec.ts)을 생성하지 않는다.
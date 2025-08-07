# 1. 프로젝트 구조

```bash
.
├── backend
│     - Express 서버
├── dev-database
│     - MySQL volume (bind mount)
├── docker
│     - Docker 실행 환경 정의
├── frontend
│     - Vite + React 프론트엔드
├── Makefile
│     - docker compose shortcuts
└── README.md
```

- Package manager : `pnpm`
- Server framework : `Express`
- Client library : `React` + `Vite`
- 실행 환경 : `Docker Engine`

<br />
<hr />
<br />

# 2. 실습 개요


## 2-1. Frontend

![Static Badge](https://img.shields.io/badge/typescript-v5-blue)
![Static Badge](https://img.shields.io/badge/react-v19-blue)

![Static Badge](https://img.shields.io/badge/vite-v7-brown)
![Static Badge](https://img.shields.io/badge/vitest-v3-brown)

![Static Badge](https://img.shields.io/badge/zustand-v5-olive)
![Static Badge](https://img.shields.io/badge/@tanstack/react--query-v7-olive)
![Static Badge](https://img.shields.io/badge/react--hook--form-v7-olive)
![Static Badge](https://img.shields.io/badge/zod-v4-olive)

![Static Badge](https://img.shields.io/badge/tailwindcss-v3-purple)

- 서버 상태관리를 위한 TanStack React Query 실습
- Featured Architecture 실습
- 입력 Form 유효성 검사 및 에러 메시지 실습
- 상태관리 역할 분할
  - UI 상태관리 : `zustand`
  - 서버 상태관리 : `@tanstack/react-query`
  - 입력 Form 상태관리 : `react-hook-form`

<br />

## 2-2. Backend

![Static Badge](https://img.shields.io/badge/typescript-v5-blue)
![Static Badge](https://img.shields.io/badge/express-v5-blue)

![Static Badge](https://img.shields.io/badge/mysql2-v3-brown)

- CRUD 실습을 위한 Express 서버
- MySQL 연동 및 초기화 DDL(Data Define Language) 실습
- model, controller, router 구조 실습

<br />
<hr />
<br />

# 3. 실습 목표

기존 개발 방식의 문제점으로 느꼈던 부분들을 개선하기 위해, 간단한 Todo List 프로젝트를 만들어 봅니다.

## 3-1. 개선하고 싶은 문제점

- 상태관리 문제점
  - UI 상태관리, 서버 상태관리, 사용자 입력값 등의 상태값들을 하나의 Store 도구로 구현
  - 각 역할별 Store 를 구현할 때 작성해야 하는 초기 boiler plate 분량이 너무 많습니다.
  - boiler plate 를 줄이기 위한 Factory, Builder pattern 들을 구현 및 개선할 시, 협업을 위한 문서화 분량이 많습니다.
  - boiler plate 에 수정사항이 발생할 경우도 작업 분량이 많습니다.
  - 개발자 도구를 사용한 Store 디버깅이 번거롭습니다.
- 사용자 입력 요소 관리 : `react-hook-form`
  - form type 정의, 유효성 검사 정의, 유효성 검사 실패 메시지 정의 등을 일관된 패턴으로 관리하기 어렵습니다.
- 서버 상태 관리 : `@tanstack/react-query`
  - 직접 구현한 서버 상태관리 Store 는 idle, pending, error 등의 상태값 관리에 헛점과 실수 유발 요소가 있습니다.
  - 낙관적 업데이트 (Optimistic update) 의 필요성을 느꼈습니다.

<br />

## 3-2. 서버 구현 실습
- `@tanstack/react-query` 실습을 위해 CRUD 가 가능한 서버가 필요했습니다.
- `MySQL` 을 연동합니다.

<br />

## 3-3. Docker 실습
- `Dockerfile` 을 작성하여, 일관된 실행 환경을 만들어 봅니다.
- `Dockerfile` 레이어 및 패키지 최적화를 적용해 봅니다.
- `docker-compose.yaml` 을 작성하여, 각 Service 들의 통신 설정을 실습합니다.
- Volume mount, Bind mount 를 사용하여 HRM 이 가능한 개발 환경을 구성합니다.
- `Makefile` 을 작성하여 환경별 실행 편의성을 만듭니다.

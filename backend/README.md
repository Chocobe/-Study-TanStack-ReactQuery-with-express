# Rest API Docs

* BASE URL : `/api/v1`
* Server Framework : `Express`
* Database : `MySQL`



<br /><hr /><br />



# 01. Auth

## 01-01. 로그인

- Method : `POST`
- URL : `/api/v1/auth/login`
- Authorization : No need

```ts
type Payload = {
  email: string;
  password: string;
};
```

```bash
curl
  -X POST http://localhost:3001/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{ "email": "miles@gmail.com", "password": "hello-world" }'
```



<br /><hr /><br />



# 02. Todo

## 02-01. 할 일 목록 조회

- Method : `GET`
- URL : `/api/v1/todo`
- Authorization : Required

```ts
type QueryParams = {
  completed?: boolean;
};
```

```bash
curl \
  -X GET http://localhost:3001/api/v1/todo?completed=true \
  -H "Content-Type: application/json"
```



<br /><hr /><br />



## 02-02. 할 일 생성

- Method : `POST`
- URL : `/api/v1/todo`
- Authorization : Required

```ts
type Payload = {
  content: string;
}
```

```bash
curl \
  -X POST http://localhost:3001/api/v1/todo \
  -H "Content-Type: application/json" \
  -d '{ "content": "My todo content" }'
```



<br /><hr /><br />



## 02-03. 할 일 content 수정

- Method : `PATCH`
- URL : `/api/v1/todo/:id`
- Authorization : Required

```ts
type PathParams = {
  id: number;
};

type Payload = {
  content: string;
};
```

```bash
curl \
  -X PATCH http://localhost:3001/api/v1/todo/1 \
  -H "Content-Type: application/json" \
  -d '{ "content": "Changed my todo content" }'
```



<br /><hr /><br />



## 02-04. 할 일 완료/미완료 Toggle

- Method : `PATCH`
- URL : `/api/v1/todo/:id/toggle`
- Authorization : Required

```ts
type PathParams = {
  id: number;
};
```

```bash
curl \
  -X PATCH http://localhost:3001/api/v1/todo/1/toggle \
  -H "Content-Type: application/json"
```



<br /><hr /><br />



## 02-05. 하 일 삭제

- Method : `DELETE`
- URL : `/api/v1/todo/:id`
- Authorization : Required

```ts
type PathParams = {
  id: number;
};
```

```bash
curl \
  -X DELETE http://localhost:3001/api/v1/todo/1 \
  -H "Content-Type: application/json"
```

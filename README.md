## webpack federation 테스트

### 앱의 내부 스택

- host: create next app typescript template
- remote: create react app typescript template

### 테스트 방법

#### install & run

```
// root 기준

//1. remote 서버 키기
cd remote && yarn && yarn start

//2. host 서버 키기
cd .. // root로 가서
cd host && yarn && yarn dev
```

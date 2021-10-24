## 기본

- Web Server: 화면을 그리는데 필요한 재료를 Response의 Body에 담음
- API Server: 요청한 작업을 처리하고 처리한 결과를 Response의 Body에 JSON 등의 형식으로 담음

## 미들웨어

```js
app.use(express.json());
```
위의 코드를 추가하면 리퀘스트 바디에 들어있는 JSON 데이터를 req 객체의 body 프로퍼티에 설정하도록 함

const http = require("http");

let server = http.createServer(function (request, response) {
  response.end("<h1>Hello World!</h1>");
});
// 3000-> port number -> 127.0.0.1:3000
//function: 클라이언트로부터 요청이 올 때마다 실행할 함수

server.listen(3000);
//서버는 외부로부터 오는 클라이언트의 요청을 받을 준비가 됨

const http = require("http");

const users = ["TOM", "ANDY", "JESSICA", "PAUL"];

//let server = http.createServer(function (request, response) { => Anonymous Function
const server = http.createServer((request, response) => {
  //=> Arrow Function
  //console.log(request.url);
  //response.end("<h1>Hello World!</h1>");
  if (request.url === "/") {
    response.end("<h1>Welcome!</h1>");
  } else if (request.url === "/users") {
    response.end("<h1>${users}</h1>");
  } else if (request.url.split("/")[1] === "users") {
    const userIdx = request.url.split("/")[2];
    const userName = users[userIdx - 1];
    response.end("<h1>${userName}</h1>");
  } else {
    response.end("<h1>Page Not Available</h1>");
  }
});
// 3000-> port number -> 127.0.0.1:3000
//function: 클라이언트로부터 요청이 올 때마다 실행할 함수

server.listen(3000);
//서버는 외부로부터 오는 클라이언트의 요청을 받을 준비가 됨

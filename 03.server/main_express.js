const express = require("express");
const app = express(); //익스프레스로 만든 객체

const users = ["PAUL", "ALICE", "JACK"];

app.get("/", (request, response) => {
  response.end("<h1>Welcome</h1>");
});

app.get("/users", (request, response) => {
  response.end(`<h1>${users}</h1>`);
});

app.get("/users/:id", (request, response) => {
  // ":"에 오는 값을 request.params.id에 담아라
  const userName = users[request.params.id - 1];
  response.end(`<h1>${userName}</h1>`);
});

app.get("*", (request, response) => {
  //그 밖의 모든 Pat
  response.end("<h1>Page not Available</h1>");
});

app.listen(3000);

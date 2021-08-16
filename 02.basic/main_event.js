const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("test", () => {
  console.log("1");
});
//on: 어떤 이벤트가 발생했을 때 실행할 콜백 함수를 등록하는 함수
//test라는 이름의 이벤트가 발생했을 때 실행할 콜백 함수

myEmitter.on("test", () => {
  console.log("2");
});

myEmitter.on("test", () => {
  console.log("3");
});

myEmitter.emit("test");
//test라는 이벤트 발생

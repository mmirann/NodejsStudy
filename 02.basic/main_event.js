const EventEmitter = require("events");

const myEmitter = new EventEmitter();
const myEmitter_object = new EventEmitter();

const object = { type: "text", data: "HELLO CODEIT", date: "2020-09-01" };

myEmitter.on("test", (arg1, arg2, arg3) => {
  console.log(arg1);
  console.log(arg2);
  console.log(arg3);
});
//on: 어떤 이벤트가 발생했을 때 실행할 콜백 함수를 등록하는 함수
//test라는 이름의 이벤트가 발생했을 때 실행할 콜백 함수

myEmitter_object.on("test_object", (info) => {
  console.log(info);
});

myEmitter.emit("test", "apple", "banana", "pear");
//test라는 이벤트 발생
myEmitter_object.emit("test_object", object);

const fs = require("fs");
// 코어 모듈, 디렉토리 생성 및 수정

// let fileList = fs.readdirSync(".");
// //파일 목록을 배열 형식으로 리턴
// console.log(fileList);

//fs.writeFileSync("new", "hello Node.js!");
//파일 생성

// console.log("start");

// let content = fs.readFileSync("./new", "utf-8");
// console.log(content);

// console.log("finish");

console.log("start");

fs.readFile("./new", "utf8", (error, data) => {
  console.log(data);
  // new 파일 읽기를 마치면 실행될 함수 => 콜백
});

console.log("finish");

//==============================

// const os = require("os");

// console.log(os.cpus());
// //cpu 정보 출력

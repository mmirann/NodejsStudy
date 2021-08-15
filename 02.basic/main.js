const fs = require("fs");
// 코어 모듈, 디렉토리 생성 및 수정

let fileList = fs.readdirSync(".");
//파일 목록을 배열 형식으로 리턴
console.log(fileList);

fs.writeFileSync("new", "hello Node.js!");
//파일 생성

//==============================

const os = require("os");

console.log(os.cpus());
//cpu 정보 출력

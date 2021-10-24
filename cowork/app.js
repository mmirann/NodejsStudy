const express = require("express");

const app = express();
const members = require("./members");

/**
 * middleware
 * post로 온 값에 json이 있는 경우 req의 바디로 설정해줌
 */
app.use(express.json());

app.get("/api/members", (req, res) => {
  const { team } = req.query; //team이라는 param이 있는 경우(destructuring), query에 team이 있다면
  if (team) {
    const teamMembers = members.filter((m) => m.team === team); //filter: true인 것들의 새로운 배열을 만듦
    res.send(teamMembers);
  } else {
    res.send(members); // 없으면 전체 멤버 출력
  }
});
app.get("/api/members/:id", (req, res) => {
  //const id = req.params.id;
  const { id } = req.params; //object destructuring, params 객체에서 id라는 프로퍼티의 값만 id에 담음
  const member = members.find((m) => m.id === Number(id));
  if (member) {
    res.send(member);
  } else {
    //find에서 값을 못찾으면 undefined 값을 가짐
    res.status(404).send({ message: "There is no such member!!" });
  }
});

app.post("/api/members", (req, res) => {
  const newMember = req.body;
  members.push(newMember);
  res.send(newMember);
});

/**
 * 기존의 정보 수정
 */
app.put("/api/members/:id", (req, res) => {
  const { id } = req.params;
  const newInfo = req.body;
  const member = members.find((m) => m.id === Number(id));
  if (member) {
    Object.keys(newInfo).forEach((prop) => {
      member[prop] = newInfo[prop];
    });
    res.send(member);
  } else {
    res.status(404).send({ message: "Thers is no member with the id!" });
  }
});

app.listen(3000, () => {
  console.log("Server is listening...");
});

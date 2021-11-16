const Sequelize = require("sequelize");
const config = require("../config/config.json");

const { username, password, database, host, dialect } = config.development;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});

const Member = require("./member")(sequelize, Sequelize.DataTypes); //DB에 존재하는 Members 테이블을 읽을 수 있음

//DB 객체를 만들어서 Member를 넣어서 공개

const db = {};
db.Member = Member;

module.exports = db;

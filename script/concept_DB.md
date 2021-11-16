## NPX
> `npx`는 패키지에 내장된 명령을 실행하기 위해 사용하는 키워드 
`npx sequlize`를 실행하면 node_modules 디렉토리 안에 있는 .bin 디렉토리 안의 sequelize라는 파일을 실행하게 되는데, 이 때 이 sequlize 파일은 바로가기 파일이어서 그 원본 파일인 node_modules 디렉토리 안에 있는 seqluize-cli 패키지 안의 lib 디렉토리 안의 sequlize 파일을 node로 실행하게 된다. 

# COWRK DataBase

![image](https://user-images.githubusercontent.com/48276682/141673419-db05c9ee-fe2a-43aa-bdc6-cf6483da97bb.png)

![image](https://user-images.githubusercontent.com/48276682/141673426-1759b372-70be-46a4-8e56-1c26e83d05e0.png)

# 사용법
1. MySQL 서버 설치 및 MySQL 서버 실행한 상태로 두기
2. Sequelize를 사용하기 위해 필요한 패키지 설치
    ```
    npm install mysql2 sequelize sequelize-cli
    ```
3. Sequelize를 사용하는 프로젝트의 이상적인 구조를 만들기 위해 필요한 데릭토리 및 파일 생성
    ```
    npx sequlize init
    ```
4. `config.json`파일 중 `development`객체에 MySQL 서버 접속 정보 설정
5. COWORK 데이터베이스 생성
    ```
    npx sequelize db:create --env development
    ```
* config.json 파일의 development 객체의 내용대로 MySQL 서버에 접속해 COWORK DB 생성

6. Members 테이블 생성 마이그레이션 파일 및 Member 모델 파일 생성
    ```
    npx sequelize model:generate --name Member --attributes name:string,team:string,position:string,emailAddress:string,phoneNumber:string,admissionDate:date,birthday:date,profileImage:string 
    ```
7. DB에 Members 테이블 생성
    ```
    npx sequlize db:migrate
    ```
8. Members 테이블에 넣을 seed 데이터 생성
    ```
    npx sequelize seed:generate --name initialMembers
    ```
* 생성된 initalMembers.js 파일에 코드에 넣을 JSON 형식의 직원 정보 배열 추가
9. Members 테이블에 Seed 데이터 추가
    ```
    npx sequelize db:seed:all
    ```
10. Member 모델 코드에 빠져있는 id 프로퍼티 추가
* ./models/member.js에 id 프로퍼티 JSON 형식 복붙 
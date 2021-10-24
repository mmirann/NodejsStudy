## 객체의 프로퍼티 순회하기

### 1. Object.keys

```js
const newInfo = {
  id: 11,
  name: "William",
  team: "Engineering",
  position: "Android Developer",
  emailAddress: "zake@google.com",
  phoneNumber: "010-xxxx-xxxx",
  admissionDate: "2021/06/12",
  birthday: "1995/09/27",
  profileImage: "profile11.png",
};

console.log(Object.keys(newInfo)); // !
```

출력결과

```js
[
  "id",
  "name",
  "team",
  "position",
  "emailAddress",
  "phoneNumber",
  "admissionDate",
  "birthday",
  "profileImage",
];
```

### 2.Object.entries

Object의 `entries`라는 메소드는 각 프로퍼티의 **이름(key)-값(value)** 쌍을 담은 배열을 리턴하는 메소드

```js
const newInfo = {
  id: 11,
  name: "William",
  team: "Engineering",
  position: "Android Developer",
  emailAddress: "zake@google.com",
  phoneNumber: "010-xxxx-xxxx",
  admissionDate: "2021/06/12",
  birthday: "1995/09/27",
  profileImage: "profile11.png",
};

console.log(Object.entries(newInfo)); // !
```

출력 결과

```js
[
  ["id", 11],
  ["name", "William"],
  ["team", "Engineering"],
  ["position", "Android Developer"],
  ["emailAddress", "zake@google.com"],
  ["phoneNumber", "010-xxxx-xxxx"],
  ["admissionDate", "2021/06/12"],
  ["birthday", "1995/09/27"],
  ["profileImage", "profile11.png"],
];
```

```js
Object.entries(newInfo).forEach((pair) => {
  console.log(`Key: ${pair[0]} => Value: ${pair[1]}`);
});
위와 같이 사용하면 프로퍼티의 이름 뿐만 아니라 프로퍼티의 값도 바로 동시에 가져오는 것이 가능함
```

출력 결과

```js
Key: id => Value: 11
Key: name => Value: William
Key: team => Value: Engineering
Key: position => Value: Android Developer
Key: emailAddress => Value: zake@google.com
Key: phoneNumber => Value: 010-xxxx-xxxx
Key: admissionDate => Value: 2021/06/12
Key: birthday => Value: 1995/09/27
Key: profileImage => Value: profile11.png
```

### 3. for ..in 구문

```js
const newInfo = {
  id: 11,
  name: "William",
  team: "Engineering",
  position: "Android Developer",
  emailAddress: "zake@google.com",
  phoneNumber: "010-xxxx-xxxx",
  admissionDate: "2021/06/12",
  birthday: "1995/09/27",
  profileImage: "profile11.png",
};

for (const property in newInfo) {
  console.log(property);
}
```

출력 결과

```js
id;
name;
team;
position;
emailAddress;
phoneNumber;
admissionDate;
birthday;
profileImage;
```

프로퍼티의 값도 같이 출력하기 위해서 아래와 같이 사용

```js
for (const property in newInfo) {
  console.log(`Key: ${property} => Value: ${newInfo[property]}`);
}
```

출력결과

```js
Key: id => Value: 11
Key: name => Value: William
Key: team => Value: Engineering
Key: position => Value: Android Developer
Key: emailAddress => Value: zake@google.com
Key: phoneNumber => Value: 010-xxxx-xxxx
Key: admissionDate => Value: 2021/06/12
Key: birthday => Value: 1995/09/27
Key: profileImage => Value: profile11.png
```

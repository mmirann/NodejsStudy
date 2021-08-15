### 모듈
* 자바스크립트 파일 하나, 전체를 이루는 부품 하나하나
* 모듈이 모여서 하나의 프로그램을 이룸
* `require`명령어를 통해 모듈을 불러옴
  * 모듈을 로드할 때 `.js`확장자 없이 파일 이름만 적어도 됨
  * `require`함수가 리턴하는 객체는 상수 `const`로 대입하는 게 좋음
  * 모듈이 리턴한 객체를 변수로 받으면, 나중에 본인 또는 다른 개발자가 변수 m에 다른 값을 실수로 다시 지정하게 될 수도 있지만, 상수로 받으면 상수 m에 새로운 값을 다시 지정하려는 코드 자체에서 에러가 발생하므로 방지 가능 
* 모듈의 함수를 외부에서 사용하기 위해선 `exports` 명령어를 사용해 외부에 공개
  * `exports.add = add;`
* 공개하고 싶은 것들을 모아 한의 객체로 만들고 `module.exports`로 객체를 통째로 외부에 공개
  * `module.exports = calculator;`
* ex) math-tools.js

### 함수를 나타내는 새로운 방식, Arrow Function
* Function Declaration(함수 선언식)
  ```js
    function add(a,b){
        return a+b;
    };
  ```
* Function Expression(함수 표현식)
  ```js
  const add = function(a,b){
      return a+b;
  };
  ```

  ```js
    const add = (a, b) => {
      return a+b;
    };
  ```
* 활용
  ```js
    const arr = [1,2,3,4,5];

    function getSquare(x) {
        return x * x;
    }

    const newArr = arr.map(getSquare);
    console.log(newArr);
  ```
  * getSquare라는 함수를 별도로 선언하지 않고 다음과 같이 사용 가능
  ```js
  const arr = [1,2,3,4,5];

  const newwArr = arr.map(function(x){
      return x * x;
  });

  console.log(newArr);
  ```
  * map 함수에 인자로 들어간 함수는 아예 이름이 없고, 내용은 getSquare 함수의 바디와 똑같음
  * 이렇게 이름이 없는 함수를 Anonymous Function(익명 함수)라고 하는데, 보통 함수에 함수를 인자로 넣을 때 많이 사용
  ```js
  const arr = [1,2,3,4,5];

  const newArr = arr.map((x)=>{
      return x * x;
  });
  ```

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
### 비동기 실행
> 특정 작업이 완료되었을 때 실행할 콜백을 등록해두고 바로 다음 코드로 실행을 넘기는 것
* nodejs에선 보통 비동기 함수를 사용하고 특수한 경우에만 동기 함수를 사용함

**setTimeout()**
```js
setTimeout(callback, milliseconds)

setTimeout(() => {
  num = 2;
}, 1000);
```
* 밀리세컨즈 후에 callback 인자에 설정한 함수를 실행함
* 위의 코드는 1초 후에 num 변수에 2를 대입함
* 개발자가 직접 비동기 실행을 구현하고 싶을 떄 사용할 수 있는 함수

**비동기 실행의 장점**
  ![](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3753&directory=Untitled.png&name=Untitled.png)
  ![](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3753&directory=Untitled%201.png&name=Untitled+1.png)
* 동기 실행에 비해 비동기 실행이 훨씬 빠름!

**Node.js에서의 비동기 실행**
  * 프로세스가 하나의 실행 흐름이면 스레드는 그 안에 있는 더 작은 단위의 실행 흐름
    * ex) 크롬 브라우저를 실행하면 하나의 크롬'프로세스'라는 것이 생성되고, 그 안에서 하나의 '스레드'가 실행 중인 상태가 됨
     ![](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3753&directory=Untitled%203.png&name=Untitled+3.png)
  * 위의 예시에서 사람 한 명이 스레드 하나라고 가정
  * 스레드 1개(메인 스레드)
    * 자바스크립트 코드 실행하기
    * 이때 오래 걸리는 작업(작업 A)은 다른 스레드에 넘기기(ex. fs.readFile('new', callback)에서 파일 읽기는 별도 스레드에 넘기기)
    * 그리고 일단 그다음 작업 B를 시작하기
    * 작업 A가 완료되었다는 알림과 그 작업 결과를 받으면
    * 작업 결과를 가지고 콜백 실행하기(ex. 읽어 들인 파일 내용을 인자로 넣고, callback 실행)
* 스레드 10개
  * 메인 스레드가 요청한 작업 처리하기(ex. 파일 읽기)
  * 작업이 완료되면 끝났다고 메인 스레드에 알려주고, 작업 결과 전달하기(ex. 파일 내용을 다 읽고 그 내용을 메인 스레드에 전달)
> 1. 메인 스레드는 빠르게 처리할 수 있는 작업을 집중해서 '혼자' 처리하고,
>     * CPU로 하는 수치 계산 작업이나 네트워크로 들어오는 클라이언트의 요청을 받아들이고 응답하는 작업
> 2. 파일 읽기와 같이 시간이 오래 걸리는 작업은 다른 스레드에 맡김 

**Node.js로 개발할 때 주의점**
![](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3753&directory=Untitled%2012.png&name=Untitled+12.png)
* 위의 그림에서 Node.js의 메인 스레드는 이 14분짜리 작업을 끝내기 전에는 다른 클라이언트의 요청을 처리하지 못하게 됨. File I/O 작업은 다른 스레드에게 맡길 수 있지만 CPU 수치 계산은 메인 스레드에서 수행하도록 설계되었기 때문 
* 따라서 Node.js는 CPU-intesive job(고화질 이미지 처리, 복잡한 시뮬레이션 계산, 딥러닝 작업 등)에는 적절치 않음 
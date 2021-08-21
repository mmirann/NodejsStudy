### 비동기 실행
> 특정 작업이 완료되었을 때 실행할 콜백을 등록해두고 바로 다음 코드로 실행을 넘기는 것
* nodejs에선 보통 비동기 함수를 사용하고 특수한 경우에만 동기 함수를 사용함
* 비동기 프로그래밍은 **비동기 함수**를 사용하거나 **EventEmitter 객체**를 사용함으로써 할 수 있음
* 
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

### 비동기 함수의 콜백이 실행되는 원리

```js
let num = 1;

setTimeout(() => {
  num = 2;
}, 0); // 1000 -> 0 밀리세컨즈로 수정

num = 3;

console.log(num);
```
-> 위의 코드에서 num은 '2'가 아닌 '3'으로 출력이 됨

![](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3765&directory=Untitled.png&name=Untitled.png)

node는
* 하나의 스레드로 자바스크립트 코드를 차례대로 실행하고
* 그 스레드는 그 후에 바로 Event Loop를 돌게 됨

Event Loop는 각종 콜백들의 실행 조건(특정 시간이 경과했는지 등)을 확인하고, 실제로 콜백을 실행하는 로직을 말함. Event Loop는 특정 콜백의 실행 조건이 만족된 것을 확인하면 Queue에 콜백을 삽입함 

![](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3765&directory=Untitled%204.png&name=Untitled+4.png)
node는 자바스크립트 코드를 하나의 스레드로 실행함. 이때 중요한 것은 지금 setTimeOut에 있는 콜백을 실행해도 되는지 (0초가 지났는지)에 대한 **판단을 하는 것은 아님!** 이 순간에는 단지 콜백을 등록만 함. 따라서 2번에서 콜백을 등록하고 연이어 3번과 4번이 실행됨.  

Node로 자바스크립트 파일을 실행하면 다음과 같은 일들이 수행됨.  
* 1단계: 하나의 스레드가 자바스크립트 코드를 실행하고
* 2단계: 그 후에, 그 스레드가 Event Loop라는 로직에서 각각의 콜백들에 대한 실행 여부를 판단하고 Queue에 넣은 후 Queue에 담긴 콜백들을 실행 
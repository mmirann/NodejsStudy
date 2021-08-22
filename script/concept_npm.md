### 모듈 검색 순서
![](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3732&directory=Untitled%20(1).png&name=Untitled+%281%29.png)

### 서드파티 모듈
1. `Package.json`이라는 파일을 가진 디렉토리가 패키지다.
2. 하나의 서드 파티 모듈은 하나의 패키지다.
3. 서드 파티 모듈을 관리할 때 쓰는 npm은 node package manager의 줄임말이다. 

### Package.json
1. name
   * 패키지의 이름
   * require 함수의 인자로 넣는 이름
2. version
   * 패키지의 버전
3. description
   * 패키지에 대한 설명
   * 패키지를 검색할 때 여기에 있는 내용도 검색 기준으로 활용
4. keywords
   * 패키지에 대한 키워드들, 해시태그 느낌
   * description처럼 검색 기준으로 활용되기 때문에 적절한 키워드들
5. bugs
   * 패키지를 사용하다가 발생하는 버그들을 신고할 수 있는 URL이나 이메일 주소가 적혀 있음
6. license
   * 패키지의 라이센스 정보가 적혀 있음
7. main
  ```js
  require('패키지 이름`)
  ```
* 이 패키지를 위의 코드로 로드했을 때 실제로 로드되는 파일의 이름이 적혀있는 필드
* 예를 들어, A라는 패키지의 `package.json`파일의 내용 중 `main` 필드에 `start.js`라는 값이 적혀 있음
* 이는 해당 프로젝트에 있는 다른 어떤 자바스크립트 파일 안에서 require('A') 코드는 결국 `start.js` 파일을 로드한다는 뜻이고 이 `start.js` 파일 내의 코드에서 `exports, module.exports` 등으로 외부에 공개한 객체를 가져오게 됨
* main 필드가 없다면 작업 디렉토리 안에서 `index.js`라는 파일을 찾아서 로드함
8. man
   *   패키지의 사용 설명서가 담긴 파일들의 경로가 적혀있음
9.  respository
    * 이 패키지의 코드가 관리되고 있는 레포지토리의 주소
    * 버전 관리 시스템의 저장소 URL 등이 여기 적혀 있음
10. scripts
    * npm으로 간편하게 실행할 수 있는 스크립트 파일들의 정보가 담겨 있음
    * 길이가 긴 명령어를 즐겨찾기 해두고 좀 더 편하게 호출하기 위해서 사용하는 필드
11. dependencies
    * npm install 라이브러리명을 통해 설치
    * 애플리케이션 동작과 연관
12. devdependencies
    * npm install 라이브러리명 --save-dev 혹은 npm install 라이브러리명 -D로 설치
    * 애플리케이션 동작과 직접적인 연관은 없지만, 이름 그대로 개발할 때 필요한 라이브러리 설치
    * 배포할 때 포함되지 않음
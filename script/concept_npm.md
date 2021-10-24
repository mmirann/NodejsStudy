### 모듈 검색 순서

![](<https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=3732&directory=Untitled%20(1).png&name=Untitled+%281%29.png>)

### 서드파티 모듈

1. `Package.json`이라는 파일을 가진 디렉토리가 패키지다.
2. 하나의 서드 파티 모듈은 하나의 패키지다.
3. 서드 파티 모듈을 관리할 때 쓰는 npm은 node package manager의 줄임말이다.

### Package.json

1. name
   - 패키지의 이름
   - require 함수의 인자로 넣는 이름
2. version
   - 패키지의 버전
3. description
   - 패키지에 대한 설명
   - 패키지를 검색할 때 여기에 있는 내용도 검색 기준으로 활용
4. keywords
   - 패키지에 대한 키워드들, 해시태그 느낌
   - description처럼 검색 기준으로 활용되기 때문에 적절한 키워드들
5. bugs
   - 패키지를 사용하다가 발생하는 버그들을 신고할 수 있는 URL이나 이메일 주소가 적혀 있음
6. license
   - 패키지의 라이센스 정보가 적혀 있음
7. main

```js
require('패키지 이름`)
```

- 이 패키지를 위의 코드로 로드했을 때 실제로 로드되는 파일의 이름이 적혀있는 필드
- 예를 들어, A라는 패키지의 `package.json`파일의 내용 중 `main` 필드에 `start.js`라는 값이 적혀 있음
- 이는 해당 프로젝트에 있는 다른 어떤 자바스크립트 파일 안에서 require('A') 코드는 결국 `start.js` 파일을 로드한다는 뜻이고 이 `start.js` 파일 내의 코드에서 `exports, module.exports` 등으로 외부에 공개한 객체를 가져오게 됨
- main 필드가 없다면 작업 디렉토리 안에서 `index.js`라는 파일을 찾아서 로드함

8. man
   - 패키지의 사용 설명서가 담긴 파일들의 경로가 적혀있음
9. respository
   - 이 패키지의 코드가 관리되고 있는 레포지토리의 주소
   - 버전 관리 시스템의 저장소 URL 등이 여기 적혀 있음
10. scripts
    - npm으로 간편하게 실행할 수 있는 스크립트 파일들의 정보가 담겨 있음
    - 길이가 긴 명령어를 즐겨찾기 해두고 좀 더 편하게 호출하기 위해서 사용하는 필드
11. dependencies
    - npm install 라이브러리명을 통해 설치
    - 애플리케이션 동작과 연관
12. devdependencies
    - npm install 라이브러리명 --save-dev 혹은 npm install 라이브러리명 -D로 설치
    - 애플리케이션 동작과 직접적인 연관은 없지만, 이름 그대로 개발할 때 필요한 라이브러리 설치
    - 배포할 때 포함되지 않음

### Semantic Version

> X.Y.Z  
> X: 메이저 버전  
> Y: 마이너 버전  
> Z: 패치 버전

- API: 외부에서 사용할 수 있도록 공개된 함수, Semantic Version에서는 이 API의 변화를 기준으로 버전을 업데이트

**패치 버전**

- API에 변화를 주지 않는 범위내에서의 변화가 이루어진 경우
- 코드에 존재하던 버그를 해결하거나, 알고리즘을 바꿔서 그 효율성을 향상시킨 경우

**마이너 버전**

- 이전 버전의 API와 호환되는 API 상의 변화가 발생했을 때 업데이트
- 새로운 API를 추가한 경우
- API 상의 변화가 생기긴 했지만 이미 존재했던 API들은 건드리지 않는 범위의 변화(단순 API 추가) 발생

**메이저 버전**

- 이전 버전의 API와 호환되지 않는 API 상의 변화가 발생했을 때 업데이트
- 기존의 API를 아예 삭제했거나 그 이름을 바꾸는 등의 변화

### package.json vs package-lock.json

- 패키지를 공유할 때는 보통 그 안의 node_modules 디렉토리를 제외하고 공유
- 이때 패캐지 안의 package.json 파일 내용 중 dependencies 필드의 정보가
- 공유받는 측에서 node_modules 디렉토리를 재생성하는 데 사용되며
- 이때 공유해준 사람과 공유받은 사람 간에 node_modules 디렉토리 내부의 차이가 발생하지 않도록 방지하려면
- package-lock.json 파일도 package.json 파일과 함께 공유해줘야 함

### npm 명령어

```js
npm update
```

package.json 파일의 dependencies 필드에 표시된 해당 패키지의 Version Range Syntax가 혀용하는 범위 내에서만 업데이트

```js
npm update [패키지명]
```

일부 패키지의 경우, 최신 버전으로 업데이트하기 전에 별도의 검토가 필요해서 모든 패키지를 최신의것으로 바꾸면 안되는 경우 특정 패키지만 업데이트

```js
npm install [패키지명] --save-dev
```

개발용도로만 필요한 패키지를 설치할 때 사용, `pakage.json`에 `devDependencies`에 추가됨

```js
npm install --production
```

`devDendencies`에 있는 패키지들(개발 용도로만 필요하고 배포 용도로는 필요하지 않는 패키지들)은 제외하고 `dependencies`에 있는 패키지들만 node_modules 디렉토리에 설치하게 됨

### npm과 yarn

- yarn: npm의 느린 속도 등을 해결하기 위해 페이스북에서 제작, 오프라인 캐시(한번 설치한 패키지를 계속 보관해두는 기능) 등의 추가 기능 탑재
- npm 또한 그 이후로 속도가 향상되고 캐시 기능 등도 도입되며 많으 발전을 이룸

1. 설치 방법의 차이
   - npm은 Node.js를 설치할 때 함께 설치되지만, yarn은 별도로 설치해줘야 하는 패키지 -> 전역 방식으로 설치
2. 명령어의 차이

- 패키지 생성 : npm init - yarn init
- 패키지 업로드 : npm publish - yarn publish
- 패키지 설치 : npm install [패키지명] - yarn add [패키지명]
- 패키지 삭제 : npm uninstall [패키지명] - yarn remove [패키지명]
- 패키지 업그레이드 : npm update [패키지명] -yarn upgrade [패키지명]
- 패키지 정보 조회 : npm info [패키지명] - yarn info [패키지명]
- 현재 패키지의 dependencies 조회 : npm list - yarn list

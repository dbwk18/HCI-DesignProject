# Getting Started with Create React App

  

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

  

## Available Scripts

  

In the project directory, you can run:

  

### `yarn start`

  

Runs the app in the development mode.\

Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

  

The page will reload if you make edits.\

You will also see any lint errors in the console.

  

### 2021/05/21 업데이트

  

1. Router 추가

- react-router-dom 패키지 설치, --save option으로 package-lock.json과 package.json에 저장

- Routes.js 추가하고 컴포넌트 연결, index.js에서 App.js가 아니라 Routes.js를 호출하도록 함

- App.js를 쓰지않고 바로 Mainpage를 부르도록 함. 현재 App.js는 쓰이지 않는 상태이나 삭제는 하지 않고 주석처리만 해놓음

  

2. 달력 2021년 1월~12월 까지 추가

- 달력 오른쪽 위에 있는 '<', '>'버튼을 통해 월을 이동할 수 있게 해놓음

- 1월 이전, 12월 이후로는 못가게 해 놓음

- 기존에 달력에 있던 이벤트는 형태만 따로 저장해놓고 달력에서는 지워놓음

  

3. Pop-up창 추가

- 달력 왼쪽 위에 있는 add버튼을 누를 시 클릭한 위치로부터 팝업창이 나오도록 설정해놓음

- 내부 버튼들의 기능은 아직 안 만듦

  

### 2021/05/25 업데이트

  

1. **완성한 것**

- Task1 구현
-- popup창은 새로 팝업창을 띄우지 않고 새롭게 element를 만들어서 구현

- Categorybox 구현

  

2. **고칠 것/ 추가할 것**

- 24일~31일에 일정을 추가할 때 종종 해당 날짜에 일정이 생성되지 않고 달력의 첫 번째 행에서 생성됨
-- day_info에서 같은 날이 두 번있어서 그럼
- 같은 날에 일정이 여러 개인 경우 안겹치게 배치하기
- 일정에 마우스 올려놓으면 세부정보가 보이도록
-- 긴 일정: 시작일과 끝 일을 전부 연결하지 말고 처음날짜와 끝 날짜만 달력에 나타내면 좋지 않을까
-- 일정의 시작에 마우스를 올려놓았을 때는 description과 일정의 끝을 보여주고 일정의 끝에 마우스를 올려놓았을 때는 description과 일정의 시작을 보여줌
- 하루짜리 일정은 시작시간과 끝 시간을 보여줌
- 긴 일정의 경우 시작일과 끝 일의 모양을 약간 다르게 함: 이펙트를 주거나 모양을 바꿈
- 현재 feedback이모티콘이 추가만 되고 삭제가 되지 않음. 월 이동할 때 적절히 지우던지 display: none 해주던지 해야함
- 

### 2021/05/26 업데이트

1. **완성한 것**
- 태스크 3개 합침

2. **고친 것**
- 합쳤을 때 Popup 박스에 관련된 내용이 Components/Calendar와 Components에 동시에 존재하여 Components안에 있던 폴더를 삭제함
- Projectpage/Donetaskpage.css와 Projectpage/Subtaskpage.css에서 모든 button에 일괄적으로 디자인을 적용했는데 잠시 주석처리해둠
-- 해당 페이지의 버튼들에만 적용될 수 있도록 수정하기

# Frontend Mentor - Equalizer landing page
🔗 Live Demo: https://equalizer-landing-page-220925.netlify.app

<br/>

## 사용 
- HTML
- CSS

<br/>

## 페이지 
|모바일|태블릿|데스크탑|
|---|---|---|
|![equalizer-mob-resize](https://github.com/khkh0109/frontend-mentor-challenges/assets/77181642/2b5706e6-63a8-4bfc-861f-01bbcdc70927)|![equalizer-tab](https://github.com/khkh0109/frontend-mentor-challenges/assets/77181642/fc2c3fc9-492d-4ee9-86c2-a45e74db8248)|![equalizer-desk](https://github.com/khkh0109/frontend-mentor-challenges/assets/77181642/90316764-c74d-4cb7-9975-b30460089ec3)|

<br/>

## 레이아웃 
<img width="400" alt="equalizer-layout" src="https://github.com/khkh0109/frontend-mentor-challenges/assets/77181642/7f6840a4-cb6a-40fd-8bf7-5a34fe536640">


<br/>

## 학습한 내용 
- 웹 접근성을 고려한 텍스트 숨기기
    - 화면에 SNS 로고는 아이콘으로 표시된다. 보는 사람은 각각 어떤 SNS인지 알 수 있지만 스크린 리더를 사용하는 사용자는 스크린 리더가 아이콘을 읽지 않으면 어떤 SNS인지 알기 힘들다.
    - 그래서 a 요소에 각 SNS 이름을 추가하고 화면에는 안 보이게 가리되 스크린 리더는 읽을 수 있도록 처리했다.
    - text-indent에 음수값을 지정해서 아이콘 영역 바깥으로 텍스트를 밀어내고, overflow를 hidden으로 설정해서 영역을 벗어나는 요소(SNS 이름)를 가렸다. 그리고 mask를 사용해 SNS 아이콘을 추가했다.
        - `text-indent` 텍스트 들여쓰기의 길이를 설정함
        - `mask` 아이템이 부분적으로만 보여지게 하거나 완전히 가려서 보이지 않게 할 수 있음
    - 참고: `display: none`으로 요소를 가리면 해당 요소가 완전히 사라지고 스크린리더로 읽을 수도 없게된다.
- 링크 클릭하면 메일 보내기
    - a 태그의 href 속성에 `mailto:` 를 이메일 주소 앞에 붙이면 사용자가 사용하는 메일 보내기 프로그램이 실행됨
      ```html
      <a href="mailto:equalizer@example.com">equalizer@example.com</a>
      ```

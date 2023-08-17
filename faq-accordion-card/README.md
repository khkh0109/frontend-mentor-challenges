# Frontend Mentor - FAQ accordion card
🔗 Live demo: https://faq-accordion-card-220906.netlify.app

<br/>

## 사용 
- HTML
- CSS
- JavaScript

<br/>

## 페이지 
|모바일|데스크탑|
|---|---|
|![faq-mobile](https://github.com/khkh0109/frontend-mentor-challenges/assets/77181642/d875866d-d3dd-4d32-9358-02f832d92b8f)|![faq-desktop](https://github.com/khkh0109/frontend-mentor-challenges/assets/77181642/542e534f-dcf6-419b-a1c4-042b146945b9)|

<br/>

## 학습한 내용 
- 가상 요소의 CSS style 변경하기
    - 가상 요소는 DOM의 일부가 아니기 때문에 가상 요소에 직접 접근 못함
    - 그래서 [사용자 지정 속성](https://developer.mozilla.org/ko/docs/Web/CSS/Using_CSS_custom_properties)을 사용해 가상 요소의 프로퍼티 값을 변경해야 한다. 
    - 제어하고 싶은 속성에 사용자 지정 속성을 값으로 설정한다.
        ```css
        .card__accordion li h2::after {
          content: '';
          display: block;
          width: 10px;
          height: 6px;
          background-image: url('./images/icon-arrow-down.svg');
          background-repeat: no-repeat;
          background-size: contain;
          transform: var(--rotate);
        }
        ```
    - 그 다음 JS에서 `setProperty()` 메서드를 사용해 CSS 프로퍼티의 값을 설정할 수 있다.
      ```js
      element.style.setProperty('--rotate', 'rotate(180deg)');
      ```

# Frontend Mentor - NFT preview card component
🔗 Live demo: https://nft-preview-0109.netlify.app/

<br/>

## 사용 
* HTML
* CSS

<br/>

## 페이지 
|NFT 카드|이미지 hover|
|---|---|
|<img width="800" alt="nft-card" src="https://github.com/khkh0109/frontend-mentor-challenges/assets/77181642/ea3c3eca-b587-4472-a8e8-56c7999ffa95">|![nft-img-hover](https://github.com/khkh0109/frontend-mentor-challenges/assets/77181642/4a09a53e-4c39-4f7f-8414-b69e38b42c69)|

<br/>

## 트러블 슈팅 
### 문제 
사파리, 파이어폭스에서 이미지에 커서가 올라갔을때 a요소의 가상 요소가 보이지 않음
### 접근 
- 이미지를 클릭했을때 어디로 이동할 것 같아서 이미지를 a요소로 감쌌음
- 하지만 a 요소(`.card__img`)의 기본 display는 inline이다. inline은 가로, 세로 속성을 무시함
- 개발자 도구로 봤을때 크롬에서는 `.card__img`의 display가 inline일때 width와 height를 auto로 지정하는데 사파리는 auto로 지정하지 않는다.
### 해결 
a 요소(`.card__img`)의 display를 block으로 바꿔야 사파리, 파이어폭스에서 가상 요소가 보임

<br/>

## 학습한 내용 
- 가상요소
    - 선택자에 추가하는 키워드
    - 선택한 요소의 일부분에만 스타일을 입힐 수 있음
    - content 속성을 꼭 지정해야 한다. 지정하지 않으면 가상 요소가 보이지 않는다.

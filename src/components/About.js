import React from 'react'
import styled from "styled-components";

const Wrap = styled.div`
  width: 1070px;
  padding: 20px;
  text-align: center;
  margin: 0 auto;

  h2 {
  font-weight: bold;
  color: coral;
  }
`

const AboutImg = styled.div`
margin: 20px 0; 
  img {
    width: 800px;
    height: 500px;
  }  
`;

const TxtBox = styled.div`
  border-top: #ddd;
  border-bottom: #ddd;
  padding: 20px;

  h4 {
  margin-bottom: 20px;
  font-weight: bold;
  }
  p {
   color: #2d2d2d;
  }
`

export default function About() {
  return (
    <Wrap>
      <h2>작은 골목에서 넓은 곳까지</h2>

    <AboutImg>
        <img src={process.env.PUBLIC_URL + '/img/About.png'} alt="사장 소개 이미지" />
    </AboutImg>

    <TxtBox>
      <h4>포장마차 같은 따뜻함과 같이 라면 한 그릇</h4>
      <p>골목길에서 방랑하던 어느 한 고양이가 한 가게의 여러 상자와 라면이 섞인 걸 발견하고</p>
      <p>버려진 포장마차에서 라면을 끓기 시작해 어느새 사람들의 비밀 맛집으로 소개되어</p>
      <p>단골손님들의 발걸음이 끊이지 않지만 이번엔 바쁜 사람들한테도 쉽게 먹을 수 있도록</p>
      <p>뒷골목 포장마차 일 끝나면, 또 다른 온라인 포장마차 요리를 준비하게 되었다는 스토리</p>
    </TxtBox>
      
    </Wrap>
  )
}

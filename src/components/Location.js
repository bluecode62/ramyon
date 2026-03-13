import React from 'react'
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  h2 {
  margin: 20px 0;
    font-weight: bold;
    color: coral;
  }
`;

const AboutImg = styled.div`
  margin: 20px 0;
  img {
    height: 650px;
    object-fit: cover;
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

export default function Location() {
  return (
   <Wrap>
      <h2>쇼핑몰 위치 및 가게 위치</h2>

        <AboutImg>
          <img
            src={process.env.PUBLIC_URL + "/img/Location.png"}
            alt="지도 이미지"
          />
        </AboutImg>
       
    
      <TxtBox>
        <h4>부산, 수영구동, 냥이길 12</h4>
        <p>수영구동 어느 뒷골목에 들어가야 찾을 수 있는 곳</p>
        <p>주로 시장 뒷골목에서 고양이들이 집합해서</p>
        <p>어디론가 이동한다 싶으면 아마도 거기일지도?</p>
      </TxtBox>
    </Wrap>
  )
}

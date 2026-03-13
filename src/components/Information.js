import React from "react";
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

export default function Information() {
  return (
    <Wrap>
      <h2>라면냥이 포장마차는</h2>

        <AboutImg>
          <img
            src={process.env.PUBLIC_URL + "/img/Information01.png"}
            alt="사장 소개 이미지"
          />
        </AboutImg>
        <AboutImg>
          <img
            src={process.env.PUBLIC_URL + "/img/Information02.png"}
            alt="사장 소개 이미지"
          />
        </AboutImg>
        <AboutImg>
          <img
            src={process.env.PUBLIC_URL + "/img/secret.png"}
            alt="사장 소개 이미지"
          />
        </AboutImg>
    
      <TxtBox>
        <h4>포근한 맛과 따뜻함을 담아 보내는 라면 파는 곳</h4>
        <p>꾸준히 라면냥이 포장마차를 이용하는 고객에게</p>
        <p>집 초대장과 여러 생선요리와 라면 먹을 수 있는 라면파티 참여권이</p>
        <p>온다는 소문이?</p>
      </TxtBox>
    </Wrap>
  );
}

import React from "react";
import { useParams } from "react-router-dom";

export default function Details(props) {
  
  const { bests } = props;
  const { id } = useParams();

 return (
    <div className="best_box">
      <h1>라면 상세정보</h1>
      <img src={bests[id].image} style={{width: '500px'}} alt="상세이미지" />
      <h4>{bests[id].title}</h4>
      <d>{bests[id].desc}</d>
      <p>{bests[id].price}</p>
    </div>
  )
}

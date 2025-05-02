import React from "react";
import { useEffect, useState } from "react";
import "../../assets/sass/Section1.scss";

const Section1 = () => {
  const [textActive, setTextActive] = useState(false);
  const [showCircle, setShowCircle] = useState(false);
  const [bgiIdx, setBgIdx] = useState(0);

  const bgImgs = ["/img/img1.jpg", "/img/img2.jpg", "/img/img3.jpg"];

  useEffect(() => {
    const timer = setTimeout(() => setTextActive(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const showEvent = () => {
    setShowCircle(true);
    setTimeout(() => {
      setBgIdx((prevIndex) => (prevIndex + 1) % bgImgs.length);
    }, 500);
    setTimeout(() => {
      setShowCircle(false);
    }, 2000);
  };
  return (
    <div className="section1">
      {bgImgs.map((item, idx) => (
        <img
          key={idx}
          src={item}
          alt={`img${idx}`}
          className={`imgBg ${bgiIdx === idx ? "bgOn" : ""}`}
        ></img>
      ))}
      <div className={`textBox ${textActive ? "textOn" : ""}`}>
        <h1>환영합니다 나의 타입스크립트 세계로</h1>
        <button onClick={showEvent}>다음 이미지</button>
      </div>

      {showCircle && <div className="bigCircle"></div>}
    </div>
  );
};

export default Section1;

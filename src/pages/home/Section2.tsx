import React, { use } from "react";
import { useEffect, useRef, useState } from "react";
import "../../assets/sass/Section2.scss";

const Section2 = () => {
  // Ref 선언 부분
  const sectionRef = useRef<HTMLElement>(null); //HTMLElement 는 어떤거든 상관없이 html tag 를 말하는 거임
  const leftRef = useRef<HTMLDivElement>(null);
  const rightTopRef = useRef<HTMLDivElement>(null);
  const rightBottomRef = useRef<HTMLDivElement>(null);

  // useState 선언 부분
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(100);
  const [IsAnimationTrue, setIsAnimationTrue] = useState(false);

  // useEffect 선언 부분
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([item]) => {
        if (item.isIntersecting && !IsAnimationTrue) {
          leftRef.current?.classList.add("active"); //current 값이 있으면 active 라는 클래스 추가~
          setTimeout(() => {
            rightTopRef.current?.classList.add("active");
          }, 500);
          setTimeout(() => {
            rightBottomRef.current?.classList.add("active");
            updateCount();
          }, 1500);
          setIsAnimationTrue(true);
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
    // 메모리 정리
  }, [IsAnimationTrue]);

  // 숫자 올라가는 함수
  const updateCount = () => {
    let num1 = 0;
    let num2 = 1000;

    // 숫자 슈슈슝 올라가게 만들기
    const timer1 = setInterval(() => {
      num1 += 1;
      setCount1(num1);
      if (num1 === 100) clearInterval(timer1);
    }, 40);
    const timer2 = setInterval(() => {
      num2 += 100;
      setCount2(num2);
      if (num2 >= 10000) clearInterval(timer2);
    }, 50);
  };

  return (
    <section className="section2" ref={sectionRef}>
      <div className="left" ref={leftRef}>
        <h1>our Stroy</h1>
      </div>
      <div className="right">
        <div className="top" ref={rightTopRef}>
          <h3>우리의 삶이 건강해지고 당신의 비즈니스가 더 성장하는 스토리</h3>
          <h4>
            고객의 삶과 비즈니스가 건강한 성장을 이룰 수 있도록 맞춤 서비스,
            앞선 전문성, 새로운 연결로 차별화된 식음 솔루션을 제안
          </h4>
        </div>
        <div className="bottom" ref={rightBottomRef}>
          <span className="countText">
            <span>{count1}</span>
            만식
          </span>
          <span className="countText">
            <span>{count2.toLocaleString()}</span>개
          </span>
        </div>
      </div>
    </section>
  );
};

export default Section2;

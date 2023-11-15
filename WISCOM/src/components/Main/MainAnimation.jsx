import * as A from './MainAnimationStyle';
import dsce from './../../img/Main/dsce.png';
import web from './../../img/Main/web.png';
import ios from './../../img/Main/ios.png';
import ui from './../../img/Main/ui.png';
import metaverse from './../../img/Main/metaverse.png';
import app from './../../img/Main/app.png';
import ai from './../../img/Main/ai.png';
import game from './../../img/Main/game.png';
import star from './../../img/Main/star.png';
import { useEffect, useRef, useState } from 'react';

export default function MainAnimation() {
  const [isAnimationVisible, setIsAnimationVisible] = useState(false);
  const animationWrapperRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7, // 50% 이상이 화면에 나타날 때 알림을 받음
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsAnimationVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (animationWrapperRef.current) {
      observer.observe(animationWrapperRef.current);
    }

    return () => {
      if (animationWrapperRef.current) {
        observer.unobserve(animationWrapperRef.current);
      }
    };
  }, []);

  return (
    <A.AnimationWrapper className="main-animation" ref={animationWrapperRef}>
      {isAnimationVisible && (
        <>
          <A.Text>
            여러분들이 우리 컴퓨터학과에서 보낸 3년을 마무리하는 2023년 위즈컴 행사를 열게 됨을<br></br>
            매우 기쁘게 생각하고 학과 교수들을 대표해서 축하드립니다. <br></br>
            막연하고 두려운 마음으로 백지에서 시작하여 오로지 여러분의 힘으로 이루어낸 졸업작품은 <br></br>
            컴퓨터과학 분야에서의 성취를 상징하며, 여러분이 어떤 길을 선택하더라도 가치있는 기여를 할 수 있다는 능력과
            의지를 보여줍니다.<br></br>
            <br></br>하지만 컴퓨터과학은 끊임없는 변화와 혁신의 분야입니다.<br></br>
            오늘은 축하하는 날일뿐만 아니라, 여러분의 앞으로가 더 큰 도전과 성공으로 가득한 여정의 시작이기도 합니다.
            <br></br>
            우리는 여러분의 미래를 응원하고, 계속해서 학습하고 성장하며 이 분야를 선도하는 지식인으로 거듭나길
            기대합니다.<br></br> 다시 한번 소중한 작품을 위즈컴에 전시하여 컴퓨터학과를 빛내준 모든 참가자들에게
            감사하고<br></br> 11개 작품 하나하나에 찬사와 칭찬의 말을 전합니다.
            <br></br>
            <br></br>
            컴퓨터공학전공 학과장 유견아
          </A.Text>
          <A.Leading>LEADING</A.Leading>
          <A.Woman>WOMAN</A.Woman>
          <A.Achieving>ACHIEVING</A.Achieving>
          <A.Developer>DEVELOPER</A.Developer>
          <A.Respect>RESPECT</A.Respect>
          <A.Perfect>PERFECT</A.Perfect>
          <A.DsceImg src={dsce} />
          <A.WebImg src={web} />
          <A.Star1 src={star} />
          <A.IosImg src={ios} />
          <A.UiImg src={ui} />
          <A.MetaverseImg src={metaverse} />
          <A.AppImg src={app} />
          <A.Star2 src={star} />
          <A.AiImg src={ai} />
          <A.GameImg src={game} />
        </>
      )}
    </A.AnimationWrapper>
  );
}

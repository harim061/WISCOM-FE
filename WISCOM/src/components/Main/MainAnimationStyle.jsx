import { styled, keyframes } from 'styled-components';

export const drop = keyframes`
0%{ /* 1.2초 지연을 가정할 때 */
  opacity: 1; /* 시작부터 1.2초까지는 투명 */
  left: 40vw;
  bottom: 60vw;
}
11% { /* 애니메이션이 시작될 때 */
  opacity: 1; /* 여기서부터 요소가 보여짐 */
  left: 40vw;
  bottom: 50vw;
  opacity: 1;
}
100%{
  opacity: 1;
}
`;
export const fadein = keyframes`
0%,50% {
  opacity: 0;
  transform: translate(0, -2vw);
}
100% {
  opacity: 1;
  transform: translate(0, 0);
}
`;

export const AnimationWrapper = styled.div`
  height: 70vw;
  position: relative;
  overflow: hidden;
`;
export const Text = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-family: Pretendard;
  font-size: 1.5vw;
  text-align: center;
  width: 90vw;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: absolute;
  bottom: 40vw;
  left: 5vw;
  animation: ${fadein} 4s ease-in-out;
`;

export const Leading = styled.p`
  color: var(--LIGHTGREEN, #75ff72);
  text-align: center;
  font-size: 4vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: absolute;
  transform: rotate(90deg);
  bottom: 15vw;
  left: -5vw;
  opacity: 0;
  animation: ${drop} 0.7s ease-out 0.6s forwards;
`;
export const Woman = styled.p`
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  font-family: Pretendard;
  font-size: 4vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: absolute;
  transform: rotate(-25deg);
  left: 6vw;
  bottom: 12vw;
  opacity: 0;
  animation: ${drop} 0.7s ease-out 0.6s forwards;
`;
export const Achieving = styled.p`
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  font-family: Pretendard;
  font-size: 4vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: absolute;
  bottom: 4vw;
  left: 0;
  opacity: 0;
  animation: ${drop} 0.5s ease-out 0.5s forwards;
`;
export const Developer = styled.p`
  color: var(--LIGHTGREEN, #75ff72);
  text-align: center;
  font-family: Pretendard;
  font-size: 4vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  animation: ${drop} 0.4s ease-out 0.5s forwards;
`;
export const Respect = styled.p`
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  font-family: Pretendard;
  font-size: 4vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: absolute;
  transform: rotate(-70deg);
  bottom: 28.5vw;
  left: 53vw;
  opacity: 0;
  animation: ${drop} 0.9s ease-out 0.6s forwards;
`;
export const Perfect = styled.p`
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  font-family: Pretendard;
  font-size: 4vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: absolute;
  transform: rotate(-40deg);
  bottom: 6vw;
  left: 82vw;
  opacity: 0;
  animation: ${drop} 0.7s ease-out 0.5s forwards;
`;
export const WebImg = styled.img`
  width: 20vw;
  position: absolute;
  bottom: 22vw;
  left: 38vw;
  opacity: 0;
  animation: ${drop} 0.9s ease-out 0.6s forwards;
`;
export const IosImg = styled.img`
  width: 14.8vw;
  position: absolute;
  bottom: 3vw;
  left: 22.5vw;
  opacity: 0;
  animation: ${drop} 0.6s ease-out 0.6s forwards;
`;
export const UiImg = styled.img`
  width: 20vw;
  position: absolute;
  bottom: 0;
  left: 31vw;
  animation: ${drop} 0.8s ease-out;
`;
export const DsceImg = styled.img`
  width: 22vw;
  position: absolute;
  left: 8.5vw;
  bottom: 22vw;
  opacity: 0;
  animation: ${drop} 0.95s linear 0.6s forwards;
`;
export const MetaverseImg = styled.img`
  width: 22vw;
  position: absolute;
  bottom: 8vw;
  left: 49vw;
  animation: ${drop} 1s ease-out;
`;
export const AppImg = styled.img`
  width: 20vw;
  position: absolute;
  bottom: 0;
  left: 46vw;
  margin-bottom: 1vw;
  animation: ${drop} 0.6s ease-in-out;
`;
export const AiImg = styled.img`
  width: 20vw;
  position: absolute;
  bottom: 1vw;
  left: 63vw;
  animation: ${drop} 0.9s ease-out;
`;
export const GameImg = styled.img`
  width: 20vw;
  position: absolute;
  bottom: 9.5vw;
  left: 75vw;
  opacity: 0;
  animation: ${drop} 0.8s ease-out 0.6s forwards;
`;
export const Star1 = styled.img`
  width: 3.5vw;
  position: absolute;
  bottom: 18vw;
  left: 50vw;
  opacity: 0;
  animation: ${drop} 0.4s ease-out 0.5s forwards;
`;
export const Star2 = styled.img`
  width: 3.5vw;
  position: absolute;
  bottom: 0;
  left: 65vw;
  margin: 2vw;
  animation: ${drop} 0.6s linear;
`;

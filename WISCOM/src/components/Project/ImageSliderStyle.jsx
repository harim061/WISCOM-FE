import styled from 'styled-components';

export const ImageSliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  --arrow-size: 90px; /* 화살표 크기 변수 설정 */
  position: relative; /* 부모 클래스에 relative 포지션을 추가 */
  margin-bottom: 200px;

  @media (min-width: 1441px) {
    margin: 0 auto; /* 정렬 필수!!!!! */
    margin-bottom: 100px;
  }

  @media (max-width: 425px) {
    margin-bottom: 100px;
  }
`;

export const SliderBannerWrap = styled.div`
  width: 1100px;
  height: auto;
  position: relative;
  aspect-ratio: 11 / 7; /* 가로 세로 비율을 11:7로 고정 */

  border-radius: 30px;
  box-shadow: 0 0.01px 0.01px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  align-items: center;

  margin-left: 10%;
  margin-right: 10%;

  justify-content: center;

  @media (min-width: 1440px) {
    width: 1400px;
  }
`;

export const SlideBanner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  opacity: 0;
  transition: opacity 0.8s ease-in-out;

  border-radius: 30px;
  border: 3px solid rgba(0, 0, 0, 0.1);

  &.active {
    opacity: 1;
  }
`;

export const Arrow = styled.div`
  position: absolute;
  width: var(--arrow-size);
  height: calc(var(--arrow-size) * 1.43);
  display: flex;
  transition: opacity 0.8s ease-in-out;

  @media (max-width: 1000px) {
    width: 60px; /* 화면이 850px보다 작을 때 화살표 크기를 60px로 조절 */
    height: calc(60px * 1.43);
  }

  @media (max-width: 768px) {
    width: 50px; /* 화면이 850px보다 작을 때 화살표 크기를 60px로 조절 */
    height: calc(50px * 1.43);
  }

  @media (max-width: 550px) {
    width: 40px; /* 화면이 850px보다 작을 때 화살표 크기를 60px로 조절 */
    height: calc(40px * 1.43);
  }

  @media (max-width: 426px) {
    width: 30px; /* 화면이 850px보다 작을 때 화살표 크기를 60px로 조절 */
    height: calc(30px * 1.43);
  }
`;

export const PreArrow = styled(Arrow)`
  left: 0;
  transform: rotate(180deg); /* 세로 가운데 정렬을 위해 추가 */
  z-index: 300;
`;

export const NextArrow = styled(Arrow)`
  right: 0;
`;

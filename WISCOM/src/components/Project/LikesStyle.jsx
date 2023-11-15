import styled from 'styled-components';

export const LikesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center; /* 가로 가운데 정렬 */
  margin-top: 10vw;
  margin-bottom: 10vw;

  @media screen and (min-width: 0px) and (max-width: 320px) {
    display: none;
  }
`;

export const LikesImg = styled.img`
  margin: 0 auto;
  cursor: pointer;

  @media screen and (min-width: 321px) and (max-width: 393px) {
    width: 140px;
  }
  @media screen and (min-width: 394px) and (max-width: 834px) {
    width: 282px;
  }
`;

export const LikesSpan = styled.span`
  font-size: 90px;
  font-weight: bold;

  @media screen and (min-width: 321px) and (max-width: 393px) {
    font-size: 30px;
  }
  @media screen and (min-width: 394px) and (max-width: 834px) {
    font-size: 55px;
  }
`;

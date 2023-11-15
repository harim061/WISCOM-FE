import styled from 'styled-components';

export const HashTagWrapper = styled.div`
  height: 60px;
  border-radius: 50px;
  background-color: #75ff72;
  color: #000;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;



  @media screen and (min-width: 319px) and (max-width: 700px) {
    height: 35px;
    white-space: nowrap:
  }

  @media screen and (min-width: 700px) and (max-width: 900px) {
    height: 45px;
    white-space: nowrap:
  }
`;

export const ClickedHashTagWrapper = styled.div`
  height: 60px; 
  border-radius: 50px;
  background-color: #75ff72;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  box-shadow: 0vw 0.3vw 0.3vw 0.3vw rgb(0, 0, 0, 0.25) inset;

  @media screen and (min-width: 319px) and (max-width: 700px) {

    height: 35px;
    white-space: nowrap:
  }

  @media screen and (min-width: 700px) and (max-width: 900px) {

    height: 45px;
    white-space: nowrap:
  }
`;

export const HashTagSpan = styled.div`
  font-size: 24px;
  font-weight: normal;

  @media screen and (min-width: 319px) and (max-width: 530px) {
    font-size: 15px;
  }

  @media screen and (min-width: 530px) and (max-width: 700px) {
    font-size: 16px;
  }

  @media screen and (min-width: 700px) and (max-width: 900px) {
    font-size: 20px;
  }
`;

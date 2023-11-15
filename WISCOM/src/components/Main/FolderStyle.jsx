import styled from 'styled-components';

export const FolderWrapper = styled.div`
  margin: 1rem 10%;
  padding: 30rem;
  position: relative;
  //프로젝트 폴더
  :nth-child(1) {
    top: 8rem;
    left: 5%;
  }
  //챗봇 폴더
  :nth-child(2) {
    top: 0;
    right: 25%;
  }
  //방문록 폴더
  :nth-child(3) {
    top: 25rem;
    left: 35%;
  }
  //큐알코드 폴더
  :nth-child(4) {
    top: 20rem;
    right: 5%;
  }
  //개발자 폴더
  :nth-child(5) {
    top: 40rem;
    left: 0;
  }
  @media screen and (min-width: 650px) and (max-width: 695px) {
    padding: 28rem;
  }
  @media screen and (min-width: 630px) and (max-width: 650px) {
    padding: 27rem;
  }
  @media screen and (min-width: 600px) and (max-width: 630px) {
    padding: 25rem;
  }
  @media screen and (min-width: 290px) and (max-width: 600px) {
    padding: 14rem 13rem;
    //프로젝트 폴더
    :nth-child(1) {
      top: 5rem;
    }
    //챗봇 폴더
    :nth-child(2) {
      top: 0;
    }
    //방문록 폴더
    :nth-child(3) {
      top: 15rem;
    }
    //큐알코드 폴더
    :nth-child(4) {
      top: 8rem;
    }
    //개발자 폴더
    :nth-child(5) {
      top: 22rem;
    }
  }
`;
export const FolderGroup = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;

  @media screen and (min-width: 920px) {
    width: 23%;
  }
  @media screen and (min-width: 695px) and (max-width: 920px) {
    width: 20%;
  }
  @media screen and (min-width: 650px) and (max-width: 695px) {
    width: 17%;
  }
  @media screen and (min-width: 370px) and (max-width: 650px) {
    width: 15%;
  }
  @media screen and (min-width: 290px) and (max-width: 370px) {
    width: 18%;
  }
`;
export const Folder = styled.img`
  width: 100%;
  transition: margin-bottom 0.2s ease;

  &:hover {
    margin-bottom: 10%;
  }
`;
export const FolderName = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-family: Pretendard;
  font-weight: 200;
  text-align: center;
  @media screen and (min-width: 920px) {
    font-size: 3rem;
  }
  @media screen and (min-width: 650px) and (max-width: 920px) {
    font-size: 2rem;
  }
  @media screen and (min-width: 570px) and (max-width: 650px) {
    font-size: 1.5rem;
  }
  @media screen and (min-width: 290px) and (max-width: 570px) {
    font-size: 1rem;
  }
`;

export const ClickInfo = styled.div`
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  font-family: Pretendard;
  font-weight: 100;
  padding-bottom: 3rem;

  @media screen and (min-width: 920px) {
    font-size: 3rem;
  }
  @media screen and (min-width: 650px) and (max-width: 920px) {
    font-size: 2rem;
  }
  @media screen and (min-width: 570px) and (max-width: 650px) {
    font-size: 1.5rem;
    padding-bottom: 1rem;
  }
  @media screen and (min-width: 290px) and (max-width: 570px) {
    font-size: 1rem;
    padding-bottom: 1rem;
  }
  opacity: 0.99;
  animation: loading 0.7s linear infinite alternate;
  animation-name: loading-color;
  animation-delay: calc(0.1s);

  @keyframes loading-color {
    0%,
    20% {
      color: ${(props) => props.theme.colors.white};
    }
    80%,
    100% {
      color: inherit;
    }
  }
`;

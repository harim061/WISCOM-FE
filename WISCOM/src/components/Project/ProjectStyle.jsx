import styled from 'styled-components';

/*WorkInof 부분*/

export const WorkContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 4rem;
  color: #20217d;
  margin-bottom: 11.6rem;
  margin-top: 5.7rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 319px) and (max-width: 426px) {
    font-size: 3rem;
  }
`;

export const WorkLogo = styled.img`
  border-radius: 320px;
  margin-left: 22rem;
  width: 30rem;
  height: 30rem;

  @media screen and (min-width: 931px) and (max-width: 1030px) {
    margin-left: 20rem;
    margin-right: -12rem;
    width: 25rem;
    height: 25rem;
  }

  @media screen and (min-width: 893px) and (max-width: 931px) {
    margin-left: 20rem;
    margin-right: -11rem;
    width: 25rem;
    height: 25rem;
  }
  @media screen and (min-width: 814px) and (max-width: 893px) {
    margin-left: 20rem;
    margin-right: -10rem;
    width: 22.5rem;
    height: 22.5rem;
  }

  @media screen and (min-width: 768px) and (max-width: 814px) {
    margin-left: 5rem;
    margin-right: 0rem;
    width: 22.5rem;
    height: 22.5rem;
  }

  @media screen and (min-width: 426px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 30px;
    width: 22rem;
    height: 22rem;
  }

  @media screen and (min-width: 319px) and (max-width: 426px) {
    flex-direction: column;
    align-items: center;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 30px;
    width: 15rem;
    height: 15rem;
  }
`;

export const WorkInfoContent = styled.div`
  margin-right: 15rem;

  @media screen and (max-width: 814px) {
    margin: 0;
  }
`;

export const Text = styled.div`
  color: #20217d;
  text-align: left;
  font-size: ${(props) => props.fs};
  font-weight: 600;
  line-height: normal;
  margin-left: 8rem;
  padding-left: 5rem;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 1030px) {
    font-size: 95%;
  }

  @media screen (min-width: 768px) and (max-width: 814px) {
    text-align: center;
    margin-left: 0rem;
  }

  @media (max-width: 768px) {
    font-size: 66%;
    padding-left: 0rem;
    margin-left: 0rem;
    text-align: center;
  }
`;

/*Hashtag 부분*/

export const HashtagContainer = styled.div`
  margin-left: 8rem;
  font-weight: bold;
  padding-left: 5rem;
  padding-right: 5rem;
  font-size: 24px;
  white-space: nowrap;
  left: 0;

  @media (max-width: 814px) {
    font-size: 18px;
    margin-left: 0rem;
  }

  @media screen and (max-width: 426px) {
    font-size: 15px;
  }

  @media screen and (max-width: 380px) {
    font-size: 9px;
  }
`;

export const HashtagUpLine = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 0;
  margin-bottom: 10px;

  @media (max-width: 410px) {
    margin-left: 20px;
  }
  @media (max-width: 400px) {
    margin-left: 10px;
  }
`;

export const HashtagDownLine = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
  margin-right: 20px;

  @media (max-width: 410px) {
    margin-left: 20px;
  }
  @media (max-width: 400px) {
    margin-left: 10px;
  }
`;

export const HashtagGreen = styled.div`
  background-color: #75ff72;
  color: black;
  border-radius: 30px;
  margin-left: 5px;
  margin-right: 5px;
  border: 10px solid #75ff72;
  border-radius: 30px;
`;

export const HashtagYellow = styled.div`
  background-color: #fff500;
  color: black;
  border-radius: 30px;
  margin-left: 5px;
  margin-right: 5px;
  border: 10px solid #fff500;
  border-radius: 30px;
`;
export const HashtagOrange = styled.div`
  background-color: #ff6b00;
  color: white;
  border-radius: 30px;
  margin-left: 5px;
  margin-right: 5px;
  border: 10px solid #ff6b00;
  border-radius: 30px;
`;

export const HashtagPurple = styled.div`
  background-color: #3239a1;
  color: #feaeec;
  border-radius: 30px;
  margin-left: 5px;
  margin-right: 5px;
  border: 10px solid #3239a1;
  border-radius: 30px;
`;

export const HashtagLightblue = styled.div`
  background-color: #86d4fd;
  color: black;
  border-radius: 30px;
  margin-left: 5px;
  margin-right: 5px;
  border: 10px solid #86d4fd;
  border-radius: 30px;
`;

export const HashtagPink = styled.div`
  background-color: #feaeec;
  color: white;
  border-radius: 30px;
  margin-left: 5px;
  margin-right: 5px;
  border: 10px solid #feaeec;
  border-radius: 30px;
`;

export const HashtagBlue = styled.div`
  background-color: #4578af;
  color: white;
  margin-left: 5px;
  margin-right: 5px;
  border: 10px solid #4578af;
  border-radius: 30px;
`;

/*IntroWork 부분*/

export const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const PrjDetail = styled.div`
  font-size: 4rem;
  color: #20217d;
  font-weight: 700;

  @media (max-width: 1030px) {
    font-size: 3.5rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 540px) {
    font-size: 2.5rem;
  }

  @media (max-width: 470px) {
    font-size: 2rem;
  }

  @media (max-width: 376px) {
    font-size: 1.5rem;
  }
`;

export const PrjURL = styled.div`
  font-size: 3rem;
  color: #20217d;
  font-weight: 700;
  margin-bottom: 9rem;

  @media (max-width: 1030px) {
    font-size: 2.5rem;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 540px) {
    font-size: 1.5rem;
  }

  @media (max-width: 470px) {
    font-size: 1rem;
  }
`;

/*Developer 부분*/
export const DeveloperContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5vw;
  padding: 0 8vw;
  margin: 0.5vw;
`;

export const DeTitle = styled.div`
  color: #20217d;
  font-size: 3vw;
  font-weight: 700;
  line-height: normal;
`;

export const UpBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 12vw;
  margin-right: ${(props) => (props.isThreeItems ? '0' : '12vw')};
`;
export const DownBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 12vw;
  margin-left: ${(props) => (props.isThreeItems ? '0' : '12vw')};
`;
export const TeamImpression = styled.p`
  margin: 0 auto;
  max-width: 90%;
  color: #20217d;
  font-weight: bold;
  font-size: 1.5vw;
  word-break: break-all;
  white-space: normal;
  @media screen and (max-width: 950px) {
    font-size: 2.5vw;
  }

  @media screen and (max-width: 400px) {
    font-size: 5vw;
  }
`;

/*DeveloperProfile 부분*/
export const DeveloperProfileContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 15vw;
  height: 30vw;
  @media screen and (max-width: 768px) {
    height: 40vw;
  }
  @media screen and (max-width: 400px) {
    height: 45vw;
  }
`;
export const DeveloperImg = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;
export const BackgroundImg = styled.img`
  height: 15vw;
  @media screen and (max-width: 768px) {
    height: 18vw;
  }
  @media screen and (max-width: 400px) {
    font-size: 2.6vw;
    height: 20vw;
  }
`;
export const PersonalImg = styled.img`
  height: 15vw;
  position: absolute;
  bottom: 0;
  @media screen and (max-width: 768px) {
    height: 18vw;
  }
  @media screen and (max-width: 400px) {
    height: 20vw;
  }
`;

export const Name = styled.div`
  font-size: 2vw;
  font-weight: bold;
  color: #20217d;
  margin-top: 0.5vw;

  @media screen and (max-width: 400px) {
    font-size: 3vw;
  }
`;

export const Impression = styled.div`
  width: 15vw;
  height: 10vw;
  font-size: 1.2vw;
  font-weight: 300;
  color: #20217d;
  overflow-y: auto;
  margin: 1vw 0;

  &::-webkit-scrollbar {
    width: 3px;
    @media screen and (max-width: 768px) {
      width: 2px;
    }
    @media screen and (max-width: 400px) {
      width: 1px;
    }
  }

  /*스크롤바 스타일 지정 */
  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 1px;
  }

  /*스크롤바 트랙 스타일 지정 */
  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  @media screen and (max-width: 768px) {
    font-size: 2vw;
    height: 30vw;
  }
  @media screen and (max-width: 400px) {
    font-size: 2.4vw;
    height: 25vw;
  }
`;

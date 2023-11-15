import styled from 'styled-components';


export const DevWrapper = styled.div`
place-items: center;
padding-top: 50px;
`;

export const Box = styled.div`
display: grid;
/* grid-template-columns: repeat(4, minmax(0,1fr)); */
place-items: center;

@media screen and (min-width: 320px) {
  grid-template-columns: repeat(2, minmax(0,1fr));
}

@media screen and (min-width: 393px) {
  grid-template-columns: repeat(2, minmax(0,1fr));
}

@media screen and (min-width: 834px) {
  grid-template-columns: repeat(4, minmax(0,1fr));
}
`;

/*Developer 부분*/
export const DeveloperContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

/*DeveloperProfile 부분*/
export const DeveloperProfileContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 15vw;
  height: 22vw;
  @media screen and (max-width: 400px) {
    height: 25vw;
  }

  @media screen and (min-width: 320px) {
  grid-template-columns: repeat(2, minmax(0,1fr));
  padding-bottom: 35vw;
}

@media screen and (min-width: 393px) {
  grid-template-columns: repeat(2, minmax(0,1fr));
  padding-bottom: 35vw;
}

@media screen and (min-width: 834px) {
  grid-template-columns: repeat(4, minmax(0,1fr));
  padding-bottom: 23vw;
}
`;

export const DeveloperImg = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const BackgroundImg = styled.img`
  /* height: 15vw; */

  @media screen and (min-width: 320px) {
  grid-template-columns: repeat(2, minmax(0,1fr));
  height: 25vw;
}

  @media screen and (min-width: 393px) {
  grid-template-columns: repeat(2, minmax(0,1fr));
  height: 25vw;

  @media screen and (min-width: 834px) {
  grid-template-columns: repeat(4, minmax(0,1fr));
  height: 15vw;
}
}
`;

export const PersonalImg = styled.img`
  /* height: 15vw; */
  position: absolute;
  bottom: 0;

  @media screen and (min-width: 320px) {
  grid-template-columns: repeat(2, minmax(0,1fr));
  height: 25vw;
}

  @media screen and (min-width: 393px) {
  grid-template-columns: repeat(2, minmax(0,1fr));
  height: 25vw;

  @media screen and (min-width: 834px) {
  grid-template-columns: repeat(4, minmax(0,1fr));
  height: 15vw;
}
}
`;

export const Name = styled.div`
  /* font-size: 2vw; */
  font-weight: bold;
  color: #20217d;
  margin-top: 0.5vw;

  @media screen and (max-width: 400px) {
    font-size: 3vw;
  }

  @media screen and (min-width: 320px) {
  grid-template-columns: repeat(2, minmax(0,1fr));
  font-size: 3vw;
}

@media screen and (min-width: 393px) {
  grid-template-columns: repeat(2, minmax(0,1fr));
  font-size: 3vw;
}

@media screen and (min-width: 834px) {
  grid-template-columns: repeat(4, minmax(0,1fr));
  font-size: 2vw;
}
`;

export const Impression = styled.div`
  width: 15vw;
  height: 4.7vw;
  font-size: 1.2vw;
  font-weight: bold;
  color: #20217d;
  overflow-y: scroll;
  margin: 1vw 0;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.8vw;
    height: 8vw;
  }
`;

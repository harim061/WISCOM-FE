import styled from 'styled-components';

export const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Floorplan = styled.div`
  position: relative;
  width: 300px;
  height: 450px;
  border: 2.5px solid black;
  margin: 0 auto;

  @media screen and (max-width: 400px) {
    width: 280px;
  }
  @media screen and (max-width: 350px) {
    width: 250px;
  }
`;

export const Title = styled.div`
  color: #000;
  text-align: center;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const Room = styled.div`
  position: absolute;
  width: 50px;
  height: 80px;
  border: 2px solid black;
  background-color: #fff;
  border-radius: 10px;

  font-size: 20px;
  padding: 5px 0 0 5px;

  @media screen and (max-width: 350px) {
    width: 40px;
    height: 80px;
  }
`;

export const RoomR = styled.div`
  position: absolute;
  width: 80px;
  height: 50px;
  border: 2px solid black;
  background-color: #fff;
  border-radius: 10px;
  font-size: 20px;
  padding: 5px 0 0 5px;

  @media screen and (max-width: 350px) {
    width: 70px;
    height: 40px;
  }
`;

export const Info = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border: 2px solid black;
  text-align: center;
  line-height: 50px;
  font-size: 15px;
  background-color: #fff;

  @media screen and (max-width: 400px) {
    width: 40px;
    height: 40px;
  }
`;

export const Door = styled.div`
  position: absolute;
  background-color: #ffffff;
  z-index: 2;

  bottom: -20px;
  left: 230px;
  width: 50px;
  height: 60px;

  @media screen and (max-width: 400px) {
    bottom: -20px;
    left: 215px;
    width: 50px;
    height: 60px;
  }
  @media screen and (max-width: 350px) {
    bottom: -20px;
    left: 200px;
    width: 50px;
    height: 30px;
  }
`;

export const LineContainer = styled.div`
  :nth-of-type(1) {
    top: 0px;
    left: 220px;
    width: 10px;
    height: 180px;
  }

  :nth-of-type(2) {
    top: 180px;
    left: 220px;
    width: 78px;
    height: 10px;
  }
`;
export const Line = styled.div`
  position: absolute;
  background-color: #000000;
  z-index: 2;

  @media screen and (max-width: 400px) {
    &:nth-child(2) {
      width: 59px;
    }
  }

  @media screen and (max-width: 350px) {
    &:nth-child(1) {
      left: 200px;
    }
    &:nth-child(2) {
      top: 180px;
      left: 200px;
      width: 48px;
      height: 10px;
    }
  }
`;

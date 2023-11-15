import styled from 'styled-components';

export const ListWrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 760px) and (min-width: 685px) {
    padding-left: 3rem;
  }
`;

export const Team = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;

  letter-spacing: 1px;
  line-height: 50px;

  @media screen and (max-width: 400px) {
    font-size: 15px;
  }
  @media screen and (max-width: 350px) {
    font-size: 13px;
  }

  &:hover {
    color: #7ce06b;
  }
`;

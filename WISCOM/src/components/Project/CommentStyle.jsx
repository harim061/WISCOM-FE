import styled from 'styled-components';

export const CommentWrapper = styled.div``;
export const CommentTextBox = styled.div`
  margin: 20px auto;
  max-width: 1260px;
  height: 350px;
  display: flex;
  flex-direction: column;
  background-color: #000;
  border-radius: 45px;

  @media screen and (min-width: 0px) and (max-width: 320px) {
    display: none;
  }
`;

export const CommentTagList = styled.div`
border-top-left-radius: 45px;
border-top-right-radius: 45px;
padding: 30px 30px;
display: flex;
flex-wrap: nowrap;
gap: 10px;
overflow-x: scroll;
overflow-y: hidden;
width: 100%;
white-space: nowrap;
-ms-overflow-style: none; /* for Internet Explorer, Edge */
scrollbar-width: none; /* for Firefox */
-webkit-overflow-scrolling: touch; // iOS 기기에서 스크롤 성능 향상

// 웹킷 기반 브라우저에서 스크롤바 숨기기
&::-webkit-scrollbar {
  display: none; // 
}

// 파이어폭스에서 스크롤바 숨기기
scrollbar-width: none; 

// IE와 엣지에서 스크롤바 숨기기
-ms-overflow-style: none; 

}
`;

export const CommentInput = styled.input`
  background-color: #000;
  border: none;
  resize: none;
  color: white;
  font-size: 19px;
  margin: 0px 30px 10px;
  font-family: 'Pretendard';

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #fff;
    font-size: 19px;
    font-family: 'Pretendard';

    @media screen and (max-width: 393px) {
      font-size: 16px;
      color: #fff;
    }

    @media screen and (min-width: 393px) and (max-width: 530px) {
      font-size: 18px;
      color: #fff;
    }

    @media screen and (min-width: 530px) and (max-width: 700px) {
      font-size: 20px;
      color: #fff;
    }

    @media screen and (min-width: 701px) and (max-width: 900px) {
      font-size: 24px;
      color: #fff;
    }
  }
`;

export const CommentTextArea = styled.textarea`
  background-color: #000;
  border: none;
  resize: none;
  color: #fff;
  font-size: 19px;
  font-weight: bold;
  margin: 10px 30px;
  height: 150px;
  font-family: 'Pretendard';

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #fff;
    font-size: 19px;
    font-family: 'Pretendard';

    @media screen and (max-width: 393px) {
      font-size: 16px;
    }

    @media screen and (min-width: 393px) and (max-width: 530px) {
      font-size: 18px;
    }

    @media screen and (min-width: 530px) and (max-width: 700px) {
      font-size: 20px;
    }

    @media screen and (min-width: 701px) and (max-width: 900px) {
      font-size: 24px;
    }
  }
`;

export const CommentCharCount = styled.p`
  color: #fff;
  text-align: right;
  font-size: 30px;
  font-weight: bold;
  margin: 0 30px 20px 0;

  @media screen and (max-width: 393px) {
    font-size: 16px;
  }

  @media screen and (min-width: 393px) and (max-width: 530px) {
    font-size: 18px;
  }

  @media screen and (min-width: 530px) and (max-width: 700px) {
    font-size: 20px;
  }

  @media screen and (min-width: 701px) and (max-width: 900px) {
    font-size: 24px;
  }
`;

export const CommentButton = styled.button`
  background-color: #75ff72;
  width: 378px;
  height: 75px;
  border-radius: 20px;
  margin: 0 auto;
  display: block;
  font-size: 35px;
  font-weight: bold;
  font-family: 'Pretendard';
  margin-bottom: 30px;

  @media screen and (max-width: 475px) {
    width: 100%; /* 모바일 화면에서 가로 가득 차도록 설정합니다. */
    margin: 0; /* 좌우 마진을 제거합니다. */
  }
`;

export const CommentList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CommentItem = styled.div`
  flex-basis: calc(33.33% - 50px);
  height: 439px;
  border-radius: 20px;
  background-color: #eeeeee;
  margin: 35px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 10px;

  @media screen and (min-width: 0px) and (max-width: 700px) {
    margin: 10px;
    flex-basis: calc(100% - 20px);
    height: 420px;
  }
  @media screen and (min-width: 701px) and (max-width: 900px) {
    margin: 10px;
    flex-basis: calc(50% - 20px);
    height: 410px;
  }
`;

export const CommentInfoWrapper = styled.div``;

export const CommentInfo = styled.div`
  margin: 20px;
`;

export const CommentAuthor = styled.span`
  font-weight: bold;
  font-size: 17px;
  margin-right: 20px;
  @media screen and (min-width: 0px) and (max-width: 700px) {
    font-size: 16px;
  }
`;

export const CommentDate = styled.span`
  font-weight: bold;
  font-size: 17px;

  @media screen and (min-width: 0px) and (max-width: 700px) {
    font-size: 16px;
  }
`;

export const CommentContent = styled.div`
  width: 100%;
  padding: 5px 5px 15px 15px;

  margin-right: 5px;
  font-weight: bold;
  font-size: 25px;
  max-height: 300px;
  overflow-y: auto;
  word-break: break-all;

  &::-webkit-scrollbar {
    width: 10px; /* 스크롤바의 두께 지정 */
    border-radius: 5px; /* 스크롤바 모서리를 둥글게 만듭니다. */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #000000;
    border-radius: 5px;
    backdrop-filter: blur(50px);
  }

  &::-webkit-scrollbar-track {
    background-color: #d9d9d9; /* 스크롤바 트랙 색상 지정 */
    border-radius: 5px; /* 스크롤바 모서리를 둥글게 만듭니다. */
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2) inset;
  }

  @media screen and (min-width: 0px) and (max-width: 700px) {
    font-size: 30px;
  }
`;

export const CommentTagsWrapper = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  margin-top: 5px;
`;

export const CommentSelectedTag = styled.div`
  height: 50px;
  border-radius: 50px;
  background-color: #fff;
  color: #000;
  padding: 0 15px;

  margin: 0 10px 10px 10px;
  display: flex;
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

export const CommentP = styled.p`
  font-size: 20px;
  font-weight: bold;

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

export const CommentPagination = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  ul {
    list-style: none;
    display: flex;
    gap: 10px;
    padding: 0;

    li {
      cursor: pointer;
      border: 1px solid #fff;
      font-size: 40px;
      font-weight: bold;
      color: #d9d9d9;

      @media screen and (min-width: 0px) and (max-width: 393px) {
        font-size: 18px;
      }

      @media screen and (min-width: 393px) and (max-width: 520px) {
        font-size: 22px;
      }

      @media screen and (min-width: 520px) and (max-width: 700px) {
        font-size: 28px;
      }

      @media screen and (min-width: 701px) and (max-width: 900px) {
        font-size: 36px;
      }

      &:hover {
        color: #000;
      }
      &.active {
        color: #75ff72;
      }
    }
  }
`;

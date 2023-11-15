import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background: #000000;

  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 1.4rem;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  .ri-close-line,
  .ri-arrow-left-s-line {
    font-size: 1.5rem;
    color: #ffffff;
    cursor: pointer;
  }
`;

export default function Header({ toggleChatbot }) {
  return (
    <HeaderContainer>
      <i className="ri-close-line" onClick={toggleChatbot} />
    </HeaderContainer>
  );
}

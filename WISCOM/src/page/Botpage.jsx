import { useState } from 'react';
import styled from 'styled-components';
import Bot from '../components/Chatbot/Bot';
import back from './../../src/img/Main/Folder.svg';
const ChatbotContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const ChatBtn = styled.button`
  width: 70px;
  height: 70px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50%, 100%;
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 300;

  @media screen and (max-width: 350px) {
    width: 50px;
    height: 50px;
  }
`;

export default function Botpage() {
  const [isChatbotOpen, setChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setChatbotOpen(!isChatbotOpen);
  };

  return (
    <div>
      <ChatBtn onClick={toggleChatbot}></ChatBtn>
      <ChatbotContainer isOpen={isChatbotOpen}>
        <Bot toggleChatbot={toggleChatbot} />
      </ChatbotContainer>
    </div>
  );
}

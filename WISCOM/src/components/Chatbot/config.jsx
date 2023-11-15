import { createChatBotMessage } from 'react-chatbot-kit';
import Header from './Header';
import * as C from './ChatStyle';

const config = (toggleChatbot) => ({
  initialMessages: [
    createChatBotMessage(
      '안녕하세요! 덕성여자대학교 컴퓨터공학전공 제 33회 WISCOM 홈페이지입니다. 아래에서 옵션을 선택해 주세요:',
      { widget: 'infoOptions' },
    ),
  ],

  widgets: [
    {
      widgetName: 'infoOptions',
      widgetFunc: (props) => (
        <C.AnswerWrapper>
          <C.AnswerBtn onClick={() => props.actionProvider.handleInfoDetails()}>정보를 원해</C.AnswerBtn>
          <C.AnswerBtn onClick={() => props.actionProvider.handleTestDetails()}>테스트하러 가기</C.AnswerBtn>
        </C.AnswerWrapper>
      ),
    },
    {
      widgetName: 'infoDetails',
      widgetFunc: (props) => (
        <C.AnswerWrapper>
          <C.AnswerBtn onClick={() => props.actionProvider.handleClockDetails()}>몇시까지 운영하나요?</C.AnswerBtn>
          <C.AnswerBtn onClick={() => props.actionProvider.handleWhoDetails()}>
            컴공이 아니어도 갈 수 있나요?
          </C.AnswerBtn>
        </C.AnswerWrapper>
      ),
    },
    {
      widgetName: 'testDetails',
      widgetFunc: (props) => <div>1. 어어 2. 머머ㅓ머 3. ...</div>,
    },
  ],
  customComponents: {
    header: () => <Header toggleChatbot={toggleChatbot} />,
  },
});

export default config;

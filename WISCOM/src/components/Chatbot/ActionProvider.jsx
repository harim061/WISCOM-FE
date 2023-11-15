class ActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleInfoOptions = () => {
    const message = this.createChatbotMessage('정보를 선택하세요:', { widget: 'infoOptions' });
    this.setState((prevState) => ({ ...prevState, messages: [...prevState.messages, message] }));
  };

  handleTestOptions = () => {
    const message = this.createChatbotMessage('테스트를 선택하세요:', { widget: 'testOptions' });
    this.setState((prevState) => ({ ...prevState, messages: [...prevState.messages, message] }));
  };

  handleInfoDetails = () => {
    const message = this.createChatbotMessage('어떤 정보를 원하시나요?', { widget: 'infoDetails' });
    this.setState((prevState) => ({ ...prevState, messages: [...prevState.messages, message] }));
  };

  handleTestDetails = () => {
    const message = this.createChatbotMessage('테스트 옵션을 선택하세요:', { widget: 'testDetails' });
    this.setState((prevState) => ({ ...prevState, messages: [...prevState.messages, message] }));
  };

  handleClockDetails = () => {
    const message = this.createChatbotMessage(
      '개회식은 11월 13일 12:00이며, 운영 시간은 11월 13일은 10:00~19:00 11월 14일은 10:00~17:30 입니다.',
    );
    this.setState((prevState) => ({ ...prevState, messages: [...prevState.messages, message] }));
  };
  handleWhoDetails = () => {
    const message = this.createChatbotMessage('전공생이 아니어도 누구나 방문할 수 있으니 많은 관심 부탁드립니다.');
    this.setState((prevState) => ({ ...prevState, messages: [...prevState.messages, message] }));
  };
}

export default ActionProvider;

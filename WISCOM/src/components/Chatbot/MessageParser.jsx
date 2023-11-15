class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (['정보확인하기', '정보 확인'].includes(lowerCaseMessage)) {
      this.actionProvider.handleInfoOptions();
    } else if (['테스트하기', '테스트'].includes(lowerCaseMessage)) {
      this.actionProvider.handleTestOptions();
    } else if (['몇시까지', '몇 시', '몇시'].includes(lowerCaseMessage)) {
      this.actionProvider.handleClockDetails();
    } else if (
      ['컴공만', '전공생만', '컴퓨터공학과', '컴퓨터공학전공', '아닌데', '아니어도'].includes(lowerCaseMessage)
    ) {
      this.actionProvider.handleWhoDetails();
    }
  }
}

export default MessageParser;

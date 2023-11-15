import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import './chatbot.css';
import 'remixicon/fonts/remixicon.css';

import config from './config.jsx';
import MessageParser from './MessageParser.jsx';
import ActionProvider from './ActionProvider.jsx';

export default function Bot({ toggleChatbot }) {
  const chatbotConfig = config(toggleChatbot);

  return (
    <div>
      <Chatbot config={chatbotConfig} messageParser={MessageParser} actionProvider={ActionProvider} />
    </div>
  );
}

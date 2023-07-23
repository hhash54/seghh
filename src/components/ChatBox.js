import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import 'tailwindcss/tailwind.css';

const prebuiltResponses = [
  'Sounds great!',
  'Interesting perspective.',
  'Could you provide more details?',
  'Thanks for sharing that.',
  'I see where you’re coming from.',
];

function ChatBox() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const endOfMessagesRef = useRef(null);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    setIsTyping(true);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setMessages(prevMessages => [...prevMessages, { text: message, sender: 'user' }]);
      setMessage('');
      setIsTyping(false);

      const randomResponse = prebuiltResponses[Math.floor(Math.random() * prebuiltResponses.length)];
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { text: randomResponse, sender: 'bot' }]);
      }, 1000);
    }
  };

  // Scroll to bottom function
  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll to bottom when messages update
  useEffect(scrollToBottom, [messages]);

  // Handle 'Enter' to send message
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
      event.preventDefault(); // Prevent form submission
    }
  };

  return (
    <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-lg mx-auto mt-10 h-full">
      <motion.h2 
        className="text-3xl font-bold mb-2 text-gray-200"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Chat
      </motion.h2>
      <div className="overflow-auto h-96 mb-4">
        <ul className="divide-y divide-gray-700">
          {messages.map((message, index) => (
            <motion.li 
              key={index} 
              className="py-4 text-gray-300"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <strong className="font-bold">{message.sender}: </strong> {message.text}
            </motion.li>
          ))}
          {isTyping && 
            <motion.li
              className="italic text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, loop: Infinity, repeatDelay: 0.5 }}
            >
              User is typing...
            </motion.li>
          }
        </ul>
        <div ref={endOfMessagesRef}></div>
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          value={message}
          onChange={handleMessageChange}
          onKeyDown={handleKeyDown}
          className="w-full px-4 py-2 mr-2 rounded-md bg-gray-800 border border-gray-700 text-gray-300"
        />
        <motion.button 
          onClick={handleSendMessage} 
          className="bg-blue-500 text-white rounded-md px-4 py-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Send
        </motion.button>
      </div>
    </div>
  );
}

export default ChatBox;

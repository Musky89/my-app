import React, { useState } from "react";
import "./Collaboration.css";

const Collaboration = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const sendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, inputMessage]);
      setInputMessage("");
    }
  };

  return (
    <div className="collaboration">
      <h2>Collaboration</h2>
      <div className="chat">
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className="message">
              {message}
            </div>
          ))}
        </div>
        <div className="input-area">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message here..."
            required
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;

import React from "react";
import { Container, Comment } from "semantic-ui-react";

import "./ChatWindow.scss";

export default function ChatWindow(props) {
  return (
    <Container>
      {props.messages.map(message => (
        <div>
          <span>{message.sender}:</span>
          <span>{message.content}</span>
        </div>
      ))}
    </Container>
  );
}

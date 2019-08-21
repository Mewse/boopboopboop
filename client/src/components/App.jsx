import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import ChatWindow from "./ChatWindow";

export default class App extends Component {
  state = {
    messages: [
      {
        sender: "Bill",
        content: "···· · ·-·· ·-·· --- ---",
        translated: "helloo",
        timestamp: Date.now()
      },
      {
        sender: "Maud",
        content: "···· · -·-- - ···· · ·-· ·",
        translated: "hey there",
        timestamp: Date.now()
      }
    ],
    showTranslations: false
  };
  render() {
    return (
      <ChatWindow
        messages={this.state.messages}
        showTranslations={this.state.showTranslations}
      />
    );
  }
}

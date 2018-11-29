import React, { Component } from "react";
import content from "./popupContent";
import {
  GlobalStyle,
  SButton,
  SPopup,
  SOverlay,
  SPopupHeader,
  SPopupBody,
  SPopupFooter,
  SPopupWrap
} from "./styled";

export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      changing: false
    };
  }
  componentDidMount() {
    this.setState({
      content: content[this.props.id]
    });
  }
  duration = 250;
  openPopup = () => {
    this.setState({
      open: true,
      changing: true
    });
    setTimeout(() => {
      this.setState({
        changing: false
      });
    }, this.duration);
  };
  closePopup = () => {
    this.setState({
      changing: true
    });
    setTimeout(() => {
      this.setState({
        open: false,
        changing: false
      });
    }, this.duration);
  };

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        {this.state.open ? (
          <SOverlay changing={this.state.changing} onClick={this.closePopup}>
            <SPopupWrap>
              <SPopup
                duration={this.duration / 1000 + "s"}
                changing={this.state.changing}
                onClick={e => e.stopPropagation()}
              >
                <SPopupHeader>
                  <button onClick={this.closePopup}>x</button>
                  <h3>{this.state.content.heading}</h3>
                </SPopupHeader>
                <SPopupBody>{this.state.content.text}</SPopupBody>
                <SPopupFooter>
                  {this.state.content.buttons.map(button => (
                    <SButton
                      key={button.text.replace(" ", "-")}
                      onClick={button.action || this.closePopup}
                    >
                      {button.text}
                    </SButton>
                  ))}
                </SPopupFooter>
              </SPopup>
            </SPopupWrap>
          </SOverlay>
        ) : null}
        <button onClick={this.openPopup}>Open</button>
      </React.Fragment>
    );
  }
}

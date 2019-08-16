import React, { Component } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import ReactCssTransitionGroup from "react-addons-css-transition-group";
import styled from "styled-components";

const Style = styled.div`
  .alert-enter {
    opacity: 0;
    transform: translateY(-50px);
  }
  .alert-enter.alert-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: 0.3s ease-in;
  }
  .styleTitle {
    color: #0b7bf4;
  }
  .formPadding {
    padding-top: 20px;
  }
`;

class AddContact extends Component {
  alertMessages = {
    username_faild_en: "Typed name is to short. Must have at least 3 signs.",
    username_faild_pl:
      "Imię  podane jest za krótkie. Powinno składać się przynajmniej z 3 znaków",
    email_faild_en: 'Sorry, but you miss "@" at your email',
    email_faild_pl: "Przepraszam ale brakuje znaku @ w emailu"
  };

  render() {
    const {
      username,
      email,
      errors: { username: usernameValid, email: emailValid }
    } = this.props.value;
    const { username_faild_en, email_faild_en } = this.alertMessages;
    return (
      <Style>
        <Form
          className="formPadding"
          onSubmit={this.props.submitItem}
          noValidate
        >
          <Form.Label className="styleTitle">Send me a message</Form.Label>
          <Form.Group>
            <Form.Control
              type="text"
              name="username"
              value={username}
              onChange={this.props.change}
              placeholder="Name (requierd)"
            />
          </Form.Group>
          <ReactCssTransitionGroup
            transitionName="alert"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            {usernameValid && (
              <Alert variant="danger">{username_faild_en}</Alert>
            )}
          </ReactCssTransitionGroup>
          <Form.Group>
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={this.props.change}
              placeholder="Email (requierd)"
            />
          </Form.Group>
          <ReactCssTransitionGroup
            transitionName="alert"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            {emailValid && <Alert variant="danger">{email_faild_en}</Alert>}
          </ReactCssTransitionGroup>
          <Form.Group>
            <Form.Control type="text" placeholder="Link" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" placeholder="Image from http://" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows="3" placeholder="Description" />
          </Form.Group>
          <Button type="submit" variant="primary">
            Send
          </Button>
        </Form>
      </Style>
    );
  }
}

export default AddContact;

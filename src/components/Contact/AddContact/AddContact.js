import React, { Component } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import ReactCssTransitionGroup from "react-addons-css-transition-group";
import styled from "styled-components";

const Style = styled.div`
  .alert-enter {
    opacity: 0;
    transform: translateY(50px);
  }
  .alert-enter.alert-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: 0.3s ease-in-out;
  }
  .styleTitle {
    color: #0b7bf4;
  }
  .formPadding {
    position: relative;
    padding-top: 20px;
  }
  div.addImg {
    position: relative;
    top: -30px;
    left: 260px;
    width: 20px;
    height: 20px;
    border: 1px solid #0b7bf4;
    border-radius: 50%;
    background: none;
    transition: all 0.5s ease;
    cursor: pointer;
  }
  .addImg::before {
    content: "+";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 10px;
    width: 10px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0b7bf4;
  }
  .addImg:hover::before {
    color: #ffff;
  }
  .addImg:hover {
    background: #0b7bf4;
  }
`;

class AddContact extends Component {
  alertMessages = {
    username_faild_en: "Typed name is to short. Must have at least 3 signs.",
    username_faild_pl:
      "Imię  podane jest za krótkie. Powinno składać się przynajmniej z 3 znaków",
    email_faild_en: 'Sorry, but you miss "@" at your email',
    email_faild_pl: 'Przepraszam ale brakuje znaku "@" w emailu',
    link_faild_en:
      'This is not a facebook or twitter link. Please enter correct path like "https://www.twitter.com/..." or leave this field blank',
    link_faild_pl:
      "To nie jest link do Facebooka ani Twittera. Wprowadź poprawną ścieżkę, np. „https: //www.twitter.com / ...” lub pozostaw to pole puste"
  };

  render() {
    const {
      username,
      email,
      link,
      image,
      textarea,
      errors: { username: usernameValid, email: emailValid, link: linkValid }
    } = this.props.value;
    const {
      username_faild_en,
      username_faild_pl,
      email_faild_en,
      email_faild_pl,
      link_faild_en,
      link_faild_pl
    } = this.alertMessages;
    const { checked, submitItem, change, click, modal } = this.props;
    const message_en = "Send me a message";
    const message_pl = "Wyślij mi wiadomość";
    const sendButton_en = "Send";
    const sendButton_pl = "Wyślij";

    return (
      <Style>
        <Form className="formPadding" onSubmit={submitItem} noValidate>
          <Form.Label className="styleTitle">
            {checked ? message_en : message_pl}
          </Form.Label>
          <Form.Group>
            <Form.Control
              type="text"
              name="username"
              value={username}
              onChange={change}
              placeholder={checked ? "Name (requierd)" : "Imię (wymagane)"}
            />
          </Form.Group>
          <ReactCssTransitionGroup
            transitionName="alert"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            {usernameValid && (
              <Alert variant="danger">
                {checked ? username_faild_en : username_faild_pl}
              </Alert>
            )}
          </ReactCssTransitionGroup>
          <Form.Group>
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={change}
              placeholder={checked ? "Email (requierd)" : "Email (wymagane)"}
            />
          </Form.Group>
          <ReactCssTransitionGroup
            transitionName="alert"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            {emailValid && (
              <Alert variant="danger">
                {checked ? email_faild_en : email_faild_pl}
              </Alert>
            )}
          </ReactCssTransitionGroup>
          <Form.Group>
            <Form.Control
              type="text"
              name="link"
              value={link}
              onChange={change}
              placeholder={
                checked
                  ? "http:// Facebook or Twitter"
                  : "http:// Facebook lub Twitter"
              }
            />
          </Form.Group>
          <ReactCssTransitionGroup
            transitionName="alert"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            {linkValid && (
              <Alert variant="danger">
                {checked ? link_faild_en : link_faild_pl}
              </Alert>
            )}
          </ReactCssTransitionGroup>
          <Form.Group>
            <Form.Control
              type="text"
              name="image"
              value={image}
              onChange={change}
              placeholder={
                checked
                  ? "Image from http:// or choose"
                  : "Obrazek z http:// lub wybierz"
              }
            />
            <div className="addImg" onClick={modal}></div>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              type="text"
              name="textarea"
              value={textarea}
              onChange={change}
              as="textarea"
              rows="3"
              placeholder={checked ? "Message" : "Wiadomość"}
            />
          </Form.Group>
          <Button type="submit" variant="primary" onClick={click}>
            {checked ? sendButton_en : sendButton_pl}
          </Button>
        </Form>
      </Style>
    );
  }
}

export default AddContact;
